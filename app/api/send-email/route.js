import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    // Expected fields: LANDING_PAGE, ORIGIN, NAME, PHONE_TEXT, EMAIL
    const { LANDING_PAGE, ORIGIN, COUNTRY, NAME, PHONE_TEXT, EMAIL } = body;

    // Build email content (HTML and plain text)
    const subject = `New Lead from ${LANDING_PAGE}`;
    const text = `
New lead received:
Landing Page: ${LANDING_PAGE}
Name: ${NAME || "-"}
Phone: ${PHONE_TEXT || "-"}
Email: ${EMAIL || "-"}
Origin: ${ORIGIN || "-"}
Country: ${COUNTRY || "-"}
    `.trim();

    const html = `
      <h2>New Lead Received</h2>
      <table cellpadding="6" cellspacing="0" border="0">
        <tr><td><strong>Landing Page:</strong></td><td>${LANDING_PAGE || "-"}</td></tr>
        <tr><td><strong>Origin:</strong></td><td>${ORIGIN || "-"}</td></tr>
        <tr><td><strong>Name:</strong></td><td>${NAME || "-"}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${PHONE_TEXT || "-"}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${EMAIL || "-"}</td></tr>
         <tr><td><strong>Origin:</strong></td><td>${ORIGIN || "-"}</td></tr>
          <tr><td><strong>Country:</strong></td><td>${COUNTRY || "-"}</td></tr>
      </table>
    `;

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME || "Website"}" <${process.env.EMAIL_USER}>`,
      to: "shiro.estate.socialmedia@gmail.com",
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true, message: "Email sent" }, { status: 200 });
  } catch (err) {
    console.error("send-email error:", err);
    return NextResponse.json(
      { ok: false, message: "Failed to send email", error: err.message },
      { status: 500 }
    );
  }
}
