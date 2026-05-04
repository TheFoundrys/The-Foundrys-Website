import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { connectDB } from '@/lib/mongodb';
import VerificationToken from '@/lib/models/VerificationToken';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.redirect(new URL('/verify-email?error=missing_token', request.url));
  }

  try {
    await connectDB();

    const verificationRecord = await VerificationToken.findOne({ token });

    if (!verificationRecord) {
      return NextResponse.redirect(new URL('/verify-email?error=invalid_token', request.url));
    }

    if (new Date() > verificationRecord.expiresAt) {
      return NextResponse.redirect(new URL('/verify-email?error=expired_token', request.url));
    }

    // Mark as verified - we can use a separate VerifiedEmail collection or just the presence in VerificationToken
    // But for the polling check-status to work, we need to signify success.
    // Let's update the record to have a 'verified' flag or just keep it and the check-status will find it.
    // Actually, let's add a 'verified' field to the schema and update it.
    
    await VerificationToken.updateOne({ token }, { $set: { verified: true } });

    return NextResponse.redirect(new URL('/verify-email?success=true', request.url));
  } catch (error) {
    console.error('Verify link error:', error);
    return NextResponse.redirect(new URL('/verify-email?error=server_error', request.url));
  }
}
