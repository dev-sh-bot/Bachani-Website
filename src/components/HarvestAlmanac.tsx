'use client';

import React, { useEffect, useState } from 'react';
import { crops } from '../data/crops';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface HarvestAlmanacProps {
  singleSlug?: string;
}

export default function HarvestAlmanac({ singleSlug }: HarvestAlmanacProps) {
  const [currentMonth, setCurrentMonth] = useState<number | null>(null);

  useEffect(() => {
    setCurrentMonth(new Date().getMonth() + 1);
  }, []);

  const displayCrops = singleSlug ? crops.filter(c => c.slug === singleSlug) : crops;

  return (
    <div className="overflow-x-auto">
      <div style={{ minWidth: '600px' }}>
        <div className="grid" style={{ gridTemplateColumns: '120px repeat(12, 1fr)' }}>
          {/* Header row */}
          <div className="pb-3" />
          {MONTHS.map((m, i) => (
            <div
              key={m}
              className="pb-3 text-center relative"
            >
              <span
                className="font-mono text-[10px] uppercase tracking-[0.12em]"
                style={{ color: currentMonth !== null && i + 1 === currentMonth ? '#0B5828' : '#4B584F' }}
              >
                {m}
              </span>
              {currentMonth !== null && i + 1 === currentMonth && (
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px"
                  style={{ height: `${displayCrops.length * 44 + 8}px`, backgroundColor: '#0B5828', opacity: 0.4 }}
                />
              )}
            </div>
          ))}

          {/* Crop rows */}
          {displayCrops.map(crop => (
            <React.Fragment key={crop.slug}>
              <div
                className="flex items-center py-2 pr-3"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-stone truncate">
                  {crop.name}
                </span>
              </div>
              {crop.harvestMonths.length === 0 ? (
                <div className="flex items-center py-2 text-xs text-stone" style={{ gridColumn: 'span 12' }}>
                  Harvest dates to be confirmed
                </div>
              ) : MONTHS.map((_, i) => {
                const month = i + 1;
                const isHarvest = crop.harvestMonths.includes(month);
                return (
                  <div
                    key={`${crop.slug}-${i}`}
                    className="py-2 px-0.5"
                  >
                    {isHarvest && (
                      <div
                        className="h-7 rounded-full w-full"
                        style={{ backgroundColor: crop.accentColor, opacity: 0.85 }}
                      />
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>

        {/* NOW label */}
        <p className="mt-4 text-xs text-stone" style={{ fontFamily: 'var(--font-mono)' }}>
          Note: Harvest months are indicative and will be confirmed by the farm.
        </p>
      </div>
    </div>
  );
}
