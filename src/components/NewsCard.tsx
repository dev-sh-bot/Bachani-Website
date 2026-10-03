'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { type NewsArticle } from '../data/news';
import { images } from '../data/images';

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const img = images[article.imageKey] || images['newsDefault'];
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group block bg-white rounded-[24px] overflow-hidden border hover:shadow-lg transition-all duration-300"
      style={{ borderColor: '#DCE3D2' }}
    >
      <div className="overflow-hidden aspect-[16/10] bg-sage">
        <img
          src={img.url}
          alt={img.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
          width={400}
          height={250}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-[0.1em]"
            style={{ backgroundColor: '#EEF3E6', color: '#0B5828' }}
          >
            {article.category}
          </span>
          <span className="font-mono text-[11px] text-stone">{article.date}</span>
        </div>
        <h3
          className="font-display text-xl font-semibold mb-2 leading-snug"
          style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
        >
          {article.title}
        </h3>
        <p className="text-sm text-stone leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-1 text-forest font-medium text-sm">
          <span>Read More</span>
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
