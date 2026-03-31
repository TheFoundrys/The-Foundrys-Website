import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import CompassUser from '@/lib/models/CompassUser';
import VerificationToken from '@/lib/models/VerificationToken';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    console.log('Connecting to DB...');
    await connectDB();
    console.log('Connected to DB. Checking CompassUser for email:', email);

    // 1. Check if user already exists in the shared Compass users collection
    const existingUser = await CompassUser.findOne({ email });
    console.log('CompassUser check complete. Found:', !!existingUser);
    if (existingUser) {
      return NextResponse.json({ 
        verified: true, 
        isExistingUser: true,
        message: 'Existing user found, skipping verification' 
      });
    }

    // 2. Check if there's a temporary verification token from a recent magic-link
    console.log('Checking VerificationToken for email:', email);
    const tokenRecord = await VerificationToken.findOne({ email });
    console.log('VerificationToken check complete. Found:', !!tokenRecord);

    if (!tokenRecord) {
      return NextResponse.json({ verified: false, message: 'No verification pending' });
    }

    // Check if verified field is true (set by verify-link)
    if (tokenRecord.verified) {
      return NextResponse.json({ 
        verified: true, 
        message: 'Email verified successfully' 
      });
    }

    return NextResponse.json({ verified: false, message: 'Still waiting for verification' });
  } catch (error) {
    console.error('Check status error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ 
      error: 'Failed to check status',
      details: message,
      stack: process.env.NODE_ENV === 'development' ? (error as Error).stack : undefined
    }, { status: 500 });
  }
}
