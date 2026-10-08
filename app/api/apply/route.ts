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

        // 4. Try Email to Admin & Applicant (via Gmail or SMTP)
        const hasGmail = !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
        const hasSmtp = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD);

        if (hasGmail || hasSmtp) {
            try {
                const transporter = hasGmail
                    ? nodemailer.createTransport({
                          service: "gmail",
                          auth: {
                              user: process.env.GMAIL_USER,
                              pass: process.env.GMAIL_APP_PASSWORD,
                          },
                      })
                    : nodemailer.createTransport({
                          host: process.env.SMTP_HOST,
                          port: parseInt(process.env.SMTP_PORT || "587"),
                          secure: process.env.SMTP_SECURE === "true" || parseInt(process.env.SMTP_PORT || "587") === 465,
                          auth: {
                              user: process.env.SMTP_USER,
                              pass: process.env.SMTP_PASSWORD,
                          },
                      });

                const senderEmail = process.env.GMAIL_USER || process.env.SMTP_USER;

                const mailOptions: any = {
                    from: senderEmail,
                    to: senderEmail, // Send to self (Admin)
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

                // Send Confirmation Email to the Applicant
                if (email) {
                    await transporter.sendMail({
                        from: `"The Foundry's Admissions" <${senderEmail}>`,
                        to: email,
                        subject: `Seat Reserved: ${program || "Forward Deployed Engineering"}`,
                        html: `
                            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; color: #1e293b; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">
                                <div style="margin-bottom: 24px;">
                                    <span style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; color: #002f86;">The Foundry</span>
                                    <h2 style="color: #002f86; margin: 8px 0 0 0; font-size: 24px;">Seat Reservation Confirmed!</h2>
                                </div>
                                <p style="font-size: 15px; line-height: 1.6; color: #334155;">
                                    Dear <strong>${name || "Applicant"}</strong>,
                                </p>
                                <p style="font-size: 15px; line-height: 1.6; color: #334155;">
                                    Welcome to the Inaugural DeepTech Finishing Cohort at The Foundry. We have received your application and your seat pass has been provisionally generated.
                                </p>
                                <div style="background: #f8fafc; border-left: 4px solid #002f86; padding: 16px 20px; margin: 24px 0; border-radius: 6px;">
                                    <p style="margin: 0 0 6px 0; font-weight: 700; color: #0f172a; font-size: 16px;">
                                        ${program}
                                    </p>
                                    <p style="margin: 0; font-size: 13px; color: #64748b;">
                                        <strong>Schedule:</strong> Mon–Fri 8:30–9:30 PM EST • 2 Months Intensive
                                    </p>
                                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748b;">
                                        <strong>Tuition:</strong> $2,500 USD (Includes live instruction, private code repo reviews, capstone supervision & finishing school certification)
                                    </p>
                                </div>
                                <p style="font-size: 15px; line-height: 1.6; color: #334155;">
                                    Our admissions team is reviewing your profile. A formal onboarding kit and corporate syllabus invoice will be dispatched to this email address shortly.
                                </p>
                                <p style="font-size: 13px; color: #64748b; margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 20px; line-height: 1.5;">
                                    Have questions? Email us directly at <a href="mailto:info@thefoundrys.com" style="color: #002f86; font-weight: 600;">info@thefoundrys.com</a>.
                                    <br><br>
                                    <strong>The Foundry</strong><br>
                                    <a href="https://thefoundrys.com" style="color: #002f86; text-decoration: none;">thefoundrys.com</a>
                                </p>
                            </div>
                        `,
                    });
                    console.log("Confirmation email sent to applicant:", email);
                }
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
