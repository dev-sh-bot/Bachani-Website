'use client';

import { crops } from '../data/crops';

export default function Marquee() {
  const items = [...crops, ...crops];

  return (
    <div className="w-full max-w-full overflow-x-clip overflow-y-hidden py-8 border-y" style={{ borderColor: '#DCE3D2' }}>
      <div
        className="flex gap-12 items-center"
        style={{
          animation: 'marquee 30s linear infinite',
          width: 'max-content',
        }}
      >
        {items.map((crop, i) => (
          <span key={i} className="flex items-center gap-6 flex-shrink-0">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: crop.accentColor }}
            />
            <span
              className="font-display text-4xl md:text-5xl italic text-ink whitespace-nowrap"
              style={{ fontFamily: 'Fraunces, Georgia, serif' }}
            >
              {crop.name}
            </span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
