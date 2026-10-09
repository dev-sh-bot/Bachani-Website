'use client';

import { useState } from 'react';
import Eyebrow from '../components/Eyebrow';
import HarvestAlmanac from '../components/HarvestAlmanac';
import { crops, cropList } from '../data/crops';
import { farmingTypes, farmingSummary } from '../data/farming';
import { images } from '../data/images';
import { farmStats } from '../data/site';

const FILTERS = ['All', ...farmingTypes] as const;
type Filter = typeof FILTERS[number];

export default function CropsPage() {
  const [filter, setFilter] = useState<Filter>('All');

  const displayed = filter === 'All' ? crops : crops.filter(c => c.method === filter);

  return (
    <>

      {/* Page header */}
      <section className="pt-36 pb-16 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <Eyebrow className="mb-6">OUR CROPS</Eyebrow>
          <h1
            className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.02em] mb-6 leading-[0.98]"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A', maxWidth: '800px' }}
          >
            Six crops across orchards, tunnels and fields
          </h1>
          <p className="text-lg text-stone max-w-lg">
            {farmingSummary}
          </p>
        </div>
      </section>

      {/* Filter pills */}
      <div className="px-5 md:px-8 pb-4" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto flex flex-wrap gap-2">
          {FILTERS.map(f => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className="px-5 py-2 rounded-full text-sm font-medium transition-colors"
              style={{
                backgroundColor: filter === f ? '#0B5828' : '#EEF3E6',
                color: filter === f ? '#FBFAF5' : '#16211A',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Crop list */}
      <section className="py-12 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-label="Crop list">
        <div className="max-w-[1320px] mx-auto space-y-0 divide-y" style={{ borderColor: '#DCE3D2' }}>
          {displayed.map((crop, i) => {
            const img = images[crop.imageKey];
            return (
              <div
                key={crop.slug}
                id={crop.slug}
                className={`group scroll-mt-24 flex flex-col md:flex-row gap-10 py-16 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="motion-card w-full md:w-1/2 rounded-[32px] overflow-hidden aspect-[4/3] bg-sage">
                  {img && (
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="card-media w-full h-full object-cover"
                      loading="lazy"
                      width={700}
                      height={525}
                    />
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] mb-3" style={{ color: '#7A5E16' }}>
                    {crop.methodLabel}
                  </div>
                  <h2
                    className="font-display text-5xl md:text-6xl font-semibold tracking-[-0.02em] mb-4"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
                  >
                    {crop.name}
                  </h2>
                  <p className="text-base text-stone leading-relaxed mb-6">{crop.shortDescription}</p>
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone mb-1">Method</div>
                      <div className="text-sm font-medium text-ink">{crop.method}</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone mb-1">Harvest</div>
                      <div className="text-sm font-medium text-ink">{crop.harvestLabel}</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone mb-1">Area</div>
                      <div className="text-sm font-medium text-ink">{crop.area}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Harvest Almanac */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }} aria-labelledby="almanac-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="almanac-heading"
            className="font-display text-4xl font-semibold tracking-[-0.02em] mb-4"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            The farm year at a glance
          </h2>
          <p className="text-stone mb-10">Harvest months are indicative and will be confirmed by the farm.</p>
          <HarvestAlmanac />
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-16 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <div className="max-w-[680px]">
            <h2
              className="font-display text-2xl font-semibold tracking-[-0.02em] mb-5"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
            >
              Crops grown at Bachani Farms
            </h2>
            <p className="text-base text-stone leading-relaxed">
              Bachani Farms grows {cropList} across {farmStats.acres} acres in [District], Pakistan. Each crop follows its own season, and we supply our harvest under contract to trusted buyers in Pakistan and abroad.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
