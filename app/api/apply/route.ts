import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, phone, program, occupation, message, location, eduBackground } = data;

        // 1. Prepare Data Row for Google Sheets
        const rowData = {
            Timestamp: new Date().toISOString(),
            Name: name,
            Email: email,
            Phone: phone,
            Program: program,
            Occupation: occupation,
            Location: location || "Online",
            EduBackground: eduBackground || occupation,
            LeadSource: "Foundry's Website",
            Message: message,
        };

        // 2. Send to CRM API
        try {
            const crmPayload = {
                name: name,
                phone: phone,
                email: email,
                location: location || "Online",
                eduBackground: eduBackground || occupation || "B.Tech",
                leadSource: "Website",
                program: program
            };

            const crmResponse = await fetch("https://crm.thefoundrys.com/api/v1/lms/external", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": process.env.CRM_API_KEY || "default-lms-secret-key"
                },
                body: JSON.stringify(crmPayload)
            });

            if (!crmResponse.ok) {
                const errorText = await crmResponse.text();
                console.error("CRM API Error:", errorText);
            } else {
                console.log("Successfully sent to CRM");
            }
        } catch (crmError) {
            console.error("CRM Fetch Error:", crmError);
        }

        // 3. Try Google Sheets (Primary)
        const sheetId = process.env.GOOGLE_SHEET_ID || "17D3whdkDfigHYP8KrhbLSZA0v1g6KxIpfsMqjdjqKhA";
        if (sheetId && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
            try {
                const serviceAccountAuth = new JWT({
                    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
                    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
                });

                const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
                await doc.loadInfo();
                const sheet = doc.sheetsByIndex[0]; // Assuming first sheet
                await sheet.addRow(rowData);
                console.log("Saved to Google Sheets");
            } catch (sheetError) {
                console.error("Google Sheets Error:", sheetError);
            }
        }

        // 4. Try Email to Admin (Fallback/Notification)
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
Occupation: ${occupation}
Location: ${location || "Online"}
Edu Background: ${eduBackground || occupation}
Lead Source: Website

Goal:
${message}
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
