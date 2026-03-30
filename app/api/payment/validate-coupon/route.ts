import { NextRequest, NextResponse } from 'next/server';
import { COURSE_CATALOG, COUPONS } from '@/lib/courses';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { couponCode, courseId } = body;

    if (!couponCode || !courseId) {
      return NextResponse.json({ error: 'Missing couponCode or courseId' }, { status: 400 });
    }

    const course = COURSE_CATALOG[courseId];
    if (!course) {
      return NextResponse.json({ error: 'Invalid course' }, { status: 400 });
    }

    const coupon = COUPONS[couponCode.toUpperCase()];

    if (!coupon || !coupon.active) {
      return NextResponse.json({ valid: false, message: 'Invalid or expired coupon code' });
    }

    // Check if coupon is restricted to specific courses
    if (coupon.validCourses && coupon.validCourses.length > 0 && !coupon.validCourses.includes(courseId)) {
      return NextResponse.json({ valid: false, message: 'This coupon is not valid for this course' });
    }

    return NextResponse.json({
      valid: true,
      discountPercent: coupon.discountPercent,
      message: `${coupon.discountPercent}% discount applied!`,
    });
  } catch (error: unknown) {
    console.error('Coupon validation error:', error);
    return NextResponse.json({ error: 'Failed to validate coupon' }, { status: 500 });
  }
}
