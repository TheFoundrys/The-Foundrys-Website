'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CheckoutButtonProps {
  courseId: string;
  amount: number;
  email: string;
  userName: string;
  phone: string;
  couponCode?: string;
  onSuccess?: (details: any) => void;
}

export function CheckoutButton({ courseId, amount, email, userName, phone, couponCode, onSuccess }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await loadRazorpay();
      if (!res) {
        alert('Razorpay SDK failed to load. Are you online?');
        return;
      }

      // 1. Create order on server
      const orderRes = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId, amount, email, name: userName, phone, couponCode }),
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.error || 'Failed to create order');

      const options = {
        key: orderData.key,
        amount: orderData.razorpayAmount,
        currency: orderData.currency,
        name: "The Foundry's",
        description: `Enrollment for ${courseId}`,
        order_id: orderData.orderId,
        handler: async function (response: any) {
             // 2. Verify payment on server
             const verifyRes = await fetch('/api/payment/verify', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                 razorpay_order_id: response.razorpay_order_id,
                 razorpay_payment_id: response.razorpay_payment_id,
                 razorpay_signature: response.razorpay_signature,
                 enrollmentId: orderData.enrollmentId,
               }),
             });

             const verifyData = await verifyRes.json();
             if (verifyRes.ok) {
               if (onSuccess) onSuccess(verifyData.enrollment);
               router.push('/payment/success');
             } else {
               alert('Payment verification failed: ' + verifyData.error);
             }
        },
        prefill: {
          name: userName,
          email: email,
          contact: phone,
        },
        theme: {
          color: "#2563eb",
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (err: any) {
      console.error('Payment Error:', err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? 'Processing...' : `Pay Selection`}
    </button>
  );
}
