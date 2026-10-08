import Link from 'next/link';
import { site } from '../data/site';
import { crops } from '../data/crops';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer
      className="pb-10"
      style={{ backgroundColor: '#062F17', borderTop: '1px solid rgba(220,227,210,0.2)' }}
      aria-label="Site footer"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12 md:mb-16 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block mb-4" aria-label="Bachani Farms home">
              <Logo height={48} onDark />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(251,250,245,0.6)' }}>
              Growing six crops across 100 acres in [District], Pakistan.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: '#CAA549' }}>
              Explore
            </h2>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Crops', href: '/crops' },
                { label: 'Our Farm', href: '/farm' },
                { label: 'Quality and Packing', href: '/farm/quality' },
                { label: 'Sustainability', href: '/farm/sustainability' },
                { label: 'News', href: '/news' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact Us', href: '/contact' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(251,250,245,0.65)' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: '#CAA549' }}>
              Contact
            </h2>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(251,250,245,0.65)' }}>
              {site.address}
            </p>
          </div>

          <div className="md:col-span-3 flex flex-wrap gap-x-5 gap-y-2 justify-center md:justify-start pt-6" style={{ borderTop: '1px solid rgba(220,227,210,0.15)' }} aria-label="Crops grown at Bachani Farms">
            {crops.map(crop => (
              <span key={crop.slug} className="text-sm" style={{ color: 'rgba(251,250,245,0.55)' }}>{crop.name}</span>
            ))}
          </div>
        </div>

        <div className="font-display text-[clamp(3rem,10vw,8rem)] font-semibold leading-none tracking-[-0.02em] mb-10 opacity-10 text-center md:text-left" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FBFAF5' }} aria-hidden="true">
          Bachani Farms
        </div>
        <div className="pt-6 text-center md:text-left" style={{ borderTop: '1px solid rgba(220,227,210,0.15)' }}>
          <p className="text-xs" style={{ color: 'rgba(251,250,245,0.4)' }}>© 2026 Bachani Farms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
