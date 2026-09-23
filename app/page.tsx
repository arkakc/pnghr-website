import Image from 'next/image';
import LeadForm from '@/components/LeadForm';

const services = [
  ['Occupational Safety', 'Practical site safety, risk control and operational support.'],
  ['Occupational Health', 'Workplace health programmes, screening and health risk support.'],
  ['Environmental Management', 'Environmental systems, compliance and management planning.'],
  ['HSE Audit', 'Independent review of systems, sites, controls and corrective actions.'],
  ['Risk Assessment', 'Identify hazards, assess risks and establish practical controls.'],
  ['HSE Training', 'Build workforce capability, awareness and safer work practices.'],
  ['ISO & Compliance', 'Documentation, readiness and management-system improvement.'],
  ['SafetyCulture Setup', 'Digital inspection and safety workflow setup support.']
];

const steps = [
  ['01', 'Discover', 'Understand your operations, people and priorities.'],
  ['02', 'Assess', 'Identify risk, compliance gaps and improvement opportunities.'],
  ['03', 'Design', 'Shape practical HSE solutions around your operating reality.'],
  ['04', 'Implement', 'Deploy consulting, training, systems and site support.'],
  ['05', 'Improve', 'Review outcomes and strengthen performance over time.']
];

const images = {
  hero: 'https://images.pexels.com/photos/10202856/pexels-photo-10202856.jpeg?auto=compress&cs=tinysrgb&w=1800',
  field: 'https://images.pexels.com/photos/37121404/pexels-photo-37121404.jpeg?auto=compress&cs=tinysrgb&w=1600',
  mining: 'https://images.pexels.com/photos/17839774/pexels-photo-17839774.jpeg?auto=compress&cs=tinysrgb&w=1600',
  construction: 'https://images.pexels.com/photos/19386931/pexels-photo-19386931.jpeg?auto=compress&cs=tinysrgb&w=1600',
  health: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1600'
};

