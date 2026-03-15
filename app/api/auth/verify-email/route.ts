import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import Payment from "@/models/Payment";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const token = searchParams.get("token");

        if (!token) {
            return NextResponse.redirect(new URL("/verify-email?status=error&message=Invalid+token", req.url));
        }

        await dbConnect();

        const user = await User.findOne({ verificationToken: token });

        if (!user) {
            return NextResponse.redirect(new URL("/verify-email?status=error&message=User+not+found", req.url));
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        
        // After verification, check if there are any pending free enrollments for this user
        // Or if they just finished a payment, we should ensure they are enrolled.
        // Actually, for FREE enrollments, we wait for verification to add the course.
        
        const payments = await Payment.find({ email: user.email, status: 'captured' });
        
        for (const payment of payments) {
            if (payment.courseId && !user.enrolledCourses.includes(payment.courseId)) {
                user.enrolledCourses.push(payment.courseId);
            }
        }

        await user.save();

        return NextResponse.redirect(new URL("/verify-email?status=success", req.url));
    } catch (error: any) {
        console.error("Verification Error:", error);
        return NextResponse.redirect(new URL("/verify-email?status=error&message=Server+error", req.url));
    }
}
