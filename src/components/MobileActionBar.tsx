'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { site } from '../data/site';

export default function MobileActionBar() {
  const pathname = usePathname();
  if (pathname === '/contact') return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{
        backgroundColor: '#FBFAF5',
        borderTop: '1px solid #DCE3D2',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex h-16">
        <a
          href={`tel:${site.phone}`}
          className="flex-1 flex items-center justify-center gap-2 font-body font-semibold text-sm text-ink hover:bg-sage transition-colors"
          aria-label="Call Bachani Farms"
        >
          <Phone size={18} strokeWidth={1.5} style={{ color: '#0B5828' }} />
          <span>Call</span>
        </a>
        <div className="w-px" style={{ backgroundColor: '#DCE3D2' }} />
        <a
          href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 font-body font-semibold text-sm"
          style={{ color: '#0B5828' }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Bachani Farms"
        >
          <MessageCircle size={18} strokeWidth={1.5} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
