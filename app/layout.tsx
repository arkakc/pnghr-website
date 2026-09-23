import type { Metadata } from 'next';
import './globals.css';
import MetaPixel from '@/components/MetaPixel';

export const metadata: Metadata = {
  title: 'PNGHR Consultant Firm | Health, Safety & Environmental Solutions',
  description: 'Practical Occupational Health, Safety and Environmental consulting solutions for organisations across Papua New Guinea.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pnghrcf.com.au'),
  openGraph: {
    title: 'PNGHR Consultant Firm',
    description: 'Safer workplaces. Stronger compliance. Better business performance.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><MetaPixel />{children}</body>
    </html>
  );
}
