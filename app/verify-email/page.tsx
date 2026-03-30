"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { Suspense, useEffect } from "react";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const success = searchParams.get("success") === "true";
  const error = searchParams.get("error");
  const token = searchParams.get("token");

  useEffect(() => {
    // If we have a token but no success/error, it's a direct link
    // We should call the API ourselves
    if (token && !success && !error) {
      const verify = async () => {
        try {
          const res = await fetch(`/api/auth/verify-link?token=${token}`, {
             method: 'GET',
             redirect: 'follow'
          });
          // The API returns a redirect to /verify-email?success=true
          if (res.url.includes("success=true")) {
            router.push("/verify-email?success=true");
          } else if (res.url.includes("error=")) {
            const errType = new URL(res.url).searchParams.get("error");
            router.push(`/verify-email?error=${errType}`);
          }
        } catch (e) {
          router.push("/verify-email?error=server_error");
        }
      };
      verify();
    }
  }, [token, success, error, router]);

  return (
    <div className="text-center p-8 bg-white rounded-3xl shadow-xl border border-slate-200 max-w-md w-full">
      {success ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-6"
        >
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Email Verified!</h1>
            <p className="text-slate-600">
              Your email has been successfully verified. You can now return to the enrollment tab to complete your payment.
            </p>
          </div>
          <div className="pt-4">
            <p className="text-sm text-slate-400">You can safely close this tab now.</p>
          </div>
        </motion.div>
      ) : error ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-6"
        >
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto">
            <XCircle className="w-12 h-12 text-red-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Verification Failed</h1>
            <p className="text-slate-600">
              {error === "expired_token"
                ? "The verification link has expired. Please go back and request a new link."
                : "The verification link is invalid or has already been used."}
            </p>
          </div>
          <div className="pt-4">
            <Link 
              href="/" 
              className="inline-block px-6 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Go to Home
            </Link>
          </div>
        </motion.div>
      ) : (
        <div className="py-12">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Verifying your email...</p>
        </div>
      )}
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-slate-50 to-slate-50">
      <Suspense fallback={<div>Loading...</div>}>
        <VerifyEmailContent />
      </Suspense>
    </main>
  );
}
