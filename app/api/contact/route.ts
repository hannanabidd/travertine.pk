import { Resend } from 'resend';

const TO_EMAIL = 'info@travertine.pk';
const DEFAULT_FROM = 'travertine.pk Website <onboarding@resend.dev>';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: 'Email sending is not configured yet. Please email us directly at info@travertine.pk.' },
      { status: 503 }
    );
  }

  let body: { name?: string; email?: string; phone?: string; company?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { name, email, phone, company, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || DEFAULT_FROM,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Something went wrong sending your message. Please try again or email us directly.' },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Resend request failed:', err);
    return Response.json(
      { error: 'Something went wrong sending your message. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
