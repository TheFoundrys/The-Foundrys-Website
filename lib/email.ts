import nodemailer from 'nodemailer';

export const getTransporter = () => {
  const hasGmail = !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
  if (hasGmail) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.office365.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true' || parseInt(process.env.SMTP_PORT || '587') === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
  });
};

export const sendVerificationLink = async (to: string, link: string) => {
  const transporter = getTransporter();
  const mailOptions = {
    from: `"The Foundry's" <${process.env.SMTP_USER || 'noreply@thefoundrys.com'}>`,
    to,
    subject: "Verify your Email for Course Enrollment",
    text: `Please click the following link to verify your email:\n${link}\n\nThis link will expire in 15 minutes.`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #334155;">
        <h2 style="color: #0f172a;">Verify your Email</h2>
        <p>Please click the button below to verify your email and continue your enrollment:</p>
        <div style="margin: 32px 0;">
          <a href="${link}" style="background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Verify Email</a>
        </div>
        <p style="font-size: 14px; color: #64748b;">This link will expire in 15 minutes. You can safely close the verification tab after clicking.</p>
        <p style="font-size: 12px; color: #94a3b8; margin-top: 32px;">If the button doesn't work, copy and paste this link: <br/> ${link}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Verification email sent successfully to ${to}`);
  } catch (error) {
    console.error(`Error sending verification email to ${to}:`, error);
    throw new Error('Failed to send verification email');
  }
};

export interface InvoiceEmailData {
  to: string;
  name: string;
  amount: number;
  currency: string;
  paymentId: string;
  courseName: string;
  company?: string;
  phone?: string;
  date?: string;
  invoiceUrl?: string;
}

