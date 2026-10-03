import type { Metadata } from 'next';
import SiteShell from '@/components/SiteShell';
import { site } from '@/data/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.canonical),
  title: 'Bachani Farms | Mango, Cucumber & Crop Farm in Pakistan',
  description:
    'Bachani Farms grows mango, banana, papaya, cucumber, sugarcane and wheat in [District], Pakistan, and supplies quality produce to export buyers under contract.',
  icons: {
    icon: '/bachani-logo.png',
    apple: '/bachani-logo.png',
  },
  openGraph: {
    siteName: site.name,
    images: [{ url: site.seo.ogImage }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [site.seo.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
