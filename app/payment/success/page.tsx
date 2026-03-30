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
  Download,
} from "lucide-react";
import Link from "next/link";

interface PaymentSuccessData {
  courseName: string;
  amount: number;
  currency: string;
  paymentId: string;
  name: string;
  email: string;
}

export default function PaymentSuccessPage() {
  const [data, setData] = useState<PaymentSuccessData | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("paymentSuccess");
    if (raw) {
      setData(JSON.parse(raw));
    }
  }, []);

  const currencySymbol = data?.currency === "INR" ? "₹" : "$";

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Green Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="relative z-10"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <CheckCircle2 size={40} className="text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Payment Successful!
                </h1>
                <p className="text-emerald-100 text-lg">
                  Welcome to The Foundry&apos;s{" "}
                  <PartyPopper
                    size={18}
                    className="inline-block -mt-0.5"
                  />
                </p>
              </motion.div>
            </div>

            {/* Details */}
            <div className="p-8 md:p-10">
              {data ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                      Enrollment Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-500 text-sm">Course</span>
                        <span className="font-semibold text-slate-900 text-sm text-right">
                          {data.courseName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 text-sm">
                          Amount Paid
                        </span>
                        <span className="font-bold text-slate-900">
                          {currencySymbol}
                          {data.amount.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 text-sm">
                          Payment ID
                        </span>
                        <span className="font-mono text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">
                          {data.paymentId}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 text-sm">
                          Enrolled As
                        </span>
                        <span className="font-semibold text-slate-900 text-sm">
                          {data.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Mail
                        size={20}
                        className="text-blue-500 shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="font-semibold text-blue-900 text-sm mb-1">
                          Confirmation email sent
                        </p>
                        <p className="text-blue-700 text-sm">
                          A receipt and enrollment details have been sent to{" "}
                          <strong>{data.email}</strong>. Check your inbox (and
                          spam folder).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                    <h3 className="font-bold text-purple-900 mb-3">
                      What Happens Next?
                    </h3>
                    <ol className="space-y-3">
                      <li className="flex items-start gap-3 text-sm text-purple-800">
                        <span className="w-6 h-6 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                          1
                        </span>
                        Our team will contact you within 24 hours with onboarding
                        details.
                      </li>
                      <li className="flex items-start gap-3 text-sm text-purple-800">
                        <span className="w-6 h-6 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                          2
                        </span>
                        You&apos;ll be added to the program cohort group and receive
                        access to learning materials.
                      </li>
                      <li className="flex items-start gap-3 text-sm text-purple-800">
                        <span className="w-6 h-6 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                          3
                        </span>
                        The program begins as per the announced batch schedule.
                      </li>
                    </ol>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link
                      href="/programs/entry-level"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors text-sm"
                    >
                      Explore More Programs
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors text-sm border border-slate-200"
                    >
                      <Download size={16} />
                      Back to Home
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle2
                    size={48}
                    className="mx-auto text-emerald-500 mb-4"
                  />
                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    Payment Processed
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Your enrollment has been confirmed. Check your email for
                    details.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Go to Home
                    <ArrowRight size={16} />
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
