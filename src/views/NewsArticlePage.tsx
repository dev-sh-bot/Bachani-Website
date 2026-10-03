'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Share2, Check, ExternalLink } from 'lucide-react';
import NewsCard from '../components/NewsCard';
import { news } from '../data/news';
import { images } from '../data/images';
import { site } from '../data/site';
import NotFoundPage from './NotFoundPage';

export default function NewsArticlePage({ slug }: { slug: string }) {
  const article = news.find(a => a.slug === slug);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const articleUrl = `${site.seo.canonical}/news/${slug}`;

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const progress = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!article) return <NotFoundPage />;

  const img = images[article.imageKey];
  const related = news.filter(a => a.slug !== slug).slice(0, 3);

  const handleCopy = () => {
    navigator.clipboard.writeText(articleUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 z-50 h-0.5 transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%`, backgroundColor: '#0B5828' }}
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={Math.round(scrollProgress * 100)}
      />

      <main className="pt-28 pb-24 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <div className="max-w-[680px] mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone">
                <li><Link href="/" className="hover:text-forest transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/news" className="hover:text-forest transition-colors">News</Link></li>
                <li aria-hidden="true">/</li>
                <li style={{ color: '#16211A' }}>Story</li>
              </ol>
            </nav>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.1em]"
                style={{ backgroundColor: '#EEF3E6', color: '#0B5828' }}
              >
                {article.category}
              </span>
              <span className="font-mono text-[11px] text-stone">{article.date}</span>
              <span className="font-mono text-[11px] text-stone">By {article.author}</span>
              <span className="font-mono text-[11px] text-stone">{article.readingTime}</span>
            </div>

            {/* H1 */}
            <h1
              className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-8 leading-[1.05]"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
            >
              {article.title}
            </h1>

            {/* Hero image */}
            {img && (
              <figure className="mb-10 rounded-[24px] overflow-hidden aspect-video bg-sage">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={680}
                  height={382}
                />
              </figure>
            )}

            {/* Body */}
            <article className="prose prose-lg max-w-none">
              {article.body.map((block, i) => {
                if (block.type === 'paragraph') {
                  return (
                    <p key={i} className="text-base leading-relaxed text-ink mb-5" style={{ maxWidth: '68ch' }}>
                      {block.text}
                    </p>
                  );
                }
                if (block.type === 'heading') {
                  return (
                    <h2
                      key={i}
                      className="font-display text-2xl font-semibold tracking-[-0.02em] mt-10 mb-4"
                      style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'quote') {
                  return (
                    <div key={i} className="my-8 py-6" style={{ borderTop: '2px solid #CAA549' }}>
                      <blockquote
                        className="font-display text-2xl italic font-medium leading-[1.3] mb-3"
                        style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
                      >
                        "{block.text}"
                      </blockquote>
                      {block.author && (
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone">{block.author}</p>
                      )}
                    </div>
                  );
                }
                if (block.type === 'image' && block.imageKey) {
                  const bImg = images[block.imageKey];
                  return bImg ? (
                    <figure key={i} className="my-8">
                      <div className="rounded-[20px] overflow-hidden aspect-[3/2] bg-sage">
                        <img
                          src={bImg.url}
                          alt={bImg.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width={680}
                          height={453}
                        />
                      </div>
                      {block.caption && (
                        <figcaption className="font-mono text-[10px] uppercase tracking-[0.1em] text-stone mt-3">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  ) : null;
                }
                return null;
              })}
            </article>

            {/* Share */}
            <div className="flex items-center gap-3 mt-12 pt-8" style={{ borderTop: '1px solid #DCE3D2' }}>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone">Share</span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border hover:border-forest hover:text-forest transition-colors"
                style={{ borderColor: '#DCE3D2', color: '#4B584F' }}
                aria-label="Share on Facebook"
              >
                <ExternalLink size={14} strokeWidth={1.5} />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(article.title + ' ' + articleUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border hover:border-forest hover:text-forest transition-colors"
                style={{ borderColor: '#DCE3D2', color: '#4B584F' }}
                aria-label="Share on WhatsApp"
              >
                <Share2 size={16} strokeWidth={1.5} />
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 h-9 rounded-full border text-sm font-medium hover:border-forest hover:text-forest transition-colors"
                style={{ borderColor: '#DCE3D2', color: '#4B584F' }}
                aria-label="Copy link"
              >
                {copied ? <><Check size={14} strokeWidth={1.5} /> Copied</> : 'Copy link'}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Related */}
      <section className="py-16 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }}>
        <div className="max-w-[1320px] mx-auto">
          <h2
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-8"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            More from the farm
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {related.map(a => <NewsCard key={a.slug} article={a} />)}
          </div>
          <Link href="/news" className="text-forest font-semibold hover:text-leaf transition-colors">
            ← Back to News
          </Link>
        </div>
      </section>
    </>
  );
}