export const sendEnrollmentInvoiceEmail = async (data: InvoiceEmailData) => {
  const {
    to,
    name,
    amount,
    currency,
    paymentId,
    courseName,
    company,
    phone,
    date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    invoiceUrl,
  } = data;

  const currencySymbol = currency.toUpperCase() === 'INR' ? '₹' : '$';
  const invoiceNumber = `INV-${paymentId.slice(-8).toUpperCase()}`;
  const senderEmail = process.env.SMTP_USER || process.env.GMAIL_USER || 'noreply@thefoundrys.com';
  const transporter = getTransporter();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Payment Receipt & Invoice - The Foundry's</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 32px 16px; color: #1e293b;">
  <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    
    <!-- Header Banner -->
    <div style="background: linear-gradient(135deg, #001D4A 0%, #002f86 100%); padding: 32px; color: #ffffff;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td>
            <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #93c5fd; font-weight: 700; margin-bottom: 4px;">
              The Foundry's
            </div>
            <div style="font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
              Tax Invoice & Enrollment Receipt
            </div>
            <div style="font-size: 11px; color: #cbd5e1; margin-top: 4px;">
              A Premium Finishing School in DeepTech
            </div>
          </td>
          <td style="text-align: right; vertical-align: top;">
            <span style="display: inline-block; background-color: #10b981; color: #ffffff; font-size: 11px; font-weight: 700; padding: 6px 14px; rounded-full; border-radius: 9999px; text-transform: uppercase; letter-spacing: 1px;">
              PAID IN FULL
            </span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Main Content -->
    <div style="padding: 32px;">
      
      <!-- Greeting -->
      <div style="margin-bottom: 24px;">
        <h2 style="font-size: 18px; color: #0f172a; margin: 0 0 6px 0;">Dear ${name},</h2>
        <p style="font-size: 14px; color: #475569; line-height: 1.6; margin: 0;">
          Thank you for enrolling in <strong>The Foundry's Inaugural DeepTech Finishing Cohort</strong>. This email serves as your official payment receipt and tax invoice.
        </p>
      </div>

      <!-- Invoice Details Grid -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; font-size: 13px;">
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 35%;">Invoice Number</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #0f172a; font-family: monospace;">${invoiceNumber}</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b;">Invoice Date</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${date}</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b;">Payment Method</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">Stripe Secure Payment</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; color: #64748b;">Transaction Reference</td>
          <td style="padding: 12px 16px; font-weight: 600; color: #0f172a; font-family: monospace; font-size: 11px; word-break: break-all;">${paymentId}</td>
        </tr>
      </table>

      <!-- Billed To -->
      <div style="margin-bottom: 24px; padding: 16px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
        <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #64748b; margin-bottom: 8px; letter-spacing: 0.5px;">Billed To:</div>
        <div style="font-size: 14px; font-weight: 700; color: #0f172a;">${name}</div>
        <div style="font-size: 13px; color: #475569; margin-top: 2px;">Email: ${to}</div>
        ${company ? `<div style="font-size: 13px; color: #475569;">Company: ${company}</div>` : ''}
        ${phone ? `<div style="font-size: 13px; color: #475569;">Phone: ${phone}</div>` : ''}
      </div>

      <!-- Line Items Table -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <thead>
          <tr style="background: #0f172a; color: #ffffff; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
            <th style="padding: 12px 16px; text-align: left; border-top-left-radius: 8px;">Description</th>
            <th style="padding: 12px 16px; text-align: center;">Qty</th>
            <th style="padding: 12px 16px; text-align: right; border-top-right-radius: 8px;">Amount</th>
          </tr>
        </thead>
        <tbody style="font-size: 13px;">
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 16px; vertical-align: top;">
              <div style="font-weight: 700; color: #0f172a; font-size: 14px; margin-bottom: 4px;">
                ${courseName}
              </div>
              <div style="color: #64748b; font-size: 12px; line-height: 1.5;">
                • 2 Months Intensive Applied AI Executive Track<br/>
                • Mon–Fri | 6:00 AM – 7:00 AM IST (8:30 PM – 9:30 PM EST)<br/>
                • Private Code Repo Teardowns & Capstone Supervision<br/>
                • Finishing School Completion Certificate
              </div>
            </td>
            <td style="padding: 16px; text-align: center; vertical-align: top; color: #475569; font-weight: 600;">
              1
            </td>
            <td style="padding: 16px; text-align: right; vertical-align: top; font-weight: 700; color: #0f172a;">
              ${currencySymbol}${amount.toLocaleString()}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" style="padding: 12px 16px; text-align: right; font-size: 13px; color: #64748b;">Subtotal</td>
            <td style="padding: 12px 16px; text-align: right; font-size: 13px; font-weight: 600; color: #0f172a;">${currencySymbol}${amount.toLocaleString()}</td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 8px 16px; text-align: right; font-size: 13px; color: #64748b;">Taxes & Fees</td>
            <td style="padding: 8px 16px; text-align: right; font-size: 13px; font-weight: 600; color: #0f172a;">$0.00</td>
          </tr>
          <tr style="border-top: 2px solid #0f172a;">
            <td colspan="2" style="padding: 14px 16px; text-align: right; font-size: 15px; font-weight: 800; color: #0f172a;">Total Paid (USD)</td>
            <td style="padding: 14px 16px; text-align: right; font-size: 18px; font-weight: 800; color: #059669; font-family: monospace;">${currencySymbol}${amount.toLocaleString()}</td>
          </tr>
        </tfoot>
      </table>

      ${invoiceUrl ? `
      <!-- External Invoice Link -->
      <div style="text-align: center; margin-bottom: 24px;">
        <a href="${invoiceUrl}" style="display: inline-block; background-color: #002f86; color: #ffffff; font-size: 13px; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
          View / Download Official Stripe Tax Invoice →
        </a>
      </div>
      ` : ''}

      <!-- Next Steps Callout -->
      <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <div style="font-weight: 700; font-size: 14px; color: #1e3a8a; margin-bottom: 8px;">
          What Happens Next?
        </div>
        <ol style="margin: 0; padding-left: 20px; font-size: 13px; color: #1e40af; line-height: 1.6;">
          <li>Our admissions team will contact you within 24 hours to complete your orientation paperwork.</li>
          <li>You will be invited to the cohort Slack/Discord channel and granted private GitHub repo access.</li>
          <li>Live daily virtual classes will commence according to your cohort induction calendar.</li>
        </ol>
      </div>

      <!-- Support / Contact -->
      <div style="font-size: 12px; color: #64748b; line-height: 1.5; border-top: 1px solid #e2e8f0; pt-4; padding-top: 16px;">
        <p style="margin: 0 0 6px 0;"><strong>Need assistance or employer invoice adjustments?</strong></p>
        <p style="margin: 0;">
          Email Admissions: <a href="mailto:info@thefoundrys.com" style="color: #2563eb; text-decoration: none;">info@thefoundrys.com</a><br/>
          US Support: +1 5404146956 &bull; India Support: +91 7981171474<br/>
          WhatsApp: +91 9704448853 / +91 7032917578 / +91 99664 68249
        </p>
      </div>

    </div>

    <!-- Footer -->
    <div style="background: #f1f5f9; padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
      <div>&copy; ${new Date().getFullYear()} The Foundry's. All rights reserved.</div>
      <div style="margin-top: 4px;">A Premium Finishing School in DeepTech &bull; Hyderabad, India &bull; www.thefoundrys.com</div>
    </div>

  </div>
</body>
</html>
  `;

  const mailOptions = {
    from: `"The Foundry's Admissions" <${senderEmail}>`,
    to,
    bcc: senderEmail,
    subject: `Official Tax Invoice & Enrollment Receipt: ${courseName} (Paid: ${currencySymbol}${amount.toLocaleString()})`,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Invoice email sent successfully to ${to}. MessageId: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Unknown error';
    console.error(`❌ Error sending invoice email to ${to}:`, errMsg);
    return { success: false, error: errMsg };
  }
};
