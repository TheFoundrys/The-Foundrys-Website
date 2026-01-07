import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, phone, program, status, motivation } = data;

        // 1. Prepare Data Row
        const rowData = {
            Timestamp: new Date().toISOString(),
            Name: name,
            Email: email,
            Phone: phone,
            Program: program,
            Status: status,
            Motivation: motivation,
        };

        // 2. Try Google Sheets (Primary)
        if (process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
            try {
                const serviceAccountAuth = new JWT({
                    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
                    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
                });

                const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
                await doc.loadInfo();
                const sheet = doc.sheetsByIndex[0]; // Assuming first sheet
                await sheet.addRow(rowData);
                console.log("Saved to Google Sheets");
            } catch (sheetError) {
                console.error("Google Sheets Error:", sheetError);
                // Don't fail the request, try email fallback
            }
        }

        // 3. Try Email to Admin (Fallback/Notification)
        if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
            try {
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: process.env.GMAIL_USER,
                        pass: process.env.GMAIL_APP_PASSWORD,
                    },
                });

                await transporter.sendMail({
                    from: process.env.GMAIL_USER,
                    to: process.env.GMAIL_USER, // Send to self (Admin)
                    subject: `New Interest: ${name} - ${program}`,
                    text: `
New Interest Form Submitted:

Name: ${name}
Email: ${email}
Phone: ${phone}
Program: ${program}
Status: ${status}

Motivation:
${motivation}
                `,
                });
                console.log("Email notification sent to admin");
            } catch (emailError) {
                console.error("Email Error:", emailError);
            }
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Submission Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
