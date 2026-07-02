import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const name = data.get("name") as string;
        const phone = data.get("phone") as string;
        const email = data.get("email") as string;
        const yearOfPassing = data.get("yearOfPassing") as string;
        const experienceDetails = data.get("experienceDetails") as string;
        const file = data.get("resume") as File | null;

        // 1. Send to CRM API (CentraCRM)
        try {
            const crmPayload = {
                name: name,
                phone: phone,
                email: email,
                location: "Online",
                eduBackground: `Year of Passing: ${yearOfPassing} | Experience: ${experienceDetails}`,
                leadSource: "Career Transformation Form",
                program: "Entry Level Career Transformation",
                experienceDetails: experienceDetails,
                resumeName: file ? file.name : ""
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
                console.error("CentraCRM API Error:", errorText);
            } else {
                console.log("Successfully sent to CentraCRM");
            }
        } catch (crmError) {
            console.error("CentraCRM Fetch Error:", crmError);
        }

        // 2. Save to Google Sheets
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

                const rowData = {
                    Timestamp: new Date().toISOString(),
                    Name: name,
                    Email: email,
                    Phone: phone,
                    Program: "Entry Level Career Transformation",
                    Occupation: `Passing: ${yearOfPassing}`,
                    Location: "Online",
                    EduBackground: `Passing: ${yearOfPassing} | Exp: ${experienceDetails}`,
                    LeadSource: "Career Transformation Form",
                    Message: `Experience Details: ${experienceDetails} | Resume: ${file ? file.name : "None"}`,
                };

                await sheet.addRow(rowData);
                console.log("Saved to Google Sheets");
            } catch (sheetError) {
                console.error("Google Sheets Error:", sheetError);
            }
        }

        // 3. Email to Admin with Resume Attachment
        if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
            try {
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: process.env.GMAIL_USER,
                        pass: process.env.GMAIL_APP_PASSWORD,
                    },
                });

                const attachments = [];
                if (file && typeof file !== "string") {
                    const buffer = Buffer.from(await file.arrayBuffer());
                    attachments.push({
                        filename: file.name,
                        content: buffer,
                    });
                }

                await transporter.sendMail({
                    from: process.env.GMAIL_USER,
                    to: process.env.GMAIL_USER,
                    subject: `New Lead: Personalized Career Transformation Journey - ${name}`,
                    text: `
New Candidate Lead Submitted:

Name: ${name}
Email: ${email}
Phone: ${phone}
Year of Passing: ${yearOfPassing}
Experience Details: ${experienceDetails}
Resume File Name: ${file ? file.name : "None"}
Lead Source: Career Transformation Form
                    `,
                    attachments: attachments,
                });
                console.log("Email notification sent to admin with resume");
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
