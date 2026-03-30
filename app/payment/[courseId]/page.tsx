"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, use, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Tag,
  CheckCircle2,
  Loader2,
  AlertCircle,
  X,
  ArrowLeft,
} from "lucide-react";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";
import Link from "next/link";

// Razorpay types
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

const COURSE_META: Record<
  string,
  {
    name: string;
    sku: string;
    duration: string;
    pricingKey: keyof typeof COURSE_PRICING;
    gradient: string;
  }
> = {
  "certified-in-prompt-engineering": {
    name: "Certified Prompt Engineering",
    sku: "AI 005",
    duration: "2 Weeks",
    pricingKey: "promptEngineering",
    gradient: "from-purple-600 to-pink-600",
  },
  "certified-in-ai-engineering": {
    name: "Certified in AI Engineering",
    sku: "AI 003",
    duration: "6 Weeks",
    pricingKey: "aiEngineer",
    gradient: "from-blue-600 to-indigo-600",
  },
  "certified-in-ai-research": {
    name: "Certified in AI Research",
    sku: "AI 001",
    duration: "6 Weeks",
    pricingKey: "aiResearch",
    gradient: "from-emerald-600 to-teal-600",
  },
};

interface EnrollmentData {
  name: string;
  email: string;
  phone: string;
  experienceLevel: string;
  courseId: string;
  currency: "INR" | "USD";
}

