'use client';

import { useState, useRef } from 'react';
import { Plus } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  dark?: boolean;
}

export default function Accordion({ items, dark = false }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="divide-y" style={{ borderColor: dark ? 'rgba(220,227,210,0.2)' : '#DCE3D2' }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const contentEl = refs.current[i];
        const height = isOpen && contentEl ? contentEl.scrollHeight : 0;

        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded"
            >
              <span
                className="font-body font-medium text-base leading-snug"
                style={{ color: dark ? '#FBFAF5' : '#16211A' }}
              >
                {item.question}
              </span>
              <Plus
                size={20}
                strokeWidth={1.5}
                className="flex-shrink-0 transition-transform duration-300"
                style={{
                  color: dark ? '#CAA549' : '#0B5828',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              />
            </button>
            <div
              ref={el => { refs.current[i] = el; }}
              style={{
                height: `${height}px`,
                overflow: 'hidden',
                transition: 'height 0.3s ease',
              }}
            >
              <p
                className="pb-5 text-sm leading-relaxed"
                style={{ color: dark ? 'rgba(251,250,245,0.75)' : '#4B584F' }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
