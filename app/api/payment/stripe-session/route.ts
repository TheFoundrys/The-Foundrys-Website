import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { sendEnrollmentInvoiceEmail } from "@/lib/email";

export const dynamic = "force-dynamic";

// In-memory set to prevent duplicate email sends on repeated page refreshes
const sentEmailsCache = new Set<string>();

export async function POST(req: NextRequest) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: "Stripe secret key is not configured in .env" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(stripeSecretKey);
    const body = await req.json();
    const { name, email, phone, company, experience } = body;

    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      invoice_creation: {
        enabled: true,
      },
      payment_intent_data: {
        receipt_email: email,
        metadata: {
          studentName: name || "",
          studentEmail: email || "",
          studentPhone: phone || "",
          company: company || "N/A",
          experience: experience || "N/A",
          program: "Forward Deployed Engineering",
        },
      },
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Advanced Management Program in Forward Deployed Engineering",
              description: "2 Months Executive Finishing School (Mon–Fri 6:00–7:00 AM IST / 8:30–9:30 PM EST)",
              images: ["https://thefoundrys.com/logo.png"],
            },
            unit_amount: 250000, // $2,500.00 in cents
          },
          quantity: 1,
        },
      ],
      metadata: {
        studentName: name || "",
        studentEmail: email || "",
        studentPhone: phone || "",
        company: company || "N/A",
        experience: experience || "N/A",
        program: "Forward Deployed Engineering",
      },
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/programs/advanced-management/fde`,
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (err: unknown) {
    console.error("Stripe Checkout Error:", err);
    const message = err instanceof Error ? err.message : "Failed to create checkout session";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json({ error: "Missing session_id parameter" }, { status: 400 });
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json({ error: "Stripe key not configured" }, { status: 500 });
    }

    const stripe = new Stripe(stripeSecretKey);

    let session: Stripe.Checkout.Session;
    try {
      session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["payment_intent", "line_items", "invoice"],
      });
    } catch (retrieveErr: unknown) {
      console.warn("Could not retrieve session from Stripe:", retrieveErr);
      return NextResponse.json({
        found: false,
        paymentId: sessionId,
        courseName: "Advanced Management in Forward Deployed Engineering",
        amount: 2500,
        currency: "USD",
        name: "Enrolled Executive",
        email: "Verified via Stripe",
      });
    }

    const metadata = session.metadata || {};
    const customerEmail =
      session.customer_details?.email ||
      session.customer_email ||
      metadata.studentEmail ||
      "Verified via Stripe";

    const customerName =
      session.customer_details?.name ||
      metadata.studentName ||
      "Enrolled Executive";

    const amount = (session.amount_total ? session.amount_total / 100 : 2500);
    const currency = (session.currency || "USD").toUpperCase();
    const courseName = "Advanced Management in Forward Deployed Engineering";

    // Extract invoice url if created by Stripe
    let invoiceUrl: string | undefined = undefined;
    if (session.invoice && typeof session.invoice === "object") {
      const inv = session.invoice as Stripe.Invoice;
      invoiceUrl = inv.hosted_invoice_url || inv.invoice_pdf || undefined;
    }

    // Trigger invoice email if payment is paid and hasn't been sent yet in this session
    let emailSent = false;
    let emailError: string | undefined = undefined;

    const isPaid = session.payment_status === "paid" || session.status === "complete";
    const cacheKey = `${sessionId}_${customerEmail}`;

    if (isPaid && customerEmail && customerEmail !== "Verified via Stripe" && !sentEmailsCache.has(cacheKey)) {
      console.log(`📧 Sending payment receipt & invoice to ${customerEmail} for session ${sessionId}...`);
      const emailResult = await sendEnrollmentInvoiceEmail({
        to: customerEmail,
        name: customerName,
        amount,
        currency,
        paymentId: session.id,
        courseName,
        company: metadata.company,
        phone: metadata.studentPhone,
        invoiceUrl,
      });

      emailSent = emailResult.success;
      if (emailResult.success) {
        sentEmailsCache.add(cacheKey);
      } else {
        emailError = emailResult.error;
      }
    } else if (sentEmailsCache.has(cacheKey)) {
      emailSent = true;
    }

    return NextResponse.json({
      found: true,
      paymentId: session.id,
      courseName,
      amount,
      currency,
      name: customerName,
      email: customerEmail,
      phone: metadata.studentPhone || session.customer_details?.phone || "",
      company: metadata.company || "",
      paymentStatus: session.payment_status,
      invoiceUrl,
      emailSent,
      emailError,
    });
  } catch (err: unknown) {
    console.error("Stripe Session GET error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
