"use client";

import { useEffect, useCallback } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayOptions {
  amount: number;
  currency: string;
  courseName: string;
  courseId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  username?: string;
  password?: string;
  onSuccess: (response: any) => void;
  onFailure: (error: any) => void;
}

export function useRazorpay() {
  const loadScript = useCallback(() => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }, []);

  const openCheckout = useCallback(async (options: RazorpayOptions) => {
    const res = await loadScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // 1. Create Order on Backend (Now with signup data)
    const orderRes = await fetch("/api/payments/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: options.amount,
        currency: options.currency,
        courseName: options.courseName,
        courseId: options.courseId,
        name: options.userName,
        email: options.userEmail,
        phone: options.userPhone,
        username: options.username,
        password: options.password,
      }),
    });

    const orderData = await orderRes.json();

    if (!orderRes.ok || !orderData.id) {
        console.error("Order Creation Failed:", orderData);
        alert(`Failed to create order: ${orderData.error || orderData.message || "Unknown error"}${orderData.details ? ` (${orderData.details})` : ""}`);
        return;
    }

    // Handle free enrollment
    if (orderData.isFree) {
        options.onSuccess({
            razorpay_order_id: orderData.id,
            razorpay_payment_id: "free_enrollment",
            razorpay_signature: "free_enrollment",
        });
        return;
    }

    const rzpOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "The Foundry's",
      description: `Payment for ${options.courseName}`,
      order_id: orderData.id,
      handler: function (response: any) {
        options.onSuccess(response);
      },
      prefill: {
        name: options.userName,
        email: options.userEmail,
        contact: options.userPhone,
      },
      theme: {
        color: "#7c3aed", // purple-600
      },
    };

    const paymentObject = new window.Razorpay(rzpOptions);
    paymentObject.on("payment.failed", function (response: any) {
      options.onFailure(response.error);
    });
    paymentObject.open();
  }, [loadScript]);

  return { openCheckout };
}