export default function PaymentPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = use(params);
  const router = useRouter();
  const { currency, symbol } = useRegionalPricing();

  const course = COURSE_META[courseId];
  const pricing = course ? COURSE_PRICING[course.pricingKey] : null;

  const [enrollmentData, setEnrollmentData] = useState<EnrollmentData | null>(
    null
  );
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState<{
    valid: boolean;
    discountPercent: number;
    message: string;
  } | null>(null);
  const [isValidatingCoupon, setIsValidatingCoupon] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Load Razorpay script
  useEffect(() => {
    if (typeof window !== "undefined" && !window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  // Load enrollment data from sessionStorage
  useEffect(() => {
    const data = sessionStorage.getItem("enrollmentData");
    if (data) {
      setEnrollmentData(JSON.parse(data));
    } else {
      // No enrollment data, redirect back
      router.push(`/enroll/${courseId}`);
    }
  }, [courseId, router]);

  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/,/g, ""));
  };

  const getOriginalPrice = () => {
    if (!pricing) return 0;
    return parsePrice(pricing.freshers[currency]);
  };

  const getDiscountedPrice = () => {
    const base = getOriginalPrice();
    if (couponApplied?.valid) {
      return Math.round(base - base * (couponApplied.discountPercent / 100));
    }
    return base;
  };

  const validateCoupon = async () => {
    if (!couponCode.trim()) return;
    setIsValidatingCoupon(true);
    try {
      const res = await fetch("/api/payment/validate-coupon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ couponCode: couponCode.toUpperCase(), courseId }),
      });
      const data = await res.json();
      setCouponApplied(data);
    } catch {
      setCouponApplied({
        valid: false,
        discountPercent: 0,
        message: "Failed to validate coupon",
      });
    }
    setIsValidatingCoupon(false);
  };

  const removeCoupon = () => {
    setCouponCode("");
    setCouponApplied(null);
  };

  const handlePayment = useCallback(async () => {
    if (!enrollmentData || !scriptLoaded || isProcessing) return;

    setIsProcessing(true);
    setError(null);

    try {
      // Step 1: Create order on backend
      const orderRes = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId,
          name: enrollmentData.name,
          email: enrollmentData.email,
          phone: enrollmentData.phone,
          experienceLevel: enrollmentData.experienceLevel,
          couponCode: couponApplied?.valid ? couponCode.toUpperCase() : undefined,
          currency,
        }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok) {
        throw new Error(orderData.error || "Failed to create order");
      }

      // Step 2: Open Razorpay checkout
      const options = {
        key: orderData.key,
        amount: orderData.razorpayAmount,
        currency: orderData.currency,
        name: "The Foundry's",
        description: orderData.courseName,
        order_id: orderData.orderId,
        prefill: {
          name: enrollmentData.name,
          email: enrollmentData.email,
          contact: enrollmentData.phone,
        },
        theme: {
          color: "#7c3aed",
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handler: async function (response: any) {
          // Step 3: Verify payment
          try {
            const verifyRes = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                enrollmentId: orderData.enrollmentId,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              // Store enrollment info for success page
              sessionStorage.setItem(
                "paymentSuccess",
                JSON.stringify({
                  courseName: orderData.courseName,
                  amount: orderData.amount,
                  currency: orderData.currency,
                  paymentId: response.razorpay_payment_id,
                  name: enrollmentData.name,
                  email: enrollmentData.email,
                })
              );
              sessionStorage.removeItem("enrollmentData");
              router.push("/payment/success");
            } else {
              setError("Payment verification failed. Please contact support.");
            }
          } catch {
            setError(
              "Payment verification error. Your payment may have been processed. Please contact support."
            );
          }
          setIsProcessing(false);
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setError(message);
      setIsProcessing(false);
    }
  }, [enrollmentData, scriptLoaded, isProcessing, courseId, couponApplied, couponCode, currency, router]);

  if (!course || !pricing) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-600">Course not found.</p>
      </main>
    );
  }

  if (!enrollmentData) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-purple-500" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <Link
            href={`/enroll/${courseId}`}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft size={16} />
            Back to enrollment
          </Link>
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Complete Your Payment
          </motion.h1>
          <p className="text-slate-400 mt-2">
            Secure checkout powered by Razorpay
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Order Summary — 3 cols */}
            <motion.div
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Student Info */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Student Information
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500">Name</p>
                    <p className="font-semibold text-slate-900">
                      {enrollmentData.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Email</p>
                    <p className="font-semibold text-slate-900">
                      {enrollmentData.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Phone</p>
                    <p className="font-semibold text-slate-900">
                      {enrollmentData.phone}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Experience</p>
                    <p className="font-semibold text-slate-900 capitalize">
                      {enrollmentData.experienceLevel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Coupon */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  <Tag size={14} className="inline-block mr-1 -mt-0.5" />
                  Have a coupon?
                </h3>

                {couponApplied?.valid ? (
                  <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        size={18}
                        className="text-emerald-600"
                      />
                      <span className="font-bold text-emerald-700">
                        {couponCode.toUpperCase()}
                      </span>
                      <span className="text-sm text-emerald-600">
                        — {couponApplied.message}
                      </span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) =>
                        setCouponCode(e.target.value.toUpperCase())
                      }
                      placeholder="Enter coupon code"
                      className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 transition-all text-sm font-mono tracking-wider uppercase"
                    />
                    <button
                      onClick={validateCoupon}
                      disabled={!couponCode.trim() || isValidatingCoupon}
                      className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      {isValidatingCoupon ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        "Apply"
                      )}
                    </button>
                  </div>
                )}

                <AnimatePresence>
                  {couponApplied && !couponApplied.valid && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 text-sm text-red-500"
                    >
                      {couponApplied.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3"
                  >
                    <AlertCircle
                      size={20}
                      className="text-red-500 shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-red-700 font-semibold text-sm">
                        Payment Error
                      </p>
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                    <button
                      onClick={() => setError(null)}
                      className="ml-auto text-red-400 hover:text-red-600"
                    >
                      <X size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Price Summary — 2 cols */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden sticky top-24">
                <div
                  className={`bg-gradient-to-r ${course.gradient} p-5`}
                >
                  <h3 className="text-lg font-bold text-white">
                    {course.name}
                  </h3>
                  <p className="text-white/70 text-sm">{course.duration}</p>
                </div>

                <div className="p-6 space-y-4">
                  {/* Price breakdown */}
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Program Fee</span>
                    <span className="text-slate-400 line-through">
                      {symbol}
                      {pricing.original[currency]}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Early Bird Price</span>
                    <span className="font-semibold text-slate-900">
                      {symbol}
                      {getOriginalPrice().toLocaleString()}
                    </span>
                  </div>

                  {couponApplied?.valid && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-emerald-600 font-medium">
                        Coupon ({couponApplied.discountPercent}% off)
                      </span>
                      <span className="text-emerald-600 font-semibold">
                        −{symbol}
                        {(
                          getOriginalPrice() - getDiscountedPrice()
                        ).toLocaleString()}
                      </span>
                    </motion.div>
                  )}

                  <div className="border-t border-slate-100 pt-4 flex justify-between">
                    <span className="font-bold text-slate-900">Total</span>
                    <span className="text-2xl font-bold text-slate-900">
                      {symbol}
                      {getDiscountedPrice().toLocaleString()}
                    </span>
                  </div>

                  {/* Pay button */}
                  <button
                    onClick={handlePayment}
                    disabled={isProcessing || !scriptLoaded}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-purple-500/25 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <ShieldCheck size={20} />
                        Pay {symbol}
                        {getDiscountedPrice().toLocaleString()}
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                    <ShieldCheck size={12} />
                    <span>
                      Secure payment via Razorpay. 256-bit SSL encryption.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
