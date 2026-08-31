'use client';

import { useState, type FormEvent } from 'react';
import { LuArrowRight } from 'react-icons/lu';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get('name') as string,
      email: data.get('email') as string,
      phone: data.get('phone') as string,
      company: data.get('company') as string,
      message: data.get('message') as string,
    };

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again or email us directly.');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email us directly.');
    }
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

      <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
        <LuArrowRight size={16} />
      </button>
      <p className="form-note">
        Prefer WhatsApp? Message us at{' '}
        <a href="https://wa.me/+923328658650" style={{ color: 'var(--vein)', fontWeight: 600 }}>
          +92 332 865 8650
        </a>
        , or email{' '}
        <a href="mailto:info@travertine.pk" style={{ color: 'var(--vein)', fontWeight: 600 }}>
          info@travertine.pk
        </a>{' '}
        directly.
      </p>

      {status === 'success' && (
        <div className="form-success" role="status">
          Thanks, your enquiry has been sent. We respond within one business day.
        </div>
      )}
      {status === 'error' && (
        <div className="form-error" role="alert">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
