import Image from 'next/image';
import SiteShell from '@/components/SiteShell';

export default function AboutPage() {
  return <SiteShell><main>
    <section className="page-hero"><div className="container page-hero-grid"><div><div className="eyebrow">About PNGHR</div><h1>Local HSE expertise for real operating environments.</h1><p>PNGHR Consultant Firm supports organisations to strengthen Occupational Health, Safety and Environmental performance through practical, integrated solutions.</p></div><div className="page-image"><Image src="/images/field-team.jpg" alt="PNGHR field team" fill /></div></div></section>
    <section className="section"><div className="container split"><div><div className="eyebrow">Our approach</div><h2>Safety integrated with business operations</h2><p>PNGHR uses a solution-driven approach focused on detecting, controlling and monitoring workplace risks while integrating HSE requirements into business operations.</p><div className="value-list"><div><b>Local understanding</b><span>PNG-focused perspective and delivery.</span></div><div><b>Experienced leadership</b><span>Operational HSE knowledge across industry environments.</span></div><div><b>Practical implementation</b><span>Processes, training and support that can be used in the field.</span></div></div></div><div className="photo-panel"><Image src="/images/safety-consultants.jpg" alt="Safety consultants" fill /><span className="photo-tag">People. Safety. Environment.</span></div></div></section>
  </main></SiteShell>;
}
