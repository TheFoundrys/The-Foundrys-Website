'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckoutButton } from './checkout-button';
import { LoadingOverlay } from './loading-overlay';

interface EnrollmentFlowProps {
  courseId: string;
  amount: number;
  initialOpen?: boolean;
}

export function EnrollmentFlow({ courseId, amount, initialOpen = false }: EnrollmentFlowProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState<'enter_email' | 'check_email' | 'ready'>('enter_email');
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isVerifyingCoupon, setIsVerifyingCoupon] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const finalAmount = Math.round(amount * (1 - discount / 100));

  const handleSendLink = async () => {
    if (!email || !name || !phone) return alert('Name, Email, and Phone are required');
    
    // Validate phone number length
    if (phone.length !== 10) {
      return alert('Please enter a valid 10-digit phone number');
    }

    setIsSubmitting(true);
    try {
      // 1. Check if user is already verified or exists in DB
      const checkRes = await fetch('/api/auth/check-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const checkData = await checkRes.json();
      
      if (checkData.verified) {
        setStep('ready');
        return;
      }

      // 2. If not verified/existing, send the link
      const res = await fetch('/api/auth/send-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, phone, baseUrl: window.location.origin }),
      });
      if (res.ok) setStep('check_email');
      else alert('Failed to send verification link');
    } catch (err) {
      alert('Error in verification flow');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApplyCoupon = async () => {
    if (!couponCode) return;
    setIsVerifyingCoupon(true);
    try {
      const res = await fetch('/api/payment/validate-coupon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ couponCode, courseId }),
      });
      const data = await res.json();
      if (data.valid) {
        setDiscount(data.discountPercent);
        alert(`Coupon applied! ${data.discountPercent}% discount`);
      } else {
        alert(data.message || 'Invalid coupon');
      }
    } catch (err) {
      alert('Error validating coupon');
    } finally {
      setIsVerifyingCoupon(false);
    }
  };

  // Poll for verification status
  useEffect(() => {
    if (step !== 'check_email') return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch('/api/auth/check-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        const data = await res.json();
        if (data.verified) {
          setStep('ready');
          clearInterval(interval);
        }
      } catch (err) {
        console.error('Polling error:', err);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [step, email]);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95"
      >
        Apply Now
      </button>
    );
  }

  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden relative">
      <LoadingOverlay isVisible={isSubmitting} message="Working on it..." />
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-slate-900">Enrollment</h3>
          <button 
            onClick={() => initialOpen ? router.back() : setIsOpen(false)}
            className="text-slate-400 hover:text-slate-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {step === 'enter_email' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  if (value.length <= 10) setPhone(value);
                }}
                placeholder="98765 43210"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <button 
              onClick={handleSendLink}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95"
            >
              Get Verification Link
            </button>
          </div>
        )}

        {step === 'check_email' && (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Check your email</h4>
            <p className="text-slate-500 mb-6">We've sent a magic link to <br/><strong>{email}</strong>. Click it to verify your account.</p>
            <div className="flex items-center justify-center gap-2 text-sm text-blue-600 font-medium">
               <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
               Waiting for verification...
            </div>
          </div>
        )}

        {step === 'ready' && (
          <div className="space-y-6">
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center gap-3">
               <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
               </div>
               <div>
                  <p className="text-xs font-bold text-emerald-800 uppercase tracking-tight">Email Verified</p>
                  <p className="text-sm text-emerald-600">Ready to complete purchase</p>
               </div>
            </div>

            <div className="space-y-2">
               <label className="block text-sm font-medium text-slate-700">Coupon Code</label>
               <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder="Enter code"
                    className="flex-grow px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <button 
                    onClick={handleApplyCoupon}
                    disabled={isVerifyingCoupon}
                    className="px-4 py-2 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 disabled:opacity-50"
                  >
                    Apply
                  </button>
               </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
               <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-500 font-medium">Final Amount</span>
                  <span className="text-3xl font-extrabold text-slate-900">₹{finalAmount.toLocaleString()}</span>
               </div>
               <CheckoutButton 
                courseId={courseId} 
                amount={finalAmount} 
                email={email} 
                userName={name}
                phone={phone}
                couponCode={couponCode}
               />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
