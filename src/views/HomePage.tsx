'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sprout, ShieldCheck, Handshake, Droplets, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import Eyebrow from '../components/Eyebrow';
import HarvestAlmanac from '../components/HarvestAlmanac';
import HowWeGrow from '../components/HowWeGrow';
import StatCounter from '../components/StatCounter';
import Accordion from '../components/Accordion';
import ProofStrip from '../components/ProofStrip';
import Marquee from '../components/Marquee';
import ProcessSteps from '../components/ProcessSteps';
import { crops } from '../data/crops';
import { images } from '../data/images';
import { faqs } from '../data/faqs';
import { news } from '../data/news';
import NewsCard from '../components/NewsCard';

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function InHarvestNow({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    setCurrentMonth(new Date().getMonth() + 1);
  }, []);

  if (!mounted) return null;

  const harvesting = crops.filter(c => c.harvestMonths.includes(currentMonth!));

  return (
    <div
      className={`rounded-2xl p-3.5 sm:p-4 shadow-xl ${className}`}
      style={{ backgroundColor: '#FBFAF5' }}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-gold-ink mb-1.5">
        In harvest now
      </div>
      <div className="font-mono text-xs text-stone mb-2">{MONTH_NAMES[currentMonth! - 1]}</div>
      {harvesting.length > 0 ? (
        <div className="flex flex-col gap-1.5">
          {harvesting.map(crop => (
            <div key={crop.slug} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: crop.accentColor }} />
              <span className="text-xs text-ink font-medium">{crop.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xs text-stone">Between seasons</p>
      )}
    </div>
  );
}


export default function HomePage() {
  const heroImg = images['hero'];
  const farmTeamImg = images['farmTeam'];
  const irrigationImg = images['irrigation'];

  const fieldToSteps = [
    { title: 'Grown.', description: 'Each crop is planted, tended and watched by our own team through its full season.' },
    { title: 'Harvested at the right stage.', description: 'We pick when the crop is ready, so quality holds from the farm to the market.' },
    { title: 'Sorted and graded.', description: 'Produce is checked and graded by size and quality before it is packed.' },
    { title: 'Packed and stored.', description: 'Careful packing [and cooling] protects freshness on the way to our buyers.' },
    { title: 'Handed over under contract.', description: 'Our buyers take the produce on to markets in Pakistan and abroad.' },
  ];

  const whyCards = [
    { icon: Sprout, title: 'Six crops, one farm.', body: 'Orchard, plantation, tunnel and open-field farming under one management, so every crop gets specialist attention.' },
    { icon: ShieldCheck, title: 'Grown at the source.', body: 'We grow and harvest our own produce, so we know where every crop came from.' },
    { icon: Handshake, title: 'Built for contract supply.', body: 'Planned harvest windows, consistent quality and reliable handover for buyers who depend on both.' },
    { icon: Droplets, title: 'Care for land and water.', body: 'Efficient irrigation, healthy soil and careful planning keep the farm productive for the next generation.' },
  ];

  return (
    <>

      {/* 1. Hero */}
      <section
        className="relative overflow-hidden min-h-[100svh] md:min-h-[600px]"
        aria-label="Hero"
      >
        {heroImg && (
          <img
            src={heroImg.url}
            alt={heroImg.alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ animation: 'slowZoom 20s ease-in-out infinite alternate' }}
            fetchPriority="high"
            decoding="async"
            width={1920}
            height={1080}
          />
        )}
        {/* Gradient overlay — stronger vertical wash on mobile; angled wash on desktop */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(6,47,23,0.72) 0%, rgba(6,47,23,0.55) 45%, rgba(6,47,23,0.35) 100%)',
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: 'linear-gradient(135deg, rgba(6,47,23,0.75) 0%, rgba(6,47,23,0.3) 60%, transparent 100%)',
          }}
        />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 min-h-[100svh] flex flex-col justify-center pt-28 pb-28 md:pt-24 md:pb-24">
          <Eyebrow dark className="mb-4 md:mb-6">BACHANI FARMS · [DISTRICT], PAKISTAN</Eyebrow>
          <h1
            className="font-display font-semibold leading-[1.05] tracking-[-0.02em] mb-4 md:mb-6 max-w-3xl"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2.35rem, 9vw, 7rem)',
              color: '#FBFAF5',
            }}
          >
            Orchards, tunnels and open{' '}
            <em className="not-italic italic" style={{ color: '#CAA549' }}>fields.</em>
          </h1>
          <p className="text-[15px] md:text-lg leading-[1.65] mb-7 md:mb-8 max-w-xl" style={{ color: 'rgba(251,250,245,0.85)' }}>
            Bachani Farms grows mango, banana, papaya, cucumber, sugarcane and wheat, and supplies quality produce to export buyers under contract.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none">
            <Button to="/crops" variant="light" className="w-full sm:w-auto justify-center whitespace-nowrap">
              Explore Our Crops
            </Button>
            <Button to="/about" variant="light" className="w-full sm:w-auto justify-center whitespace-nowrap">
              Our Story
            </Button>
          </div>

          {/* In-flow on mobile; floating on md+ */}
          <InHarvestNow className="mt-6 w-full max-w-[200px] md:mt-0 md:absolute md:bottom-24 md:right-8 md:z-10" />
        </div>

        {/* Scroll indicator — hide on small phones to free space above action bar */}
        <div className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
          <ChevronDown size={20} strokeWidth={1.5} style={{ color: 'rgba(251,250,245,0.5)', animation: 'bounce 2s infinite' }} />
        </div>

        <style>{`
          @keyframes slowZoom { from { transform: scale(1); } to { transform: scale(1.06); } }
          @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(4px); } }
        `}</style>
      </section>

      {/* Proof strip */}
      <div style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto px-5 md:px-8 border-b" style={{ borderColor: '#DCE3D2' }}>
          <ProofStrip />
        </div>
      </div>

      {/* 2. Marquee */}
      <div style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <Marquee />
        </div>
      </div>

      {/* 3. Intro statement */}
      <section
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ backgroundColor: '#EEF3E6' }}
        aria-labelledby="intro-heading"
      >
        <div className="max-w-[1320px] mx-auto">
          <Eyebrow className="mb-8 justify-center">WHO WE ARE</Eyebrow>
          <p
            id="intro-heading"
            className="font-display text-2xl md:text-3xl font-medium leading-[1.35] text-center mx-auto"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              color: '#16211A',
              maxWidth: '900px',
            }}
          >
            We are a working farm first. Every mango, cucumber, banana and stalk of wheat starts with soil we know, water we plan for, and a team that shows up in every season. Bachani Farms grows{' '}
            <strong className="font-semibold" style={{ color: '#0B5828' }}>six crops</strong>{' '}
            across 100 acres in [District], and supplies them{' '}
            <strong className="font-semibold" style={{ color: '#0B5828' }}>under contract</strong>{' '}
            to buyers who take them to markets in Pakistan and around the world.
          </p>
          <div className="text-center mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-forest font-semibold text-base underline-draw hover:text-leaf transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Our Crops bento grid */}
      <section
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ backgroundColor: '#FBFAF5' }}
        aria-labelledby="crops-heading"
      >
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2
              id="crops-heading"
              className="font-display text-4xl md:text-5xl font-semibold leading-[1.02] tracking-[-0.02em]"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
            >
              Six main <em className="not-italic italic">crops</em>
            </h2>
            <p className="text-base text-stone max-w-sm">
              Every crop has its own season and its own way of growing. Explore what we grow.
            </p>
          </div>
          <div
            className="crops-bento grid gap-4"
            style={{
              gridTemplateColumns: '1fr',
              gridAutoRows: '220px',
            }}
          >
            <style>{`
              @media (min-width: 768px) {
                .crops-bento {
                  grid-template-columns: repeat(4, 1fr) !important;
                  grid-auto-rows: unset !important;
                  grid-template-rows: repeat(3, 280px) !important;
                }
                .crops-bento .bento-mango    { grid-column: 1 / 3; grid-row: 1 / 3; }
                .crops-bento .bento-banana   { grid-column: 3 / 4; grid-row: 1 / 2; }
                .crops-bento .bento-papaya   { grid-column: 4 / 5; grid-row: 1 / 2; }
                .crops-bento .bento-cucumber { grid-column: 3 / 4; grid-row: 2 / 4; }
                .crops-bento .bento-sugarcane{ grid-column: 4 / 5; grid-row: 2 / 4; }
                .crops-bento .bento-wheat    { grid-column: 1 / 3; grid-row: 3 / 4; }
              }
            `}</style>
            {crops.map(crop => {
              const img = images[crop.imageKey];
              const MONTHS_SHORT = ['J','F','M','A','M','J','J','A','S','O','N','D'];
              const bentoClass: Record<string, string> = {
                mango: 'bento-mango',
                banana: 'bento-banana',
                papaya: 'bento-papaya',
                cucumber: 'bento-cucumber',
                sugarcane: 'bento-sugarcane',
                wheat: 'bento-wheat',
              };
              return (
                <Link
                  key={crop.slug}
                  href={`/crops/${crop.slug}`}
                  className={`group relative rounded-[24px] overflow-hidden bg-sage block ${bentoClass[crop.slug] ?? ''}`}
                >
                  {img && (
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                      width={500}
                      height={500}
                    />
                  )}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(6,47,23,0.88) 0%, rgba(6,47,23,0.2) 50%, transparent 100%)' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <div className="font-mono text-[12px] uppercase tracking-[0.12em] mb-1.5" style={{ color: '#CAA549' }}>
                      {crop.methodLabel}
                    </div>
                    <div
                      className="font-display font-semibold mb-2 leading-[1.05]"
                      style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FBFAF5', fontSize: '28px' }}
                    >
                      {crop.name}
                    </div>
                    <div className="flex gap-0.5">
                      {MONTHS_SHORT.map((m, i) => {
                        const isHarvest = crop.harvestMonths.includes(i + 1);
                        return (
                          <div
                            key={i}
                            className="h-1 flex-1 rounded-full"
                            style={{ backgroundColor: isHarvest ? crop.accentColor : 'rgba(255,255,255,0.2)' }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/crops"
              className="inline-flex items-center gap-2 text-forest font-semibold text-base hover:text-leaf transition-colors"
            >
              See all crops →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Bachani */}
      <section
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ backgroundColor: '#FBFAF5' }}
        aria-labelledby="why-heading"
      >
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="why-heading"
            className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-12 text-center"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Why <em className="not-italic italic">buyers</em> work with us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-[24px] bg-white border"
                  style={{ borderColor: '#DCE3D2' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#EEF3E6' }}>
                    <Icon size={20} strokeWidth={1.5} style={{ color: '#0B5828' }} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm text-stone leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. How We Grow — sticky scroll */}
      <HowWeGrow />

      {/* 7. Harvest Almanac */}
      <section
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ backgroundColor: '#EEF3E6' }}
        aria-labelledby="almanac-heading"
      >
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="almanac-heading"
            className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-4"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            When each crop is harvested
          </h2>
          <p className="text-stone mb-10 text-base">Track harvest seasons across the farm year.</p>
          <HarvestAlmanac />
        </div>
      </section>

      {/* 8. Field to buyer */}
      <section
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ backgroundColor: '#062F17' }}
        aria-labelledby="field-to-buyer-heading"
      >
        <div className="max-w-[1320px] mx-auto">
          <Eyebrow dark className="mb-6">FIELD TO BUYER</Eyebrow>
          <h2
            id="field-to-buyer-heading"
            className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-4 leading-[1.02]"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FBFAF5', maxWidth: '600px' }}
          >
            From our fields to{' '}
            <em className="not-italic italic" style={{ color: '#CAA549' }}>export markets</em>
          </h2>
          <p className="text-base mb-14 max-w-lg" style={{ color: 'rgba(251,250,245,0.7)' }}>
            We supply our harvest under contract to trusted buyers, who take it on to markets in Pakistan and abroad.
          </p>
          <ProcessSteps steps={fieldToSteps} dark />
          <div className="mt-14">
            <Button to="/farm/quality" variant="light">See how we pack and dispatch</Button>
          </div>
        </div>
      </section>

      {/* 9. About teaser */}
      <section
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ backgroundColor: '#FBFAF5' }}
        aria-labelledby="about-teaser-heading"
      >
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-[32px] overflow-hidden aspect-[4/3] bg-sage">
            {farmTeamImg && (
              <img
                src={farmTeamImg.url}
                alt={farmTeamImg.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                width={700}
                height={525}
              />
            )}
          </div>
          <div>
            <Eyebrow className="mb-6">ABOUT US</Eyebrow>
            <h2
              id="about-teaser-heading"
              className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-5"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
            >
              The people behind the farm
            </h2>
            <p className="text-base text-stone leading-relaxed mb-6">
              Bachani Farms has been farming this land for 25 years. Today our 25-person team looks after 100 acres of orchards, tunnels and fields, and every crop is grown by people who know it well.
            </p>
            <Link href="/about" className="text-forest font-semibold hover:text-leaf transition-colors">
              Read Our Story →
            </Link>
            <div className="mt-10">
              <StatCounter
                stats={[
                  { value: '6', label: 'Main crops' },
                  { value: '[00]', label: 'Acres' },
                  { value: '[00]', label: 'Years of farming' },
                  { value: '[00]', label: 'Tunnels' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Sustainability teaser */}
      <section
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ backgroundColor: '#EEF3E6' }}
        aria-labelledby="sustainability-teaser-heading"
      >
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow className="mb-6">SUSTAINABILITY</Eyebrow>
            <h2
              id="sustainability-teaser-heading"
              className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-5"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
            >
              Farming that <em className="not-italic italic">lasts</em>
            </h2>
            <p className="text-base text-stone leading-relaxed mb-6">
              Careful water use, healthy soil and steady crop rotation keep our land productive year after year. We look after the land that looks after us.
            </p>
            <Link href="/farm/sustainability" className="text-forest font-semibold hover:text-leaf transition-colors">
              Our Sustainability Practices →
            </Link>
            <div className="mt-8 space-y-4">
              {[
                { icon: Droplets, text: '[Irrigation method] across 100 acres' },
                { icon: Sprout, text: 'Crop rotation on our open fields' },
                { icon: Handshake, text: 'Soil tested every [season]' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#DCE3D2' }}>
                      <Icon size={18} strokeWidth={1.5} style={{ color: '#0B5828' }} />
                    </div>
                    <span className="text-base text-ink">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-[32px] overflow-hidden aspect-[4/3] bg-sage mt-6 md:mt-0">
            {irrigationImg && (
              <img
                src={irrigationImg.url}
                alt={irrigationImg.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                width={700}
                height={525}
              />
            )}
          </div>
        </div>
      </section>

      {/* 11. Partners and trust — hidden until confirmed */}
      {/* TODO: Uncomment when real partners and certifications are confirmed
      <section className="py-20 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        ...
      </section>
      */}

      {/* 12. Latest News */}
      <section
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ backgroundColor: '#FBFAF5' }}
        aria-labelledby="news-heading"
      >
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2
              id="news-heading"
              className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em]"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
            >
              Latest from the <em className="not-italic italic">farm</em>
            </h2>
            <Link href="/news" className="text-forest font-semibold hover:text-leaf transition-colors text-sm hidden md:block">
              View All News →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.slice(0, 3).map(article => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href="/news" className="text-forest font-semibold hover:text-leaf transition-colors text-sm">
              View All News →
            </Link>
          </div>
        </div>
      </section>

      {/* 13. Gallery preview */}
      <section
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ backgroundColor: '#EEF3E6' }}
        aria-labelledby="gallery-preview-heading"
      >
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2
              id="gallery-preview-heading"
              className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em]"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
            >
              Life on the farm
            </h2>
            <Link href="/gallery" className="text-forest font-semibold hover:text-leaf transition-colors text-sm hidden md:block">
              View Gallery →
            </Link>
          </div>
          {/* 4-col × 2-row mosaic: large photo spans 2×2 left, four smalls fill right 2×2 */}
          <div
            className="gallery-mosaic"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'repeat(2, 220px)',
              gap: '16px',
            }}
          >
            <style>{`
              @media (min-width: 768px) {
                .gallery-mosaic {
                  grid-template-columns: repeat(4, 1fr) !important;
                  grid-template-rows: repeat(2, 280px) !important;
                }
                .gallery-mosaic .gmosaic-large {
                  grid-column: 1 / 3;
                  grid-row: 1 / 3;
                }
              }
              @media (max-width: 767px) {
                .gallery-mosaic .gmosaic-large {
                  grid-column: 1 / -1;
                }
              }
            `}</style>
            {[
              {
                src: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&h=600&fit=crop&auto=format',
                alt: 'Mango orchard at sunrise',
                caption: 'Mango orchard at sunrise',
                cls: 'gmosaic-large',
              },
              {
                src: 'https://images.unsplash.com/photo-1776285759652-8f0ebbad1619?w=400&h=280&fit=crop&auto=format',
                alt: 'Inside a growing tunnel',
                caption: 'Inside a growing tunnel',
                cls: '',
              },
              {
                src: 'https://images.unsplash.com/photo-1775619427924-16ff07cf2f2e?w=400&h=280&fit=crop&auto=format',
                alt: 'Sugarcane field in full growth',
                caption: 'Sugarcane in full growth',
                cls: '',
              },
              {
                src: 'https://images.unsplash.com/photo-1595024600400-2a49b9fce270?w=400&h=280&fit=crop&auto=format',
                alt: 'Wheat field under blue sky',
                caption: 'Wheat field at harvest',
                cls: '',
              },
              {
                src: 'https://images.unsplash.com/photo-1569959808474-debc539b72aa?w=400&h=280&fit=crop&auto=format',
                alt: 'Papaya trees with ripening fruit',
                caption: 'Papaya plantation',
                cls: '',
              },
            ].map((photo, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-[24px] bg-sage ${photo.cls}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  width={i === 0 ? 800 : 400}
                  height={i === 0 ? 600 : 280}
                />
                <div
                  className="absolute inset-x-0 bottom-0 px-4 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(6,47,23,0.85), transparent)' }}
                >
                  <p className="font-mono text-[11px] text-white uppercase tracking-[0.1em]">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ backgroundColor: '#EEF3E6' }}
        aria-labelledby="faq-heading"
      >
        <div className="max-w-[1320px] mx-auto">
          <div className="max-w-2xl mx-auto">
            <Eyebrow className="mb-6 justify-center">GOOD TO KNOW</Eyebrow>
            <h2
              id="faq-heading"
              className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-10 text-center"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
            >
              Common <em className="not-italic italic">questions</em>
            </h2>
            <div itemScope itemType="https://schema.org/FAQPage">
              <Accordion items={faqs.home} />
            </div>
          </div>
        </div>
      </section>

      {/* 15. Contact band — same green as footer so they join cleanly */}
      <section
        className="pt-24 md:pt-28 pb-16 md:pb-20 px-5 md:px-8 text-center"
        style={{ backgroundColor: '#062F17' }}
        aria-labelledby="contact-band-heading"
      >
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="contact-band-heading"
            className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-4"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FBFAF5' }}
          >
            Get in touch
          </h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'rgba(251,250,245,0.7)' }}>
            Have a question about the farm or our crops? We would be glad to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Button to="/contact" variant="light">Contact Us</Button>
            <Button href="https://wa.me/923000000000" variant="light">WhatsApp Us</Button>
          </div>
          <p className="font-mono text-sm" style={{ color: 'rgba(251,250,245,0.5)' }}>
            +92 300 0000000
          </p>
        </div>
      </section>
    </>
  );
}
