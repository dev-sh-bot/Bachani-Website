'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { crops } from '../data/crops';
import { images } from '../data/images';
import { site } from '../data/site';
import Logo from './Logo';

const FARM_LINKS = [
  { label: 'Farm Overview', href: '/farm' },
  { label: 'Quality and Packing', href: '/farm/quality' },
  { label: 'Sustainability', href: '/farm/sustainability' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastYRef = useRef(0);
  const [cropsOpen, setCropsOpen] = useState(false);
  const [farmOpen, setFarmOpen] = useState(false);
  const cropsRef = useRef<HTMLDivElement>(null);
  const farmRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setCropsOpen(false);
    setFarmOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setVisible(y < lastYRef.current || y < 80);
      lastYRef.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!cropsRef.current?.contains(e.target as Node)) setCropsOpen(false);
      if (!farmRef.current?.contains(e.target as Node)) setFarmOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setCropsOpen(false); setFarmOpen(false); setMobileOpen(false); }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const pillStyle: React.CSSProperties = {
    backgroundColor: scrolled ? 'rgba(251,250,245,0.92)' : 'rgba(251,250,245,0.88)',
    backdropFilter: 'blur(12px)',
    border: '1px solid #DCE3D2',
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-6"
        style={{
          paddingTop: '12px',
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        <div
          className="w-full max-w-[1320px] rounded-full flex items-center justify-between px-4 md:px-6 h-14"
          style={pillStyle}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Bachani Farms home">
            <Logo height={36} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            <Link href="/about" className="px-3 py-2 text-sm font-body font-medium text-ink hover:text-forest transition-colors rounded-full hover:bg-sage">
              About Us
            </Link>

            {/* Our Crops mega menu */}
            <div ref={cropsRef} className="relative">
              <button
                type="button"
                onClick={() => { setCropsOpen(!cropsOpen); setFarmOpen(false); }}
                onMouseEnter={() => { setCropsOpen(true); setFarmOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 text-sm font-body font-medium text-ink hover:text-forest transition-colors rounded-full hover:bg-sage"
                aria-expanded={cropsOpen}
                aria-haspopup="true"
              >
                Our Crops <ChevronDown size={14} strokeWidth={1.5} className={`transition-transform ${cropsOpen ? 'rotate-180' : ''}`} />
              </button>
              {cropsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-[24px] p-6 shadow-xl z-50"
                  style={{
                    backgroundColor: '#FBFAF5',
                    border: '1px solid #DCE3D2',
                    width: '480px',
                  }}
                  onMouseLeave={() => setCropsOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {crops.map(crop => {
                      const img = images[crop.imageKey];
                      return (
                        <Link
                          key={crop.slug}
                          href={`/crops/${crop.slug}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-sage transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-sage">
                            {img && (
                              <img src={img.url} alt={img.alt} className="w-full h-full object-cover" loading="lazy" width={40} height={40} />
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-ink group-hover:text-forest transition-colors">{crop.name}</div>
                            <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-stone">{crop.methodLabel}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    href="/crops"
                    className="flex items-center gap-2 text-sm font-semibold text-forest hover:text-leaf transition-colors"
                  >
                    View all crops <ArrowRight size={14} strokeWidth={1.5} />
                  </Link>
                </div>
              )}
            </div>

            {/* Our Farm dropdown */}
            <div ref={farmRef} className="relative">
              <button
                type="button"
                onClick={() => { setFarmOpen(!farmOpen); setCropsOpen(false); }}
                onMouseEnter={() => { setFarmOpen(true); setCropsOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 text-sm font-body font-medium text-ink hover:text-forest transition-colors rounded-full hover:bg-sage"
                aria-expanded={farmOpen}
                aria-haspopup="true"
              >
                Our Farm <ChevronDown size={14} strokeWidth={1.5} className={`transition-transform ${farmOpen ? 'rotate-180' : ''}`} />
              </button>
              {farmOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-[20px] py-2 shadow-xl z-50"
                  style={{ backgroundColor: '#FBFAF5', border: '1px solid #DCE3D2', minWidth: '220px' }}
                  onMouseLeave={() => setFarmOpen(false)}
                >
                  {FARM_LINKS.map(l => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-5 py-2.5 text-sm font-body text-ink hover:text-forest hover:bg-sage transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/partners" className="px-3 py-2 text-sm font-body font-medium text-ink hover:text-forest transition-colors rounded-full hover:bg-sage">Partners</Link>
            <Link href="/news" className="px-3 py-2 text-sm font-body font-medium text-ink hover:text-forest transition-colors rounded-full hover:bg-sage">News</Link>
            <Link href="/gallery" className="px-3 py-2 text-sm font-body font-medium text-ink hover:text-forest transition-colors rounded-full hover:bg-sage">Gallery</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center h-9 px-5 rounded-full text-sm font-body font-semibold text-white transition-colors hover:bg-leaf"
              style={{ backgroundColor: '#0B5828' }}
            >
              Contact Us
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-sage transition-colors"
              aria-label={mounted && mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mounted ? mobileOpen : false}
              suppressHydrationWarning
            >
              {mounted && mobileOpen ? (
                <X size={20} strokeWidth={1.5} />
              ) : (
                <Menu size={20} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mounted && mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto overflow-x-hidden lg:hidden w-full max-w-[100vw]"
          style={{ backgroundColor: '#062F17' }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between px-6 pt-5 pb-4">
            <Logo height={36} onDark />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-full hover:bg-white/10"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} style={{ color: '#FBFAF5' }} />
            </button>
          </div>

          <nav className="flex-1 px-6 py-4 space-y-1">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Our Crops', href: '/crops' },
              { label: 'Our Farm', href: '/farm' },
              { label: 'Partners', href: '/partners' },
              { label: 'News', href: '/news' },
              { label: 'Gallery', href: '/gallery' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 font-display text-3xl font-semibold text-paper hover:text-gold transition-colors"
                style={{ fontFamily: 'Fraunces, Georgia, serif' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Crops grid */}
          <div className="px-6 py-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] mb-3" style={{ color: '#CAA549' }}>
              Our Crops
            </div>
            <div className="grid grid-cols-2 gap-2">
              {crops.map(crop => (
                <Link
                  key={crop.slug}
                  href={`/crops/${crop.slug}`}
                  className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: crop.accentColor }}
                  />
                  <span className="text-paper text-sm font-medium">{crop.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="px-6 py-6">
            <Link
              href="/contact"
              className="flex items-center justify-center h-14 rounded-full font-body font-semibold text-forest text-lg"
              style={{ backgroundColor: '#FBFAF5' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
