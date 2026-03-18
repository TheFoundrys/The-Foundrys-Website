import { NextResponse } from "next/server";

export async function GET() {
    const keyId = process.env.RAZORPAY_KEY_ID;
    return NextResponse.json({
        hasKey: !!keyId,
        keyPrefix: keyId ? keyId.substring(0, 8) : null,
        nodeEnv: process.env.NODE_ENV,
        nextPublicHasKey: !!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
    });
}
