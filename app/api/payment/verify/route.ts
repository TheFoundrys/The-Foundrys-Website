import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/mongodb';
import Enrollment from '@/lib/models/Enrollment';
import CompassUser from '@/lib/models/CompassUser';
import CompassCourse from '@/lib/models/CompassCourse';
import CompassEnrollment from '@/lib/models/CompassEnrollment';
import CompassTransaction from '@/lib/models/CompassTransaction';
import nodemailer from 'nodemailer';
import { sendEnrollmentInvoiceEmail } from '@/lib/email';

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

    // Update enrollment record if MongoDB is configured
    let enrollment: any = null;
    if (process.env.MONGODB_URI) {
      try {
        await connectDB();
        if (test && email) {
          enrollment = await Enrollment.findOne({ email }).sort({ createdAt: -1 });
        } else if (enrollmentId && !enrollmentId.startsWith('temp_')) {
          enrollment = await Enrollment.findById(enrollmentId);
        }

        if (enrollment) {
          await Enrollment.findByIdAndUpdate(
            enrollment._id,
            {
              razorpayPaymentId: razorpay_payment_id || 'test_payment_id',
              razorpaySignature: razorpay_signature || 'test_signature',
              status: 'paid',
            },
            { new: true }
          );
        }
      } catch (dbErr) {
        console.warn('MongoDB enrollment update skipped/failed:', dbErr);
      }
    }

    // --- Compass Synchronization ---
    const studentEmail = enrollment?.email || email || body.email;
    const studentName = enrollment?.name || body.name || 'Enrolled Student';
    const courseSlug = enrollment?.courseId || body.courseId || 'advanced-management-fde';

    if (studentEmail && process.env.MONGODB_URI) {
      try {
        console.log(`🔄 Syncing enrollment for ${studentEmail} with Compass...`);
        
        // 1. Find or Create Compass User
        let compassUser = await CompassUser.findOne({ email: studentEmail });
        if (!compassUser) {
          console.log(`👤 Creating new Compass user for ${studentEmail}...`);
          const salt = await bcrypt.genSalt(10);
          const randomPassword = crypto.randomBytes(8).toString('hex');
          const hashedPassword = await bcrypt.hash(randomPassword, salt);
          
          // Derive username from email (unique)
          const usernameBase = studentEmail.split('@')[0].replace(/[^a-zA-Z0-9]/g, '');
          const usernameSuffix = Math.floor(Math.random() * 1000);
          const username = `${usernameBase}${usernameSuffix}`;

          compassUser = await CompassUser.create({
            name: studentName,
            email: studentEmail,
            username,
            phoneNumber: enrollment?.phone || body.phone,
            password: hashedPassword,
            role: 'learner',
            status: 'active',
            isVerified: true
          });
        }

        // 2. Find Course in Compass
        const compassCourse = await CompassCourse.findOne({ slug: courseSlug });
        
        if (compassCourse && compassUser) {
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
            amount: enrollment?.amount || body.amount || 2500,
            utr: razorpay_payment_id || 'test_payment_id',
            status: 'successful',
            paymentDate: new Date()
          });
          console.log(`✅ Compass transaction synced: ${invoiceId}`);
        } else {
          console.warn(`⚠️ Compass course with slug '${courseSlug}' not found. Skipping auto-enrollment.`);
        }
      } catch (syncError) {
        console.error('❌ Compass sync failed:', syncError);
      }
    }

    // Send official Tax Invoice & Enrollment Receipt email
    const recipientEmail = enrollment?.email || email || body.email;
    const recipientName = enrollment?.name || body.name || 'Enrolled Executive';
    const courseTitle = enrollment?.courseName || body.courseName || 'Advanced Management in Forward Deployed Engineering';
    const payAmount = enrollment?.amount || body.amount || 2500;
    const payCurrency = enrollment?.currency || body.currency || 'USD';

    if (recipientEmail) {
      try {
        console.log(`📧 Sending official Tax Invoice & Enrollment Receipt to ${recipientEmail}...`);
        await sendEnrollmentInvoiceEmail({
          to: recipientEmail,
          name: recipientName,
          amount: payAmount,
          currency: payCurrency,
          paymentId: razorpay_payment_id,
          courseName: courseTitle,
          phone: enrollment?.phone || body.phone,
          company: body.company,
        });
        console.log(`✅ Enrollment invoice & receipt sent to ${recipientEmail}`);
      } catch (emailError) {
        console.error('Failed to send invoice email:', emailError);
      }
    }

    return NextResponse.json({
      success: true,
      enrollment: {
        id: enrollment?._id || enrollmentId,
        name: recipientName,
        email: recipientEmail,
        courseName: courseTitle,
        amount: payAmount,
        currency: payCurrency,
        paymentId: razorpay_payment_id,
      },
    });
  } catch (error: unknown) {
    console.error('Payment verification error:', error);
    const message = error instanceof Error ? error.message : 'Payment verification failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
