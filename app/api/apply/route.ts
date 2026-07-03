import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import nodemailer from "nodemailer";

async function uploadToGoogleDrive(base64Data: string, filename: string): Promise<string> {
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const key = process.env.GOOGLE_PRIVATE_KEY;
    if (!email || !key) {
        throw new Error("Missing Google Service Account credentials");
    }

    const auth = new JWT({
        email: email,
        key: key.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/drive"],
    });

    const tokenInfo = await auth.getAccessToken();
    const token = tokenInfo.token;
    if (!token) {
        throw new Error("Failed to retrieve Google access token");
    }

    const metadata = {
        name: filename,
        mimeType: filename.endsWith(".pdf") ? "application/pdf" : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    };

    const boundary = "boundary_string";
    const delimiter = `\r\n--${boundary}\r\n`;
    const closeDelimiter = `\r\n--${boundary}--`;

    const multipartRequestBody = Buffer.concat([
        Buffer.from(delimiter + 'Content-Type: application/json; charset=UTF-8\r\n\r\n' + JSON.stringify(metadata)),
        Buffer.from(delimiter + 'Content-Type: ' + metadata.mimeType + '\r\nContent-Transfer-Encoding: base64\r\n\r\n'),
        Buffer.from(base64Data.split("base64,")[1] || base64Data),
        Buffer.from(closeDelimiter)
    ]);

    const uploadResponse = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": `multipart/related; boundary=${boundary}`,
        },
        body: multipartRequestBody,
    });

    if (!uploadResponse.ok) {
        const errText = await uploadResponse.text();
        throw new Error(`Google Drive Upload Error: ${errText}`);
    }

    const file = await uploadResponse.json() as { id: string };
    const fileId = file.id;

    // Share the file so anyone with the link can view/download
    const permissionResponse = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            role: "reader",
            type: "anyone",
        }),
    });

    if (!permissionResponse.ok) {
        console.error("Failed to set file permissions:", await permissionResponse.text());
    }

    return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, phone, program, occupation, message, location, eduBackground, duration, resume, resumeName } = data;

        let resumeUrl = "";
        if (resume && resumeName) {
            try {
                resumeUrl = await uploadToGoogleDrive(resume, resumeName);
                console.log("Uploaded to Google Drive:", resumeUrl);
            } catch (driveErr) {
                console.error("Google Drive Upload failed:", driveErr);
            }
        }

        // 1. Prepare Data Row for Google Sheets
        const rowData = {
            Timestamp: new Date().toISOString(),
            Name: name,
            Email: email,
            Phone: phone,
            Program: duration ? `${program} (${duration}-Year)` : program,
            Occupation: occupation,
            Location: location || "Online",
            EduBackground: eduBackground || occupation,
            LeadSource: "Foundry's Website",
            Message: message 
                ? `${message}${resumeName ? `\n\nAttached Resume: ${resumeName}${resumeUrl ? `\nDownload Link: ${resumeUrl}` : ""}` : ""}`
                : (resumeName ? `Attached Resume: ${resumeName}${resumeUrl ? `\nDownload Link: ${resumeUrl}` : ""}` : ""),
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
                program: duration ? `${program} (${duration}-Year)` : program
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

                const mailOptions: any = {
                    from: process.env.GMAIL_USER,
                    to: process.env.GMAIL_USER, // Send to self (Admin)
                    subject: `New Interest: ${name} - ${program}${duration ? ` (${duration}-Year)` : ""}`,
                    text: `
New Interest Form Submitted:

Name: ${name}
Email: ${email}
Phone: ${phone}
Program: ${program}${duration ? ` (${duration}-Year)` : ""}
Occupation: ${occupation}
Location: ${location || "Online"}
Edu Background: ${eduBackground || occupation}
Lead Source: Website
${resumeName ? `Resume Attached: ${resumeName}` : ""}
${resumeUrl ? `Resume Drive Link: ${resumeUrl}` : ""}

Goal:
${message || "N/A"}
                    `,
                };

                if (resume && resumeName) {
                    mailOptions.attachments = [
                        {
                            filename: resumeName,
                            content: resume.split("base64,")[1] || resume,
                            encoding: "base64",
                        }
                    ];
                }

                await transporter.sendMail(mailOptions);
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
