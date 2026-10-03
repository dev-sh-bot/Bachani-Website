'use client';

import { useState } from 'react';
import Eyebrow from '../components/Eyebrow';
import NewsCard from '../components/NewsCard';
import { news } from '../data/news';
import { images } from '../data/images';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', 'Harvest Update', 'Farm News', 'Seasonal Update', 'Our Team'] as const;
type Cat = typeof CATEGORIES[number];

export default function NewsPage() {
  const [filter, setFilter] = useState<Cat>('All');
  const featured = news[0];
  const featuredImg = images[featured.imageKey];

  const displayed = filter === 'All' ? news.slice(1) : news.slice(1).filter(a => a.category === filter);

  return (
    <>

      {/* Page header */}
      <section className="pt-36 pb-16 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <Eyebrow className="mb-6">NEWS</Eyebrow>
          <h1
            className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.02em] mb-6 leading-[0.98]"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            News from the farm
          </h1>
          <p className="text-lg text-stone max-w-lg">
            Harvest updates, farm news and stories from the seasons at Bachani Farms.
          </p>
        </div>
      </section>

      {/* Featured story */}
      <section className="px-5 md:px-8 pb-16" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <Link
            href={`/news/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-0 rounded-[32px] overflow-hidden bg-white border hover:shadow-xl transition-all duration-300"
            style={{ borderColor: '#DCE3D2' }}
          >
            <div className="aspect-[4/3] bg-sage overflow-hidden">
              {featuredImg && (
                <img
                  src={featuredImg.url}
                  alt={featuredImg.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="eager"
                  width={700}
                  height={525}
                />
              )}
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.1em]"
                  style={{ backgroundColor: '#EEF3E6', color: '#0B5828' }}
                >
                  {featured.category}
                </span>
                <span className="font-mono text-[11px] text-stone">{featured.date}</span>
              </div>
              <h2
                className="font-display text-3xl font-semibold tracking-[-0.02em] mb-4 leading-[1.1]"
                style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
              >
                {featured.title}
              </h2>
              <p className="text-base text-stone leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-forest font-semibold">
                Read More
                <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Filter pills */}
      <div className="px-5 md:px-8 pb-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-colors"
              style={{
                backgroundColor: filter === cat ? '#0B5828' : '#EEF3E6',
                color: filter === cat ? '#FBFAF5' : '#16211A',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* News grid */}
      <section className="px-5 md:px-8 pb-24 md:pb-32" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          {displayed.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {displayed.map(article => (
                <NewsCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-stone">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
