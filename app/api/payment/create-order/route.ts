import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { connectDB } from '@/lib/mongodb';
import Enrollment from '@/lib/models/Enrollment';
import { COURSE_CATALOG, COUPONS } from '@/lib/courses';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { courseId, name, email, phone, experienceLevel, couponCode, currency = 'INR' } = body;

    // Validate required fields
    if (!courseId || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: courseId, name, email, phone' },
        { status: 400 }
      );
    }

    // Validate course exists
    const course = COURSE_CATALOG[courseId];
    if (!course) {
      return NextResponse.json({ error: 'Invalid course ID' }, { status: 400 });
    }

    // Validate currency
    const validCurrency = currency === 'USD' ? 'USD' : 'INR';
    let amount = course.prices[validCurrency];

    // Apply coupon if provided
    let discountAmount = 0;
    if (couponCode) {
      const coupon = COUPONS[couponCode.toUpperCase()];
      if (coupon && coupon.active) {
        // Check if coupon is valid for this course
        if (!coupon.validCourses || coupon.validCourses.length === 0 || coupon.validCourses.includes(courseId)) {
          discountAmount = Math.round(amount * (coupon.discountPercent / 100));
          amount = amount - discountAmount;
        }
      }
    }

    // Razorpay expects amount in paise (INR) or cents (USD)
    const razorpayAmount = Math.round(amount * 100);
    const receipt = `reg_${Date.now()}`;

    console.log('Creating Razorpay order:', {
      amount: razorpayAmount,
      currency: validCurrency,
      receipt
    });

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: razorpayAmount,
      currency: validCurrency,
      receipt,
      notes: {
        courseId,
        courseName: course.name,
        studentName: name,
        studentEmail: email,
      },
    });
    console.log('Razorpay response:', order);

    // Connect to DB and save enrollment record
    await connectDB();

    const enrollment = await Enrollment.create({
      name,
      email,
      phone,
      courseId,
      courseName: course.name,
      amount,
      currency: validCurrency,
      razorpayOrderId: order.id,
      status: 'pending',
      couponCode: couponCode?.toUpperCase() || undefined,
      discountAmount,
      experienceLevel,
    });

    return NextResponse.json({
      orderId: order.id,
      amount,
      razorpayAmount: razorpayAmount,
      currency: validCurrency,
      enrollmentId: enrollment._id,
      courseName: course.name,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error: unknown) {
    console.error('Create order error:', error);
    const message = error instanceof Error ? error.message : 'Failed to create order';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
