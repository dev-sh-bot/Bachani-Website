'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { type Crop } from '../data/crops';
import { images } from '../data/images';

const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

interface CropCardProps {
  crop: Crop;
}

export default function CropCard({ crop }: CropCardProps) {
  const img = images[crop.imageKey] || images['mango'];
  return (
    <Link
      href={`/crops/${crop.slug}`}
      className="group block bg-white rounded-[24px] overflow-hidden border hover:shadow-lg transition-all duration-300"
      style={{ borderColor: '#DCE3D2' }}
    >
      <div className="overflow-hidden aspect-[4/3] bg-sage">
        <img
          src={img.url}
          alt={img.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
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
        <div className="flex items-center gap-1 text-forest font-medium text-sm">
          <span>Explore</span>
          <ArrowRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
