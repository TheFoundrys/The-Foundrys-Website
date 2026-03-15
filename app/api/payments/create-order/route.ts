import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import dbConnect from "@/lib/mongodb";
import Payment from "@/models/Payment";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import nodemailer from "nodemailer";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// Configure NodeMailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export async function POST(req: Request) {
    try {
        console.log("Starting order creation...");
        const body = await req.json();
        const { amount, currency, courseName, courseId, name, email, phone, username, password } = body;

        await dbConnect();

        // 1. Handle User Signup/Update
        let user = await User.findOne({ 
            $or: [{ email: email.toLowerCase() }, { username: username?.toLowerCase() }] 
        });

        const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
        const verificationToken = crypto.randomBytes(32).toString("hex");

        if (user) {
            // Update existing user
            user.name = name;
            user.phone = phone;
            if (hashedPassword) user.password = hashedPassword;
            // Note: We don't change isVerified here if they are already verified
            await user.save();
        } else if (password) {
            // Create new user (unverified by default)
            user = await User.create({
                name,
                username: username?.toLowerCase(),
                email: email.toLowerCase(),
                phone,
                password: hashedPassword,
                isVerified: false,
                verificationToken,
                enrolledCourses: [] // Only add after verification/payment
            });

            // Send Verification Email
            const verifyUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/auth/verify-email?token=${verificationToken}`;
            
            await transporter.sendMail({
                from: `"The Foundry's" <${process.env.GMAIL_USER}>`,
                to: email,
                subject: "Verify Your Email - The Foundry's",
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #000;">Welcome to The Foundry's!</h2>
                        <p>To access your courses and the Compass portal, please verify your email address by clicking the button below:</p>
                        <a href="${verifyUrl}" style="display: inline-block; padding: 12px 24px; background-color: #000; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold;">Verify Email Address</a>
                        <p style="margin-top: 20px; color: #666;">If you did not sign up for an account, you can ignore this email.</p>
                    </div>
                `,
            });
            console.log("Verification email sent to:", email);
        }

        // 2. Handle Free Enrollment response
        if (amount <= 0) {
            const freeOrderId = `free_${Date.now()}`;
            
            await Payment.create({
                name,
                email,
                phone,
                courseName,
                courseId,
                amount: 0,
                currency: currency || "INR",
                razorpayOrderId: freeOrderId,
                status: 'captured',
            });

            // Note: Enrollment happens after verification or paid success
            // For FREE, if user is already verified, we could enroll now, 
            // but the request asks for "verification check and then sign in and then payments"
            // So we wait for verification.
            
            return NextResponse.json({
                id: freeOrderId,
                currency: currency || "INR",
                amount: 0,
                isFree: true,
                message: "Verification email sent. Please verify to access course."
            });
        }

        // 3. Create Razorpay Order
        const options = {
            amount: Math.round(amount * 100),
            currency: currency || "INR",
            receipt: `rcpt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        // 4. Save Pending Payment
        await Payment.create({
            name,
            email,
            phone,
            courseName,
            courseId,
            amount,
            currency: options.currency,
            razorpayOrderId: order.id,
            status: 'pending',
        });

        return NextResponse.json({
            id: order.id,
            currency: order.currency,
            amount: order.amount,
        });
    } catch (error: any) {
        console.error("Order Creation Error:", error);
        return NextResponse.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        );
    }
}