export default function Home() {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '67572062639';
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="PNGHR home">
            <span className="brand-mark">PNG</span>
            <div><strong>PNGHR</strong><span>Consultant Firm</span></div>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a><a href="#services">Services</a><a href="#industries">Industries</a><a href="#insights">Insights</a><a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-primary nav-cta" href="#contact">Request Consultation</a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">People • Safety • Environment • PNG</div>
            <h1>Safer workplaces.<br />Stronger compliance.<br /><em>Better business.</em></h1>
            <p>Practical Health, Safety and Environmental solutions for organisations across Papua New Guinea.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Request Consultation</a>
              <a className="btn btn-secondary" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
            <div className="micro-trust"><span>PNG-owned</span><span>HSE expertise</span><span>Implementation-focused</span></div>
          </div>

          <div className="hero-visual">
            <Image src={images.hero} alt="Construction professionals in safety gear" fill sizes="(max-width: 900px) 100vw, 52vw" priority />
            <div className="image-shade" />
            <div className="float-card card-a"><b>Risk Assessment</b><span>Identify • Control • Protect</span></div>
            <div className="float-card card-b"><b>HSE Training</b><span>Build safer teams</span></div>
            <div className="float-card card-c"><b>Compliance</b><span>Practical systems</span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div><b>Local Understanding</b><span>PNG-focused delivery</span></div>
          <div><b>Multi-disciplinary HSE</b><span>Health, safety & environment</span></div>
          <div><b>Practical Solutions</b><span>Built for implementation</span></div>
          <div><b>Business-Aligned</b><span>Safety that supports operations</span></div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-head"><div><div className="eyebrow">Our services</div><h2>Integrated HSE solutions</h2></div><p>Focused services to help organisations manage risk, strengthen compliance and improve operational performance.</p></div>
          <div className="services-grid">
            {services.map(([title, text], i) => <article className={`service-card ${i < 2 ? 'featured' : ''}`} key={title}><div className="service-index">0{i+1}</div><h3>{title}</h3><p>{text}</p><a href="#contact">Discuss this service →</a></article>)}
          </div>
        </div>
      </section>

      <section id="about" className="section soft-section">
        <div className="container split">
          <div className="photo-panel"><Image src={images.field} alt="Safety team reviewing a worksite" fill sizes="(max-width: 900px) 100vw, 50vw" /><span className="photo-tag">Local expertise. Real operating environments.</span></div>
          <div className="content-panel">
            <div className="eyebrow">About PNGHR</div>
            <h2>Built for real operational environments</h2>
            <p>PNGHR Consultant Firm supports organisations to detect, control and monitor workplace risks while integrating health, safety and environmental requirements into day-to-day operations.</p>
            <div className="value-list">
              <div><b>Local understanding</b><span>Grounded in Papua New Guinea.</span></div>
              <div><b>Multi-disciplinary capability</b><span>Safety, health, environmental and technical expertise.</span></div>
              <div><b>Practical delivery</b><span>Solutions designed to be implemented, not just reported.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container"><div className="section-head"><div><div className="eyebrow">How we work</div><h2>From risk to practical action</h2></div><p>A simple engagement model that keeps the focus on operational outcomes.</p></div><div className="process-grid">{steps.map(([n,t,d]) => <div className="process-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div>
      </section>

      <section id="industries" className="section industries-section">
        <div className="container">
          <div className="section-head"><div><div className="eyebrow">Industries</div><h2>Supporting operationally complex sectors</h2></div><p>Initial website focus reflects sectors represented in PNGHR's company profile.</p></div>
          <div className="industry-grid">
            <article className="industry-card"><Image src={images.mining} alt="Mining environment" fill sizes="(max-width: 760px) 100vw, 50vw" /><div><span>01</span><h3>Mining</h3><p>Risk, site support and practical HSE systems.</p></div></article>
            <article className="industry-card"><Image src={images.construction} alt="Construction site professionals" fill sizes="(max-width: 760px) 100vw, 50vw" /><div><span>02</span><h3>Construction</h3><p>Safer work, stronger systems and workforce capability.</p></div></article>
          </div>
        </div>
      </section>

      <section className="dark-feature">
        <div className="container dark-grid">
          <div><div className="eyebrow gold">Occupational health</div><h2>Healthy people. Safer workplaces.</h2><p>Support for occupational health programmes, health risk assessment and workforce health monitoring.</p><a href="#contact" className="text-link">Talk to PNGHR →</a></div>
          <div className="health-image"><Image src={images.health} alt="Occupational health consultation" fill sizes="(max-width: 900px) 100vw, 48vw" /></div>
        </div>
      </section>

      <section id="insights" className="section">
        <div className="container"><div className="section-head"><div><div className="eyebrow">Insights</div><h2>Useful HSE guidance</h2></div><p>Designed to build trust, support SEO and answer the questions clients search for.</p></div><div className="insight-grid"><article><span>Risk Management</span><h3>How to prepare for an HSE audit</h3><p>A practical checklist for organisations preparing people, documents and sites.</p></article><article><span>Workplace Safety</span><h3>Building a stronger safety culture</h3><p>Simple leadership and workforce practices that make safety part of everyday operations.</p></article><article><span>Environmental</span><h3>Environmental management planning</h3><p>What organisations should consider when structuring practical environmental controls.</p></article></div></div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid"><div><div className="eyebrow">Start a conversation</div><h2>Need HSE support?</h2><p>Tell PNGHR what you need. Your enquiry can be captured directly into the lead database for follow-up.</p><div className="contact-meta"><a href="tel:+67572062639">+675 7206 2639</a><a href="mailto:pnghrcf@gmail.com">pnghrcf@gmail.com</a><span>Waigani Heights, NCD, Papua New Guinea</span></div></div><LeadForm /></div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand"><b>PNGHR Consultant Firm</b><p>Health, Safety & Environmental solutions for organisations across Papua New Guinea.</p></div>
          <div><b>Services</b><a href="#services">HSE Services</a><a href="#industries">Industries</a><a href="#contact">Consultation</a></div>
          <div><b>Connect</b><a href={`https://wa.me/${wa}`}>WhatsApp</a><a href="mailto:pnghrcf@gmail.com">Email</a><a href="tel:+67572062639">Call</a></div>
          <div className="footer-note">Website & digital systems by <b>8n8systems</b></div>
        </div>
      </footer>
      <a className="whatsapp-float" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">WA</a>
    </main>
  );
}
