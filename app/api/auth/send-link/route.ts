import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import crypto from 'crypto';
import { connectDB } from '@/lib/mongodb';
import VerificationToken from '@/lib/models/VerificationToken';
import { sendVerificationLink } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { email, baseUrl } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    await connectDB();

    // Generate a secure random token
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

    // Upsert token
    await VerificationToken.findOneAndUpdate(
      { email },
      { token, expiresAt },
      { upsert: true, new: true }
    );

    const link = `${baseUrl || 'http://localhost:3000'}/api/auth/verify-link?token=${token}`;
    await sendVerificationLink(email, link);

    return NextResponse.json({ success: true, message: 'Verification link sent' });
  } catch (error) {
    console.error('Error sending link details:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ 
      error: 'Failed to send verification link', 
      details: errorMessage,
      stack: process.env.NODE_ENV === 'development' ? (error as Error).stack : undefined
    }, { status: 500 });
  }
}
