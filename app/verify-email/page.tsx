"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

function VerifyEmailContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const status = searchParams.get("status");
    const message = searchParams.get("message");

    return (
        <div className="min-h-[60vh] flex items-center justify-center px-6">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl text-center shadow-2xl relative overflow-hidden"
            >
                {/* Glow Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />

                {status === "success" ? (
                    <>
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="text-green-500" size={40} />
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">Email Verified!</h1>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Your account is now verified. You can now log in and access your courses on the Compass portal.
                        </p>
                        <Link 
                            href="/login" 
                            className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        >
                            Go to Login <ArrowRight size={18} />
                        </Link>
                    </>
                ) : status === "error" ? (
                    <>
                        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <XCircle className="text-red-500" size={40} />
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">Verification Failed</h1>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            {message || "The verification link is invalid or has expired."}
                        </p>
                        <Link 
                            href="/login" 
                            className="inline-block text-white font-bold underline"
                        >
                            Try logging in again
                        </Link>
                    </>
                ) : (
                    <div className="py-12">
                        <Loader2 className="animate-spin text-blue-500 mx-auto mb-6" size={48} />
                        <h1 className="text-2xl font-bold text-white tracking-tight">Verifying your email...</h1>
                    </div>
                )}
            </motion.div>
        </div>
    );
}

export default function VerifyEmailPage() {
    return (
        <main className="min-h-screen bg-black selection:bg-blue-500/30">
            <Navbar />
            <Suspense fallback={<div className="min-h-screen bg-black" />}>
                <VerifyEmailContent />
            </Suspense>
            <Footer />
        </main>
    );
}
