import SiteShell from '@/components/SiteShell';

export default function NotFound() {
  return <SiteShell><main><section className="page-hero compact"><div className="container"><div className="eyebrow">404</div><h1>Page not found.</h1><p>The page you are looking for is unavailable.</p><a className="btn btn-primary" href="/">Return home</a></div></section></main></SiteShell>;
}
