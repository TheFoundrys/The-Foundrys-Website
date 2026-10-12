import { NextRequest, NextResponse } from "next/server";
import { sendEnrollmentInvoiceEmail } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { to, email, name, amount, currency, paymentId, courseName, company, phone, invoiceUrl } = body;

    const recipientEmail = to || email;
    if (!recipientEmail) {
      return NextResponse.json({ error: "Recipient email is required" }, { status: 400 });
    }

    const result = await sendEnrollmentInvoiceEmail({
      to: recipientEmail,
      name: name || "Enrolled Executive",
      amount: amount || 2500,
      currency: currency || "USD",
      paymentId: paymentId || `PAY-${Date.now()}`,
      courseName: courseName || "Advanced Management Program in Forward Deployed Engineering",
      company,
      phone,
      invoiceUrl,
    });

    if (result.success) {
      return NextResponse.json({ success: true, message: "Invoice email sent successfully" });
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to send invoice email";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
