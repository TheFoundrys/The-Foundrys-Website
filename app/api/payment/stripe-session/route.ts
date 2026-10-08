import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

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
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Advanced Management Program in Forward Deployed Engineering",
              description: "2 Months Executive Finishing School (Mon–Fri 8:30–9:30 PM EST)",
              images: ["https://thefoundrys.com/logo.png"],
            },
            unit_amount: 250000, // $2,500.00 in cents
          },
          quantity: 1,
        },
      ],
      metadata: {
        studentName: name,
        studentEmail: email,
        studentPhone: phone,
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
