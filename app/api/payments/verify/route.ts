import { NextResponse } from "next/server";
import crypto from "crypto";
import dbConnect from "@/lib/mongodb";
import Payment from "@/models/Payment";
import User from "@/models/User";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            email,
            courseId
        } = await req.json();

        // Verify Signature
        let isSignatureValid = false;

        if (razorpay_payment_id === "free_enrollment" || razorpay_order_id.startsWith("free_")) {
            // Bypass signature verification for free enrollments
            isSignatureValid = true;
        } else {
            const body = razorpay_order_id + "|" + razorpay_payment_id;
            const expectedSignature = crypto
                .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
                .update(body.toString())
                .digest("hex");
            isSignatureValid = expectedSignature === razorpay_signature;
        }

        if (isSignatureValid) {
            // Update payment record in MongoDB
            await Payment.findOneAndUpdate(
                { razorpayOrderId: razorpay_order_id },
                {
                    razorpayPaymentId: razorpay_payment_id,
                    razorpaySignature: razorpay_signature,
                    status: "captured",
                }
            );

            // Update user enrollment
            if (email && courseId) {
                await User.findOneAndUpdate(
                    { email: email.toLowerCase() },
                    { $addToSet: { enrolledCourses: courseId } }
                );
            }

            return NextResponse.json({
                success: true,
                message: "Payment verified successfully",
            });
        } else {
            // Update payment record to failed
            await Payment.findOneAndUpdate(
                { razorpayOrderId: razorpay_order_id },
                { status: "failed" }
            );

            return NextResponse.json(
                { success: false, message: "Invalid signature" },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error("Verification Error:", error);
        return NextResponse.json(
            { error: "Error verifying payment" },
            { status: 500 }
        );
    }
}
