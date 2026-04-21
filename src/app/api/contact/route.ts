import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const TO = process.env.CONTACT_EMAIL ?? "Info@StrattonSecurityGroup.com";

async function sendEmail(payload: {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error: ${err}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { propertyType, serviceType, name, company, email, phone, message, hearAbout } = body;

    if (!name || !email || !phone || !propertyType || !serviceType) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await sendEmail({
      from: "Stratton Security Website <onboarding@resend.dev>",
      to: TO,
      replyTo: email,
      subject: `New Security Inquiry — ${serviceType} (${propertyType})`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <div style="background:#06101e;padding:24px 32px;border-bottom:3px solid #c49a2a">
            <h1 style="color:#edf2f7;margin:0;font-size:20px;letter-spacing:1px">STRATTON SECURITY GROUP</h1>
            <p style="color:#7a9ab8;margin:4px 0 0;font-size:13px">New Contact Form Submission</p>
          </div>
          <div style="background:#f9f9f9;padding:32px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#666;width:140px">Property Type</td><td style="padding:8px 0;font-weight:600">${propertyType}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Service Needed</td><td style="padding:8px 0;font-weight:600">${serviceType}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              ${company ? `<tr><td style="padding:8px 0;color:#666">Company</td><td style="padding:8px 0">${company}</td></tr>` : ""}
              <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#c49a2a">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0"><a href="tel:${phone}" style="color:#c49a2a">${phone}</a></td></tr>
              ${hearAbout ? `<tr><td style="padding:8px 0;color:#666">Heard About Us</td><td style="padding:8px 0">${hearAbout}</td></tr>` : ""}
              ${message ? `<tr><td style="padding:8px 0;color:#666;vertical-align:top">Message</td><td style="padding:8px 0">${message.replace(/\n/g, "<br>")}</td></tr>` : ""}
            </table>
          </div>
          <div style="background:#06101e;padding:16px 32px;text-align:center">
            <p style="color:#4a6880;font-size:12px;margin:0">strattonsecuritygroup.com · (424) 440-5554</p>
          </div>
        </div>
      `,
    });

    await sendEmail({
      from: "Stratton Security Group <onboarding@resend.dev>",
      to: email,
      subject: "We received your inquiry — Stratton Security Group",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <div style="background:#06101e;padding:24px 32px;border-bottom:3px solid #c49a2a">
            <h1 style="color:#edf2f7;margin:0;font-size:20px;letter-spacing:1px">STRATTON SECURITY GROUP</h1>
          </div>
          <div style="padding:32px">
            <p style="font-size:15px">Hi ${name},</p>
            <p style="font-size:14px;color:#444;line-height:1.6">Thank you for reaching out. We&rsquo;ve received your inquiry about <strong>${serviceType}</strong> and a Stratton security advisor will contact you within one business day.</p>
            <p style="font-size:14px;color:#444">For immediate assistance, call us at <a href="tel:+14244405554" style="color:#c49a2a">(424) 440-5554</a>.</p>
            <p style="font-size:13px;color:#888;margin-top:32px">Excellence In Protection · CA PPO License #122163</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact route]", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
