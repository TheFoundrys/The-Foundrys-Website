import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        console.log("Dynamic import test...");
        const body = await req.json();
        
        // Dynamic import
        const Razorpay = (await import("razorpay")).default;
        
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID || "test",
            key_secret: process.env.RAZORPAY_KEY_SECRET || "test",
        });

        return NextResponse.json({
            success: true,
            message: "Razorpay dynamic initialized",
            hasKey: !!process.env.RAZORPAY_KEY_ID
        });
    } catch (error: any) {
        console.error("Dynamic Import Error:", error);
        return NextResponse.json(
            { 
                error: error.message || "Internal server error",
                stack: error.stack
            },
            { status: 500 }
        );
    }
}
