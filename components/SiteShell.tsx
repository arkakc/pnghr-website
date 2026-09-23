import React from 'react';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '67572062639';
  return <>
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="/" aria-label="PNGHR home">
          <span className="brand-mark">PNG</span>
          <div><strong>PNGHR</strong><span>Consultant Firm</span></div>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/about">About</a><a href="/services">Services</a><a href="/industries">Industries</a><a href="/insights">Insights</a><a href="/contact">Contact</a>
        </nav>
        <a className="btn btn-primary nav-cta" href="/contact">Request Consultation</a>
      </div>
    </header>
    {children}
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand"><b>PNGHR Consultant Firm</b><p>Health, Safety & Environmental solutions for organisations across Papua New Guinea.</p></div>
        <div><b>Services</b><a href="/services">HSE Services</a><a href="/industries">Industries</a><a href="/contact">Consultation</a></div>
        <div><b>Connect</b><a href={`https://wa.me/${wa}`}>WhatsApp</a><a href="mailto:pnghrcf@gmail.com">Email</a><a href="tel:+67572062639">Call</a></div>
        <div className="footer-note">Website & digital systems by <b>8n8systems</b></div>
      </div>
    </footer>
    <a className="whatsapp-float" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">WA</a>
  </>;
}
