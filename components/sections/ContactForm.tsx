'use client';

import { useState, type FormEvent } from 'react';
import { LuArrowRight } from 'react-icons/lu';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const company = data.get('company') as string;
    const message = data.get('message') as string;

    const subject = `New enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      company ? `Company: ${company}` : null,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:info@travertine.pk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">
            Full Name<span className="req"> *</span>
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="email">
            Email<span className="req"> *</span>
          </label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="Optional" />
        </div>
        <div className="field">
          <label htmlFor="company">Company / Organisation</label>
          <input id="company" name="company" type="text" placeholder="Optional" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">
          Details<span className="req"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Stone type, dimensions or quantity, finish, destination port, and timeline"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Send Enquiry
        <LuArrowRight size={16} />
      </button>
      <p className="form-note">
        This opens your email client with your enquiry pre-filled, addressed to info@travertine.pk.
        Prefer WhatsApp? Message us at{' '}
        <a href="https://wa.me/+923328658650" style={{ color: 'var(--vein)', fontWeight: 600 }}>
          +92 332 865 8650
        </a>
        .
      </p>

      {submitted && (
        <div className="form-success" role="status">
          Your email client should now be open with your enquiry ready to send. If nothing happened,
          email us directly at info@travertine.pk.
        </div>
      )}
    </form>
  );
}
