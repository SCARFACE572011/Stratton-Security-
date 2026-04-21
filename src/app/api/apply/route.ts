import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_EMAIL ?? "Info@StrattonSecurityGroup.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, position, guardCard, experience, message } = body;

    if (!name || !email || !phone || !position || !guardCard) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Stratton Security Website <onboarding@resend.dev>",
      to: TO,
      replyTo: email,
      subject: `New Job Application — ${position}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <div style="background:#06101e;padding:24px 32px;border-bottom:3px solid #c49a2a">
            <h1 style="color:#edf2f7;margin:0;font-size:20px;letter-spacing:1px">STRATTON SECURITY GROUP</h1>
            <p style="color:#7a9ab8;margin:4px 0 0;font-size:13px">New Job Application</p>
          </div>
          <div style="background:#f9f9f9;padding:32px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#666;width:140px">Position</td><td style="padding:8px 0;font-weight:600">${position}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#c49a2a">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0"><a href="tel:${phone}" style="color:#c49a2a">${phone}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666">Guard Card #</td><td style="padding:8px 0;font-weight:600">${guardCard}</td></tr>
              ${experience ? `<tr><td style="padding:8px 0;color:#666">Experience</td><td style="padding:8px 0">${experience}</td></tr>` : ""}
              ${message ? `<tr><td style="padding:8px 0;color:#666;vertical-align:top">Notes</td><td style="padding:8px 0">${message.replace(/\n/g, "<br>")}</td></tr>` : ""}
            </table>
            <p style="font-size:12px;color:#888;margin-top:16px;padding-top:16px;border-top:1px solid #ddd">Applicant was instructed to email resume to ${TO} with subject: <em>Resume – Security Officer Application</em></p>
          </div>
          <div style="background:#06101e;padding:16px 32px;text-align:center">
            <p style="color:#4a6880;font-size:12px;margin:0">strattonsecuritygroup.com · (424) 440-5554</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[apply route]", err);
    return NextResponse.json({ error: "Failed to submit application. Please try again." }, { status: 500 });
  }
}
