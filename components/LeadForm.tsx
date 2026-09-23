'use client';

import { FormEvent, useState } from 'react';

const services = [
  'Occupational Safety',
  'Occupational Health',
  'Environmental Management',
  'HSE Audit',
  'Risk Assessment',
  'HSE Training',
  'ISO & Compliance',
  'SafetyCulture Setup'
];

export default function LeadForm() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');

    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());

    if (raw.website) {
      setState('success');
      form.reset();
      return;
    }

    const query = new URLSearchParams(window.location.search);
    const source = query.get('utm_source') || 'Website';
    const campaign = query.get('utm_campaign') || '';

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...raw, source, campaign })
    });

    if (response.ok) {
      form.reset();
      setState('success');
      const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
      w.fbq?.('track', 'Lead');
    } else {
      setState('error');
    }
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-grid">
        <label><span>Name</span><input name="name" required placeholder="Your name" /></label>
        <label><span>Company</span><input name="company" placeholder="Company name" /></label>
        <label><span>Phone / WhatsApp</span><input name="phone" required placeholder="+675 ..." /></label>
        <label><span>Email</span><input name="email" type="email" placeholder="you@company.com" /></label>
        <label className="span-2"><span>Service required</span><select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((s) => <option key={s}>{s}</option>)}</select></label>
        <label className="span-2"><span>How can we help?</span><textarea name="message" rows={4} placeholder="Tell us briefly about your requirement" /></label>
      </div>
      <button className="btn btn-primary" disabled={state === 'loading'}>{state === 'loading' ? 'Sending…' : 'Request Consultation'}</button>
      {state === 'success' && <p className="form-note success">Thank you. PNGHR will contact you shortly.</p>}
      {state === 'error' && <p className="form-note error">Could not submit right now. Please use WhatsApp or call PNGHR.</p>}
    </form>
  );
}
