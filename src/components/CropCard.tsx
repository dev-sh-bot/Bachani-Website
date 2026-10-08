'use client';

import { type Crop } from '../data/crops';
import { images } from '../data/images';

const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

interface CropCardProps {
  crop: Crop;
}

export default function CropCard({ crop }: CropCardProps) {
  const img = images[crop.imageKey] || images['mango'];
  return (
    <article className="motion-card group block bg-white rounded-[24px] overflow-hidden border" style={{ borderColor: '#DCE3D2' }}>
      <div className="overflow-hidden aspect-[4/3] bg-sage">
        <img
          src={img.url}
          alt={img.alt}
          className="card-media w-full h-full object-cover"
          loading="lazy"
          width={400}
          height={300}
        />
      </div>
      <div className="p-5">
        <div
          className="font-mono text-[10px] uppercase tracking-[0.14em] mb-2"
          style={{ color: '#7A5E16' }}
        >
          {crop.methodLabel}
        </div>
        <h3
          className="font-display text-2xl font-semibold mb-2"
          style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
        >
          {crop.name}
        </h3>
        {/* Month strip */}
        <div className="flex gap-0.5 mb-3">
          {MONTHS.map((m, i) => {
            const month = i + 1;
            const isHarvest = crop.harvestMonths.includes(month);
            return (
              <div key={i} className="flex flex-col items-center gap-0.5 flex-1">
                <div
                  className="h-1.5 w-full rounded-full"
                  style={{ backgroundColor: isHarvest ? crop.accentColor : '#DCE3D2' }}
                />
                <span className="text-[8px] font-mono" style={{ color: '#4B584F' }}>{m}</span>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
