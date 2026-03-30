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

    await connectDB();

    // 1. Check if user already exists in the shared Compass users collection
    const existingUser = await CompassUser.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ 
        verified: true, 
        isExistingUser: true,
        message: 'Existing user found, skipping verification' 
      });
    }

    // 2. Check if there's a temporary verification token from a recent magic-link
    const tokenRecord = await VerificationToken.findOne({ email });

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
    return NextResponse.json({ error: 'Failed to check status' }, { status: 500 });
  }
}
