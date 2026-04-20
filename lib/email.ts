import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendVerificationLink = async (to: string, link: string) => {
  const mailOptions = {
    from: `"The Foundry's" <${process.env.SMTP_USER}>`,
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
