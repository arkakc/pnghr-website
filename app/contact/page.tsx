import SiteShell from '@/components/SiteShell';
import LeadForm from '@/components/LeadForm';

export default function ContactPage() {
  return <SiteShell><main>
    <section className="page-hero compact"><div className="container"><div className="eyebrow">Contact PNGHR</div><h1>Start with a clear HSE conversation.</h1><p>Share your requirement and PNGHR can follow up on the right service, site need or next step.</p></div></section>
    <section className="section contact-section"><div className="container contact-grid"><div><h2>Talk to PNGHR</h2><div className="contact-meta"><a href="tel:+67572062639">+675 7206 2639</a><a href="mailto:pnghrcf@gmail.com">pnghrcf@gmail.com</a><span>Waigani Heights, NCD, Papua New Guinea</span></div></div><LeadForm /></div></section>
  </main></SiteShell>;
}
