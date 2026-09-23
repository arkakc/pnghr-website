import Image from 'next/image';
import SiteShell from '@/components/SiteShell';

const mining='https://images.pexels.com/photos/17839774/pexels-photo-17839774.jpeg?auto=compress&cs=tinysrgb&w=1600';
const construction='https://images.pexels.com/photos/19386931/pexels-photo-19386931.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function IndustriesPage() {
  return <SiteShell><main>
    <section className="page-hero compact"><div className="container"><div className="eyebrow">Industries</div><h1>HSE support for operationally complex sectors.</h1><p>The initial website focuses on sectors explicitly referenced in PNGHR's company profile.</p></div></section>
    <section className="section"><div className="container industry-grid"><article className="industry-card"><Image src={mining} alt="Mining environment" fill /><div><span>01</span><h3>Mining</h3><p>Site support, risk management, training and HSE systems.</p></div></article><article className="industry-card"><Image src={construction} alt="Construction site professionals" fill /><div><span>02</span><h3>Construction</h3><p>Practical safety support for dynamic project environments.</p></div></article></div></section>
  </main></SiteShell>;
}
