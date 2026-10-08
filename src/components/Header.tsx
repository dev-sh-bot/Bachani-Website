'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
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
  const [farmOpen, setFarmOpen] = useState(false);
  const farmRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
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
      if (!farmRef.current?.contains(e.target as Node)) setFarmOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setFarmOpen(false); setMobileOpen(false); }
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

            <Link href="/crops" className="px-3 py-2 text-sm font-body font-medium text-ink hover:text-forest transition-colors rounded-full hover:bg-sage">
              Our Crops
            </Link>

            {/* Our Farm dropdown */}
            <div ref={farmRef} className="relative">
              <button
                type="button"
                onClick={() => setFarmOpen(!farmOpen)}
                onMouseEnter={() => setFarmOpen(true)}
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
