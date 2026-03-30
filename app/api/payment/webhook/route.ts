import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { connectDB } from '@/lib/mongodb';
import Enrollment from '@/lib/models/Enrollment';
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
    const rawBody = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
    }

    // Verify webhook signature (matches CRM pattern)
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || 'my_crm_secret_123';

    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(rawBody)
      .digest('hex');

    if (expectedSignature !== signature) {
      console.error('Webhook signature mismatch');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event = JSON.parse(rawBody);
    const eventType = event.event;

    console.log(`📥 Razorpay webhook received: ${eventType}`);

    await connectDB();

    if (eventType === 'payment.captured') {
      const payment = event.payload.payment.entity;
      const orderId = payment.order_id;

      const enrollment = await Enrollment.findOne({ razorpayOrderId: orderId });

      if (!enrollment) {
        console.warn(`Webhook: No enrollment found for order ${orderId}`);
        return NextResponse.json({ status: 'ignored', reason: 'no enrollment found' });
      }

      // Only update if not already paid (idempotency)
      if (enrollment.status !== 'paid') {
        enrollment.razorpayPaymentId = payment.id;
        enrollment.status = 'paid';
        await enrollment.save();
        console.log(`✅ Webhook: Enrollment ${enrollment._id} marked as paid`);

        // Send confirmation email if not already sent by verify route
        try {
          const currencySymbol = enrollment.currency === 'INR' ? '₹' : '$';
          await transporter.sendMail({
            from: `"The Foundry's" <${process.env.SMTP_USER}>`,
            to: enrollment.email,
            subject: `✅ Enrollment Confirmed: ${enrollment.courseName}`,
            html: `
              <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
                <div style="background: white; border-radius: 16px; padding: 40px; border: 1px solid #e2e8f0;">
                  <h1 style="color: #0f172a; font-size: 24px; text-align: center;">Enrollment Confirmed! 🎉</h1>
                  <p style="color: #475569;">Hi <strong>${enrollment.name}</strong>, your enrollment in <strong>${enrollment.courseName}</strong> is confirmed.</p>
                  <p style="color: #475569;">Amount: <strong>${currencySymbol}${enrollment.amount.toLocaleString()}</strong></p>
                  <p style="color: #475569;">Payment ID: <strong>${payment.id}</strong></p>
                  <p style="color: #475569;">Our team will reach out with onboarding details shortly.</p>
                </div>
              </div>
            `,
          });
        } catch (emailError) {
          console.error('Webhook email failed:', emailError);
        }
      }
    } else if (eventType === 'payment.failed') {
      const payment = event.payload.payment.entity;
      const orderId = payment.order_id;

      await Enrollment.findOneAndUpdate(
        { razorpayOrderId: orderId },
        { status: 'failed' }
      );
      console.log(`❌ Webhook: Payment failed for order ${orderId}`);
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error: unknown) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
