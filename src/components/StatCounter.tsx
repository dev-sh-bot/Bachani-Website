'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: string;
  label: string;
}

interface StatCounterProps {
  stats: Stat[];
  dark?: boolean;
}

function useInView(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return inView;
}

export default function StatCounter({ stats, dark = false }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div
            className="font-display text-5xl md:text-6xl font-semibold leading-none mb-2 transition-all duration-700"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              color: dark ? '#FBFAF5' : '#5A4632',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(8px)',
              transitionDelay: `${i * 100}ms`,
            }}
          >
            {stat.value}
          </div>
          <div
            className="font-mono text-[11px] uppercase tracking-[0.12em]"
            style={{ color: dark ? '#CAA549' : '#4B584F' }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
