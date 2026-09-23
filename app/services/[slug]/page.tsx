import { notFound } from 'next/navigation';
import SiteShell from '@/components/SiteShell';
import { serviceData, type ServiceSlug } from '../service-data';

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug)=>({slug}));
}

export default async function ServicePage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const data=serviceData[slug as ServiceSlug];
  if(!data) notFound();
  return <SiteShell><main>
    <section className="page-hero compact"><div className="container"><div className="eyebrow">PNGHR Service</div><h1>{data.title}</h1><p>{data.intro}</p><a className="btn btn-primary" href="/contact">Discuss your requirement</a></div></section>
    <section className="section"><div className="container narrow"><div className="eyebrow">What this can include</div><div className="detail-list">{data.points.map((p,i)=><div key={p}><span>{String(i+1).padStart(2,'0')}</span><b>{p}</b></div>)}</div><div className="simple-cta"><h2>Need support with {data.title.toLowerCase()}?</h2><p>Tell PNGHR about your organisation, site and current requirement.</p><a href="/contact" className="btn btn-primary">Request Consultation</a></div></div></section>
  </main></SiteShell>;
}
