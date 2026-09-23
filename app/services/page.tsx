import SiteShell from '@/components/SiteShell';
import { serviceData } from './service-data';

export default function ServicesPage() {
  return <SiteShell><main>
    <section className="page-hero compact"><div className="container"><div className="eyebrow">Services</div><h1>Integrated Health, Safety & Environmental services.</h1><p>Practical support across safety, occupational health, environmental management, audits, risk, training, compliance and digital safety workflows.</p></div></section>
    <section className="section"><div className="container services-grid">{Object.entries(serviceData).map(([slug,s],i)=><article className="service-card" key={slug}><div className="service-index">{String(i+1).padStart(2,'0')}</div><h3>{s.title}</h3><p>{s.intro}</p><a href={`/services/${slug}`}>Explore service →</a></article>)}</div></section>
  </main></SiteShell>;
}
