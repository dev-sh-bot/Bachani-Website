'use client';

import Header from './Header';
import Footer from './Footer';
import CardMotion from './CardMotion';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip" style={{ backgroundColor: '#FBFAF5' }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium focus:text-sm"
        style={{ backgroundColor: '#0B5828', color: '#FBFAF5' }}
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content" className="flex-1 overflow-x-clip">
        {children}
      </main>

      <Footer />
      <CardMotion />
    </div>
  );
}
