'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { growthPanels } from '../data/growth';
import { crops } from '../data/crops';
import { images } from '../data/images';

// ─── constants ───────────────────────────────────────────────────────────────

const STICKY_TOP = 112; // px — just below the floating header
const STICKY_HEIGHT = 'calc(100vh - 144px)';
const STICKY_MAX_H = 660; // px

// ─── helpers ─────────────────────────────────────────────────────────────────

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ─── sub-components ──────────────────────────────────────────────────────────

function ProgressRail({
  active,
  progress,
}: {
  active: number;
  progress: number;
}) {
  const MARKERS = growthPanels.map((p, i) => i);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'sticky',
        top: STICKY_TOP,
        alignSelf: 'flex-start',
        width: 40,
        flexShrink: 0,
        height: STICKY_HEIGHT,
        maxHeight: STICKY_MAX_H,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 6,
        paddingBottom: 6,
      }}
    >
      {/* track */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 6,
          bottom: 6,
          width: 1,
          backgroundColor: '#DCE3D2',
          transform: 'translateX(-50%)',
        }}
      />
      {/* fill */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 6,
          width: 1,
          backgroundColor: '#0B5828',
          transform: 'translateX(-50%)',
          height: `calc(${Math.max(0, Math.min(1, progress)) * 100}% - 12px)`,
          transition: prefersReducedMotion() ? 'none' : 'height 100ms linear',
        }}
      />
      {/* markers */}
      {MARKERS.map(i => {
        const isActive = active >= i;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: '50%',
              top: `calc(${(i / (growthPanels.length - 1)) * 100}% * ((${STICKY_MAX_H}px - 12px) / ${STICKY_MAX_H}px) + 6px)`,
              transform: 'translate(-50%, -50%)',
              width: 22,
              height: 22,
              borderRadius: '50%',
              backgroundColor: isActive ? '#0B5828' : '#FBFAF5',
              border: `1px solid ${isActive ? '#0B5828' : '#DCE3D2'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                color: isActive ? '#FBFAF5' : '#4B584F',
                lineHeight: 1,
              }}
            >
              {i + 1}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ─── main component ──────────────────────────────────────────────────────────

export default function HowWeGrow() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const rightColRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const reduced = useRef(prefersReducedMotion());

  // ── IntersectionObserver drives active panel ──────────────────────────────
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = panelRefs.current.findIndex(el => el === entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    panelRefs.current.forEach(el => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  // ── Scroll drives progress fill ───────────────────────────────────────────
  const onScroll = useCallback(() => {
    const col = rightColRef.current;
    if (!col) return;
    const rect = col.getBoundingClientRect();
    const scrolled = -rect.top;
    const total = col.scrollHeight - window.innerHeight;
    setProgress(total > 0 ? Math.max(0, Math.min(1, scrolled / total)) : 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <section
      id="how-we-grow"
      aria-labelledby="how-grow-h2"
      style={{
        backgroundColor: '#FBFAF5',
        paddingTop: 128,
        paddingBottom: 128,
        position: 'relative',
        zIndex: 0,
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        {/* ── ROW 1: Heading ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: 64 }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 24,
                height: 1,
                backgroundColor: '#CAA549',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#7A5E16',
              }}
            >
              HOW WE GROW
            </span>
          </div>

          {/* H2 */}
          <h2
            id="how-grow-h2"
            className="how-grow-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: '#16211A',
              maxWidth: 700,
              margin: 0,
            }}
          >
            Three ways of growing on{' '}
            <em
              style={{
                fontStyle: 'italic',
                color: '#0B5828',
              }}
            >
              one farm
            </em>
          </h2>
        </div>

        {/* ── ROW 2: Two columns ─────────────────────────────────────────── */}
        <div className="how-grow-grid" style={{ display: 'grid', alignItems: 'start' }}>
          {/* ── LEFT: sticky framed photo ──────────────────────────────── */}
          <div
            className="how-grow-sticky"
            style={{
              position: 'sticky',
              top: STICKY_TOP,
              height: STICKY_HEIGHT,
              maxHeight: STICKY_MAX_H,
              alignSelf: 'flex-start',
            }}
          >
            {/* Frame — overflow hidden ONLY here */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: 32,
                overflow: 'hidden',
              }}
            >
              {/* Images */}
              {growthPanels.map((panel, i) => {
                const img = images[panel.imageKey];
                if (!img) return null;
                const isActive = active === i;
                return (
                  <img
                    key={panel.imageKey}
                    src={img.url}
                    alt={img.alt}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    width={800}
                    height={1000}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: isActive ? 1 : 0,
                      transform: reduced.current
                        ? 'none'
                        : isActive
                          ? 'scale(1)'
                          : 'scale(1.05)',
                      transition: reduced.current
                        ? 'none'
                        : 'opacity 700ms ease-out, transform 900ms ease-out',
                      willChange: 'opacity, transform',
                    }}
                  />
                );
              })}

              {/* Bottom gradient overlay + label */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: '35%',
                  background:
                    'linear-gradient(to top, rgba(6,47,23,0.70) 0%, transparent 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '20px 24px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#FBFAF5',
                    transition: reduced.current ? 'none' : 'opacity 400ms ease',
                  }}
                >
                  {growthPanels[active].photoLabel}
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: progress rail + panels ─────────────────────────── */}
          <div ref={rightColRef} style={{ display: 'flex', alignItems: 'flex-start' }}>
            {/* Sticky progress rail */}
            <ProgressRail active={active} progress={progress} />

            {/* Panels */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {growthPanels.map((panel, i) => {
                const isActive = active === i;
                const isLast = i === growthPanels.length - 1;
                return (
                  <div
                    key={panel.imageKey}
                    ref={el => { panelRefs.current[i] = el; }}
                    aria-current={isActive ? 'true' : undefined}
                    className="how-grow-panel"
                    style={{
                      minHeight: '85vh',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      paddingTop: 48,
                      paddingBottom: 48,
                      paddingLeft: 40,
                      borderBottom: isLast ? 'none' : '1px solid #DCE3D2',
                      opacity: isActive ? 1 : 0.45,
                      transform:
                        reduced.current
                          ? 'none'
                          : isActive
                            ? 'translateY(0)'
                            : 'translateY(8px)',
                      transition: reduced.current
                        ? 'none'
                        : 'opacity 500ms ease, transform 500ms ease',
                    }}
                  >
                    {/* Mono label */}
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 12,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#7A5E16',
                        marginBottom: 16,
                      }}
                    >
                      {panel.monolabel}
                    </div>

                    {/* H3 */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 40,
                        fontWeight: 600,
                        lineHeight: 1.08,
                        letterSpacing: '-0.02em',
                        color: '#16211A',
                        margin: '0 0 20px 0',
                      }}
                    >
                      {panel.title}
                    </h3>

                    {/* Body */}
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: 1.6,
                        color: '#4B584F',
                        maxWidth: '46ch',
                        margin: '0 0 28px 0',
                      }}
                    >
                      {panel.body}
                    </p>

                    {/* Crop pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {panel.cropSlugs.map(slug => {
                        const crop = crops.find(c => c.slug === slug);
                        if (!crop) return null;
                        return (
                          <Link
                            key={slug}
                            href={`/crops/${slug}`}
                            className="grow-pill"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 8,
                              height: 44,
                              paddingLeft: 16,
                              paddingRight: 16,
                              borderRadius: 9999,
                              border: '1px solid #DCE3D2',
                              color: '#0B5828',
                              fontFamily: 'var(--font-body)',
                              fontSize: 14,
                              fontWeight: 500,
                              textDecoration: 'none',
                              transition: 'background-color 200ms, color 200ms',
                            }}
                          >
                            <span
                              aria-hidden="true"
                              style={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                backgroundColor: crop.accentColor,
                                flexShrink: 0,
                              }}
                            />
                            {crop.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Pill hover + focus styles */}
      <style>{`
        .how-grow-grid {
          grid-template-columns: 1fr 1fr;
          column-gap: 96px;
        }
        .how-grow-heading {
          font-size: clamp(2rem, 6vw, 3.25rem);
        }
        .grow-pill:hover {
          background-color: #0B5828 !important;
          color: #FBFAF5 !important;
        }
        .grow-pill:focus-visible {
          outline: 2px solid #0B5828;
          outline-offset: 3px;
        }
        @media (max-width: 1023px) {
          #how-we-grow {
            padding-top: 80px;
            padding-bottom: 80px;
          }
          #how-we-grow > div {
            padding-left: 20px;
            padding-right: 20px;
          }
          .how-grow-grid {
            grid-template-columns: 1fr;
            column-gap: 0;
          }
          .how-grow-sticky {
            position: relative !important;
            top: auto !important;
            height: min(52vh, 420px) !important;
            max-height: none !important;
            margin-bottom: 32px;
          }
          .how-grow-panel {
            min-height: auto !important;
            padding-top: 32px !important;
            padding-bottom: 32px !important;
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
