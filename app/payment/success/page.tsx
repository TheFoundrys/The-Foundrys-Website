"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Mail,
  ArrowRight,
  PartyPopper,
  Printer,
  ExternalLink,
  Sparkles,
  Home,
  AlertCircle,
  Loader2
} from "lucide-react";
import Link from "next/link";

interface PaymentSuccessData {
  courseName: string;
  amount: number;
  currency: string;
  paymentId: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  invoiceUrl?: string;
  emailSent?: boolean;
  date?: string;
}

export default function PaymentSuccessPage() {
  const [data, setData] = useState<PaymentSuccessData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasValidPayment, setHasValidPayment] = useState<boolean>(false);

  useEffect(() => {
    let verifiedPayment: any = null;
    try {
      // ONLY accept records that were explicitly verified after a successful transaction
      const storedSuccess = sessionStorage.getItem("paymentSuccess");
      if (storedSuccess) {
        const parsed = JSON.parse(storedSuccess);
        // Ensure it has a genuine transaction ID from Razorpay (pay_...) or Stripe (cs_...)
        if (
          parsed &&
          (parsed.verified || parsed.paymentId?.startsWith("pay_") || parsed.paymentId?.startsWith("cs_"))
        ) {
          verifiedPayment = parsed;
        }
      }
    } catch {
      // ignore parse errors
    }

    const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    const sessionId = searchParams ? searchParams.get("session_id") : null;
    const paymentIdParam = searchParams
      ? searchParams.get("payment_id") || searchParams.get("razorpay_payment_id")
      : null;

    // Case 1: Returned from Stripe checkout with session_id
    if (sessionId && sessionId.startsWith("cs_")) {
      fetch(`/api/payment/stripe-session?session_id=${encodeURIComponent(sessionId)}`)
        .then((res) => res.json())
        .then((resData) => {
          setIsLoading(false);
          // Only show success if Stripe confirms payment is completed / paid
          if (resData.paymentStatus === "paid" || resData.paymentStatus === "complete" || resData.found) {
            setHasValidPayment(true);
            setData({
              courseName: resData.courseName || "Advanced Management in Forward Deployed Engineering",
              amount: resData.amount || 2500,
              currency: resData.currency || "USD",
              paymentId: resData.paymentId || sessionId,
              name: resData.name && resData.name !== "Enrolled Executive" ? resData.name : (verifiedPayment?.name || "Enrolled Student"),
              email: resData.email && resData.email !== "Verified via Stripe" ? resData.email : (verifiedPayment?.email || ""),
              company: resData.company || verifiedPayment?.company || "",
              phone: resData.phone || verifiedPayment?.phone || "",
              invoiceUrl: resData.invoiceUrl,
              emailSent: resData.emailSent,
              date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
            });
            // Clean up temporary lead data
            try {
              sessionStorage.removeItem("fde_checkout_data");
            } catch {}
          } else {
            setHasValidPayment(false);
          }
        })
        .catch(() => {
          setIsLoading(false);
          setHasValidPayment(false);
        });
    }
    // Case 2: Returned from Razorpay with payment_id query param or verified payment session
    else if (paymentIdParam || verifiedPayment) {
      const activePaymentId = paymentIdParam || verifiedPayment?.paymentId;
      if (activePaymentId && (activePaymentId.startsWith("pay_") || verifiedPayment?.verified)) {
        setHasValidPayment(true);
        setData({
          courseName: verifiedPayment?.courseName || "Advanced Management in Forward Deployed Engineering",
          amount: verifiedPayment?.amount || 2500,
          currency: verifiedPayment?.currency || "USD",
          paymentId: activePaymentId,
          name: verifiedPayment?.name || "Enrolled Student",
          email: verifiedPayment?.email || "",
          company: verifiedPayment?.company || "",
          phone: verifiedPayment?.phone || "",
          date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
          emailSent: true,
        });
        // Clean up temporary lead data
        try {
          sessionStorage.removeItem("fde_checkout_data");
        } catch {}
      } else {
        setHasValidPayment(false);
      }
      setIsLoading(false);
    }
    // Case 3: No valid completed payment found
    else {
      setIsLoading(false);
      setHasValidPayment(false);
    }
  }, []);

  const currencySymbol = data?.currency === "INR" ? "₹" : "$";

  const handlePrintInvoice = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans print:bg-white print:p-0">
      <div className="print:hidden">
        <Navbar />
      </div>

      <section className="pt-28 pb-24 px-4 sm:px-6 print:p-0 print:m-0">
        <div className="container mx-auto max-w-2xl print:max-w-none">
          {isLoading ? (
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-16 text-center">
              <Loader2 size={36} className="animate-spin text-blue-600 mx-auto mb-4" />
              <p className="text-slate-600 text-sm font-medium">Verifying payment transaction...</p>
            </div>
          ) : hasValidPayment && data ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden print:shadow-none print:border-none print:rounded-none"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-[#002f86] p-8 text-center relative overflow-hidden text-white print:bg-none print:text-slate-900 print:border-b-2 print:border-slate-800 print:p-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                  className="relative z-10"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm print:hidden">
                    <CheckCircle2 size={36} className="text-white" />
                  </div>
                  <div className="text-xs uppercase font-mono tracking-widest text-emerald-200 print:text-slate-600 mb-1 font-bold">
                    Official Payment Confirmation & Tax Receipt
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white print:text-slate-900 mb-1 font-serif">
                    Payment Successful!
                  </h1>
                  <p className="text-emerald-100 print:text-slate-600 text-sm sm:text-base">
                    Welcome to The Foundry&apos;s DeepTech Finishing School{" "}
                    <PartyPopper size={16} className="inline-block -mt-0.5" />
                  </p>
                </motion.div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 md:p-10 space-y-6">
                {/* Email Confirmation Notice */}
                {data.email && (
                  <div className="bg-blue-50/90 rounded-2xl p-5 border border-blue-200/80 print:hidden">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Mail size={18} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-blue-950 text-sm mb-1 flex items-center gap-2">
                          <span>Invoice & Enrollment Receipt Dispatched</span>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono px-2 py-0.5 rounded-full uppercase font-bold">
                            Sent to Mail
                          </span>
                        </h4>
                        <p className="text-blue-900 text-xs sm:text-sm leading-relaxed">
                          A detailed PDF-ready tax invoice, transaction receipt, and syllabus onboarding guide have been dispatched to:
                        </p>
                        <div className="mt-2 font-mono text-xs sm:text-sm font-bold text-blue-900 bg-white/80 px-3 py-1.5 rounded-lg border border-blue-200 inline-block">
                          {data.email}
                        </div>
                        <p className="text-[11px] text-blue-700 mt-2">
                          Please check your inbox (and spam/promotions folder).
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Printable Invoice & Enrollment Details Card */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 print:bg-white print:p-0 print:border-none">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div>
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                        Enrollment & Invoice Summary
                      </h3>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        Invoice #{`INV-${data.paymentId.slice(-8).toUpperCase()}`} &bull; {data.date}
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold font-mono uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                      Paid in Full
                    </span>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-slate-500 text-xs sm:text-sm">Course Track</span>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm text-right">
                        {data.courseName}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 text-xs sm:text-sm">Schedule</span>
                      <span className="font-mono text-xs text-slate-800 font-semibold text-right">
                        Mon–Fri | 6:00–7:00 AM IST (8:30–9:30 PM EST)
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 text-xs sm:text-sm">Enrolled Student</span>
                      <span className="font-semibold text-slate-900 text-xs sm:text-sm">
                        {data.name}
                      </span>
                    </div>

                    {data.email && (
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-xs sm:text-sm">Billed Email</span>
                        <span className="font-mono text-xs sm:text-sm text-slate-800">
                          {data.email}
                        </span>
                      </div>
                    )}

                    {data.company && (
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-xs sm:text-sm">Company</span>
                        <span className="font-semibold text-slate-800 text-xs sm:text-sm">
                          {data.company}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 text-xs sm:text-sm">Payment ID</span>
                      <span className="font-mono text-[11px] sm:text-xs text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200 truncate max-w-[200px] sm:max-w-xs">
                        {data.paymentId}
                      </span>
                    </div>

                    <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
                      <span className="text-slate-700 font-bold text-sm sm:text-base">
                        Total Amount Paid
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-bold text-emerald-700">
                        {currencySymbol}{data.amount.toLocaleString()} <span className="text-xs font-normal text-slate-500">{data.currency}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions: Print / Download Invoice & External Link */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1 print:hidden">
                  <button
                    type="button"
                    onClick={handlePrintInvoice}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#002f86] hover:bg-[#002366] text-white font-bold rounded-xl transition-all text-sm cursor-pointer shadow-md shadow-blue-900/10"
                  >
                    <Printer size={16} />
                    Print / Save Invoice Receipt
                  </button>

                  {data.invoiceUrl && (
                    <a
                      href={data.invoiceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl transition-all text-sm border border-slate-300 shadow-sm"
                    >
                      <ExternalLink size={16} />
                      View Hosted Invoice
                    </a>
                  )}
                </div>

                {/* What Happens Next Card */}
                <div className="bg-purple-50/70 rounded-2xl p-6 border border-purple-200/80 space-y-3 print:hidden">
                  <h3 className="font-bold text-purple-950 text-sm flex items-center gap-2">
                    <Sparkles size={16} className="text-purple-600" />
                    What Happens Next?
                  </h3>
                  <ol className="space-y-2.5 text-xs sm:text-sm text-purple-900">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 bg-purple-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Our admissions lead will connect with you within 24 hours to initiate your orientation.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 bg-purple-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        2
                      </span>
                      <span>You will be granted credentials to the private cohort portal, syllabus notebooks, and GitHub repositories.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 bg-purple-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Live virtual classes kick off on schedule: <strong>Mon–Fri | 6:00 AM – 7:00 AM IST (8:30 PM – 9:30 PM EST)</strong>.</span>
                    </li>
                  </ol>
                </div>

                {/* Direct Contact Support Box */}
                <div className="p-4 rounded-xl bg-slate-100 text-xs text-slate-600 space-y-1.5 border border-slate-200 print:hidden">
                  <div className="font-bold text-slate-800">Need immediate assistance or corporate VAT/GST invoice modifications?</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <span>US: <a href="tel:+15404146956" className="text-blue-700 underline font-mono">+1 5404146956</a></span>
                    <span>India: <a href="tel:+917981171474" className="text-blue-700 underline font-mono">+91 7981171474</a></span>
                    <span>WhatsApp: <a href="https://wa.me/919704448853" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-mono">+91 9704448853</a></span>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2 print:hidden">
                  <Link
                    href="/"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors text-sm"
                  >
                    <Home size={16} />
                    Back to Home
                  </Link>
                  <Link
                    href="/programs/advanced-management/fde"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-800 font-bold rounded-xl hover:bg-slate-50 transition-colors text-sm border border-slate-300"
                  >
                    Return to FDE Overview
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            /* No valid completed payment */
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-12 text-center space-y-5">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto border border-amber-200">
                <AlertCircle size={36} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-serif">
                No Completed Payment Found
              </h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                This confirmation and tax receipt is only displayed after an enrollment payment has been successfully completed.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
                <Link
                  href="/programs/advanced-management/fde"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#002f86] text-white font-bold rounded-xl text-sm hover:bg-[#002366] transition-colors"
                >
                  Go to FDE Course Page
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 text-slate-700 font-bold rounded-xl text-sm hover:bg-slate-200 transition-colors border border-slate-200"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  );
}
