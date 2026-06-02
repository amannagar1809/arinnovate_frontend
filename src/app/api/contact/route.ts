import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
  company?: string;
  subject?: string;
};

function isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();
    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const message = body.message?.trim() ?? '';
    const phone = body.phone?.trim() ?? '';
    const company = body.company?.trim() ?? '';
    const subject = body.subject?.trim() ?? '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM;
    const to = process.env.SMTP_TO;

    if (!host || !user || !pass || !from || !to) {
      console.error('SMTP configuration is incomplete');
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subjectLabel = subject || 'General Inquiry';
    const mailSubject = `Contact Form: ${subjectLabel} — ${name}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      company ? `Company: ${company}` : null,
      subject ? `Subject: ${subjectLabel}` : null,
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
      ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subjectLabel)}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `;

    const fromAddress = from.includes('<')
      ? from
      : `"Arinnovate Contact Form" <${from}>`;

    const info = await transporter.sendMail({
      from: fromAddress,
      to,
      replyTo: email,
      subject: mailSubject,
      text,
      html,
    });

    console.log('Contact email sent:', {
      messageId: info.messageId,
      to,
      from: fromAddress,
      response: info.response,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form email error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
