import SiteShell from '@/components/SiteShell';

const items=[
  ['Risk Management','How to prepare for an HSE audit','A practical framework for organising documents, people, site evidence and corrective actions.'],
  ['Workplace Safety','Building a stronger safety culture','How leadership, workforce participation and clear expectations can support safer operations.'],
  ['Environmental','Environmental management planning','Core considerations when structuring operational environmental controls and responsibilities.']
];

export default function InsightsPage() {
  return <SiteShell><main>
    <section className="page-hero compact"><div className="container"><div className="eyebrow">Insights</div><h1>Useful HSE guidance for organisations.</h1><p>A lightweight knowledge hub designed for client education, search visibility and trust-building.</p></div></section>
    <section className="section"><div className="container insight-grid">{items.map(([c,t,d])=><article key={t}><span>{c}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  </main></SiteShell>;
}
