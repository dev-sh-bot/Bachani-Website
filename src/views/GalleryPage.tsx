'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import { galleryItems } from '../data/gallery';

const FILTERS = ['All', 'Orchard', 'Tunnels', 'Fields', 'Harvest', 'People'] as const;
type Filter = typeof FILTERS[number];

const videoCards = [
  { title: 'Harvest day in the mango orchard', duration: '[02:34]', thumb: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&h=338&fit=crop&auto=format' },
  { title: 'A walk through the tunnels', duration: '[01:48]', thumb: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=338&fit=crop&auto=format' },
  { title: 'The farm from above', duration: '[03:12]', thumb: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=338&fit=crop&auto=format' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const displayed = filter === 'All' ? galleryItems : galleryItems.filter(g => g.category === filter);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox(i => i !== null ? (i - 1 + displayed.length) % displayed.length : null);
  }, [displayed.length]);

  const next = useCallback(() => {
    setLightbox(i => i !== null ? (i + 1) % displayed.length : null);
  }, [displayed.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    if (lightbox !== null) {
      document.addEventListener('keydown', handler);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox, prev, next]);

  return (
    <>

      {/* Header */}
      <section className="pt-36 pb-16 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <Eyebrow className="mb-6">GALLERY</Eyebrow>
          <h1
            className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.02em] mb-6 leading-[0.98]"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Life on the farm
          </h1>
          <p className="text-lg text-stone max-w-lg">
            Photos and short videos from our orchards, tunnels and fields through the year.
          </p>
        </div>
      </section>

      {/* Filter pills */}
      <div className="px-5 md:px-8 pb-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto flex flex-wrap gap-2">
          {FILTERS.map(f => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
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

      {/* Masonry grid */}
      <section className="px-5 md:px-8 pb-16" style={{ backgroundColor: '#FBFAF5' }} aria-label="Photo gallery">
        <div className="max-w-[1320px] mx-auto columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {displayed.map((item, i) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setLightbox(i)}
              className="group block w-full rounded-[20px] overflow-hidden bg-sage break-inside-avoid cursor-pointer focus-visible:outline-2 focus-visible:outline-forest focus-visible:outline-offset-2"
              aria-label={`View photo: ${item.caption}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  width={400}
                />
                <div
                  className="absolute inset-x-0 bottom-0 px-4 py-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                  style={{ background: 'linear-gradient(to top, rgba(6,47,23,0.8), transparent)' }}
                >
                  <p className="font-mono text-[10px] text-white uppercase tracking-[0.1em]">{item.caption}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section className="py-16 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }} aria-labelledby="videos-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="videos-heading"
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-8"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Videos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {videoCards.map((video, i) => (
              <div key={i} className="group rounded-[20px] overflow-hidden bg-sage relative aspect-video cursor-pointer">
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  width={600}
                  height={338}
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ background: 'rgba(6,47,23,0.4)' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'rgba(251,250,245,0.9)' }}
                  >
                    <Play size={20} strokeWidth={1.5} style={{ color: '#062F17', marginLeft: '2px' }} />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: '#CAA549' }}>
                    {video.duration}
                  </p>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 pb-4"
                  style={{ background: 'linear-gradient(to top, rgba(6,47,23,0.7), transparent)' }}
                >
                  <p className="text-white text-sm font-medium">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(6,47,23,0.95)' }}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${lightbox + 1} of ${displayed.length}: ${displayed[lightbox].caption}`}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X size={20} strokeWidth={1.5} style={{ color: '#FBFAF5' }} />
          </button>

          <button
            type="button"
            onClick={prev}
            className="absolute left-4 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft size={22} strokeWidth={1.5} style={{ color: '#FBFAF5' }} />
          </button>

          <div className="max-w-4xl w-full px-16">
            <img
              src={displayed[lightbox].url.replace(/w=\d+/, 'w=1200')}
              alt={displayed[lightbox].alt}
              className="w-full rounded-[20px] object-contain"
              style={{ maxHeight: '80vh' }}
            />
            <div className="flex items-center justify-between mt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: '#CAA549' }}>
                {displayed[lightbox].caption}
              </p>
              <p className="font-mono text-[11px]" style={{ color: 'rgba(251,250,245,0.5)' }}>
                {lightbox + 1} / {displayed.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            className="absolute right-4 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight size={22} strokeWidth={1.5} style={{ color: '#FBFAF5' }} />
          </button>
        </div>
      )}
    </>
  );
}
