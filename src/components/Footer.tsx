import Link from 'next/link';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { site, farmStats } from '../data/site';
import { crops } from '../data/crops';
import Logo from './Logo';

const pageColumns = [
  [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Crops', href: '/crops' },
    { label: 'Our Farm', href: '/farm' },
    { label: 'Quality and Packing', href: '/farm/quality' },
  ],
  [
    { label: 'Sustainability', href: '/farm/sustainability' },
    { label: 'News', href: '/news' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact Us', href: '/contact' },
  ],
];

export default function Footer() {
  return (
    <footer
      className="border-t border-gold/25 bg-forest-deep text-paper"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid items-start gap-10 py-10 md:grid-cols-2 lg:grid-cols-[1fr_1.15fr_0.9fr] lg:gap-12 lg:py-12">
          <div className="md:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              aria-label={`${site.name} home`}
            >
              <Logo height={44} onDark />
            </Link>
            <h2 className="mt-5 font-display text-[28px] font-medium leading-tight tracking-[-0.02em]">
              Growing with care.
            </h2>
            <p className="mt-3 max-w-[300px] text-sm leading-6 text-paper/65">
              Six crops, {farmStats.acres} acres, and a family commitment to good farming in Pakistan.
            </p>
          </div>

          <nav aria-labelledby="footer-explore-heading">
            <h2 id="footer-explore-heading" className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
              Explore
            </h2>
            <div className="grid grid-cols-2 gap-x-5 sm:gap-x-8">
              {pageColumns.map((column, index) => (
                <ul key={index} className="space-y-1">
                  {column.map(item => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-flex min-h-9 items-center rounded-sm py-1 text-sm leading-5 text-paper/75 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </nav>

          <div className="motion-card rounded-[24px] border border-paper/10 bg-paper/[0.04] p-6">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
              Contact
            </h2>
            <p className="mt-3 font-display text-2xl font-medium leading-tight tracking-[-0.02em]">
              Let’s talk harvest.
            </p>
            <p className="mt-3 text-sm leading-6 text-paper/65">
              Get in touch for crop availability and supply enquiries.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-11 items-center justify-between gap-7 rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Contact Us
              <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-paper/10 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-gold">
            Grown on our farm
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Crops grown at Bachani Farms">
            {crops.map(crop => (
              <li key={crop.slug} className="rounded-full border border-paper/10 px-3 py-1.5 text-xs leading-4 text-paper/70">
                {crop.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 border-t border-paper/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-paper/50">© 2026 {site.name}. All rights reserved.</p>
          <a
            href="#main-content"
            className="inline-flex min-h-9 w-fit items-center gap-2 rounded-sm text-xs text-paper/65 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Back to top
            <ArrowUp size={14} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
