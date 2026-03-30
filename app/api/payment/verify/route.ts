import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/mongodb';
import Enrollment from '@/lib/models/Enrollment';
import CompassUser from '@/lib/models/CompassUser';
import CompassCourse from '@/lib/models/CompassCourse';
import CompassEnrollment from '@/lib/models/CompassEnrollment';
import CompassTransaction from '@/lib/models/CompassTransaction';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, enrollmentId, test, email } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !enrollmentId) {
      if (!test) return NextResponse.json({ error: 'Missing required payment fields' }, { status: 400 });
    }

    // Verify Razorpay signature (bypass if test is true)
    if (!test) {
      const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

      if (expectedSignature !== razorpay_signature) {
        return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 });
      }
    }

    // Update enrollment record
    await connectDB();

    let enrollment;
    if (test && email) {
      enrollment = await Enrollment.findOne({ email }).sort({ createdAt: -1 });
    } else {
      enrollment = await Enrollment.findById(enrollmentId);
    }

    if (!enrollment) {
      return NextResponse.json({ error: 'Enrollment not found' }, { status: 404 });
    }

    const updatedEnrollment = await Enrollment.findByIdAndUpdate(
      enrollment._id,
      {
        razorpayPaymentId: razorpay_payment_id || 'test_payment_id',
        razorpaySignature: razorpay_signature || 'test_signature',
        status: 'paid',
      },
      { new: true }
    );

    // --- Compass Synchronization ---
    try {
      console.log(`🔄 Syncing enrollment for ${enrollment.email} with Compass...`);
      
      // 1. Find or Create Compass User
      let compassUser = await CompassUser.findOne({ email: enrollment.email });
      if (!compassUser) {
        console.log(`👤 Creating new Compass user for ${enrollment.email}...`);
        const salt = await bcrypt.genSalt(10);
        const randomPassword = crypto.randomBytes(8).toString('hex');
        const hashedPassword = await bcrypt.hash(randomPassword, salt);
        
        // Derive username from email (unique)
        const usernameBase = enrollment.email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '');
        const usernameSuffix = Math.floor(Math.random() * 1000);
        const username = `${usernameBase}${usernameSuffix}`;

        compassUser = await CompassUser.create({
          name: enrollment.name,
          email: enrollment.email,
          username,
          phoneNumber: enrollment.phone,
          password: hashedPassword,
          role: 'learner',
          status: 'active',
          isVerified: true
        });
      }

      // 2. Find Course in Compass
      // Mapping: ai-fluency (Foundry) -> ai-fluency (Compass)
      const compassCourse = await CompassCourse.findOne({ slug: enrollment.courseId });
      
      if (compassCourse) {
        // 3. Create/Update Enrollment
        await CompassEnrollment.findOneAndUpdate(
          { userId: compassUser._id, courseId: compassCourse._id },
          { 
            status: 'active',
            lastAccessedAt: new Date(),
            progress: {} 
          },
          { upsert: true, new: true }
        );
        console.log(`✅ Compass enrollment synced: User ${compassUser.username} -> Course ${compassCourse.slug}`);

        // 4. Create Transaction Record for Purchase History
        const invoiceId = `INV-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
        console.log(`🧾 Creating transaction record: ${invoiceId}...`);
        
        await CompassTransaction.create({
          invoiceId,
          user: compassUser._id,
          courses: [compassCourse._id],
          amount: enrollment.amount,
          utr: razorpay_payment_id || 'test_payment_id',
          status: 'successful',
          paymentDate: new Date()
        });
        console.log(`✅ Compass transaction synced: ${invoiceId}`);
      } else {
        console.warn(`⚠️ Compass course with slug '${enrollment.courseId}' not found. Skipping auto-enrollment.`);
      }
    } catch (syncError) {
      console.error('❌ Compass sync failed:', syncError);
      // We continue since the payment itself was successful at the Foundry level
    }

    // Send confirmation email
    try {
      const currencySymbol = enrollment.currency === 'INR' ? '₹' : '$';
      await transporter.sendMail({
        from: `"The Foundry's" <${process.env.SMTP_USER}>`,
        to: enrollment.email,
        subject: `✅ Enrollment Confirmed: ${enrollment.courseName}`,
        html: `
          <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 40px 20px;">
            <div style="background: white; border-radius: 16px; padding: 40px; border: 1px solid #e2e8f0;">
              <div style="text-align: center; margin-bottom: 32px;">
                <h1 style="color: #0f172a; font-size: 24px; margin: 0;">Enrollment Confirmed! 🎉</h1>
              </div>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                Hi <strong>${enrollment.name}</strong>,
              </p>
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                Thank you for enrolling in <strong>${enrollment.courseName}</strong> at The Foundry's. Your payment has been successfully processed.
              </p>
              
              <div style="background: #f1f5f9; border-radius: 12px; padding: 24px; margin: 24px 0;">
                <h3 style="color: #0f172a; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Enrollment Details</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="color: #64748b; padding: 8px 0; font-size: 14px;">Course</td>
                    <td style="color: #0f172a; padding: 8px 0; font-size: 14px; font-weight: 600; text-align: right;">${enrollment.courseName}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; padding: 8px 0; font-size: 14px;">Amount Paid</td>
                    <td style="color: #0f172a; padding: 8px 0; font-size: 14px; font-weight: 600; text-align: right;">${currencySymbol}${enrollment.amount.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; padding: 8px 0; font-size: 14px;">Payment ID</td>
                    <td style="color: #0f172a; padding: 8px 0; font-size: 14px; font-weight: 600; text-align: right;">${razorpay_payment_id}</td>
                  </tr>
                </table>
              </div>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                Our team will reach out to you shortly with the program schedule and onboarding details.
              </p>
              
              <div style="text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
                <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                  The Foundry's Deep Tech School<br/>
                  Hyderabad, India
                </p>
              </div>
            </div>
          </div>
        `,
      });
      console.log(`📧 Enrollment confirmation sent to ${enrollment.email}`);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the payment verification because of email failure
    }

    return NextResponse.json({
      success: true,
      enrollment: {
        id: enrollment._id,
        name: enrollment.name,
        email: enrollment.email,
        courseName: enrollment.courseName,
        amount: enrollment.amount,
        currency: enrollment.currency,
        paymentId: razorpay_payment_id,
      },
    });
  } catch (error: unknown) {
    console.error('Payment verification error:', error);
    const message = error instanceof Error ? error.message : 'Payment verification failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
