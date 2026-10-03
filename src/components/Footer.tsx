'use client';

import Link from 'next/link';
import { site } from '../data/site';
import { crops } from '../data/crops';
import Logo from './Logo';

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8.5h2.5V5.6c-.4-.05-1.7-.15-3.2-.15-3.2 0-5.4 1.85-5.4 5.25V13H5.5v3.2H8v8.2h3.5V16.2h2.7l.5-3.2h-3.2v-2.1c0-.9.25-1.55 1.5-1.55z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 12.2s0-3.4-.4-5c-.2-1.1-1.1-2-2.2-2.2C18.3 4.5 12 4.5 12 4.5s-6.3 0-8.4.5c-1.1.2-2 1.1-2.2 2.2C1 8.8 1 12.2 1 12.2s0 3.4.4 5c.2 1.1 1.1 2 2.2 2.2 2.1.5 8.4.5 8.4.5s6.3 0 8.4-.5c1.1-.2 2-1.1 2.2-2.2.4-1.6.4-5 .4-5zM9.8 15.5v-6.6l6.4 3.3-6.4 3.3z" />
    </svg>
  );
}

const SOCIAL = [
  { href: site.social.facebook, label: 'Facebook', Icon: FacebookIcon },
  { href: site.social.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: site.social.youtube, label: 'YouTube', Icon: YoutubeIcon },
] as const;

export default function Footer({ showMobileActionPad = true }: { showMobileActionPad?: boolean }) {
  return (
    <footer
      className={showMobileActionPad ? 'pb-[calc(2.5rem+4rem+env(safe-area-inset-bottom,0px))] md:pb-10' : 'pb-10'}
      style={{
        backgroundColor: '#062F17',
        borderTop: '1px solid rgba(220,227,210,0.2)',
      }}
      aria-label="Site footer"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12 md:mb-16 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block mb-4" aria-label="Bachani Farms home">
              <Logo height={48} onDark />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(251,250,245,0.6)' }}>
              Growing mango, banana, papaya, cucumber, sugarcane and wheat on [00] acres in [District], Pakistan.
            </p>
            <div className="mt-5 flex flex-col items-center md:items-start">
              <div
                className="font-mono text-[11px] uppercase tracking-[0.14em] mb-3"
                style={{ color: '#CAA549' }}
              >
                Connect
              </div>
              <div className="flex gap-3 justify-center md:justify-start">
                {SOCIAL.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Bachani Farms on ${label}`}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/15"
                    style={{
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#FBFAF5',
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: '#CAA549' }}>
              Explore
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Farm', href: '/farm' },
                { label: 'Quality and Packing', href: '/farm/quality' },
                { label: 'Sustainability', href: '/farm/sustainability' },
                { label: 'Partners', href: '/partners' },
                { label: 'News', href: '/news' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact Us', href: '/contact' },
              ].map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: 'rgba(251,250,245,0.65)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Crops */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: '#CAA549' }}>
              Our Crops
            </h3>
            <ul className="space-y-2.5">
              {crops.map(crop => (
                <li key={crop.slug}>
                  <Link
                    href={`/crops/${crop.slug}`}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: 'rgba(251,250,245,0.65)' }}
                  >
                    {crop.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: '#CAA549' }}>
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(251,250,245,0.65)', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(251,250,245,0.65)' }}
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0" style={{ color: 'rgba(251,250,245,0.65)' }}>
                  {site.address}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Large name */}
        <div
          className="font-display text-[clamp(3rem,10vw,8rem)] font-semibold leading-none tracking-[-0.02em] mb-10 opacity-10 text-center md:text-left"
          style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FBFAF5' }}
          aria-hidden="true"
        >
          Bachani Farms
        </div>

        <div
          className="flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between gap-3 md:gap-4 pt-6 text-center md:text-left"
          style={{ borderTop: '1px solid rgba(220,227,210,0.15)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(251,250,245,0.4)' }}>
            © 2026 Bachani Farms. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs hover:text-white transition-colors"
            style={{ color: 'rgba(251,250,245,0.4)' }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
