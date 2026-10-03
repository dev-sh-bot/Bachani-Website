'use client';

import Link from 'next/link';
import { CheckCircle2, Scale, PackageCheck } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import HarvestAlmanac from '../components/HarvestAlmanac';
import { crops, getCropBySlug } from '../data/crops';
import { images } from '../data/images';
import NotFoundPage from './NotFoundPage';

const MONTHS_FULL = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export default function CropPage({ slug }: { slug: string }) {
  const crop = getCropBySlug(slug);

  if (!crop) return <NotFoundPage />;

  const img = images[crop.imageKey];
  const img2 = images[`${crop.slug}Harvest`] || img;
  const img3 = images[`${crop.slug}Trees` || `${crop.slug}Tunnel`] || img;

  const qualityIcons = [CheckCircle2, Scale, PackageCheck];
  const relatedCrops = crops.filter(c => crop.related.includes(c.slug)).slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <nav className="pt-28 pb-0 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-label="Breadcrumb">
        <div className="max-w-[1320px] mx-auto">
          <ol className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone">
            <li><Link href="/" className="hover:text-forest transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/crops" className="hover:text-forest transition-colors">Our Crops</Link></li>
            <li aria-hidden="true">/</li>
            <li style={{ color: '#16211A' }}>{crop.name}</li>
          </ol>
        </div>
      </nav>

      {/* Split header */}
      <section className="py-16 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {crop.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.12em]"
                  style={{ backgroundColor: '#EEF3E6', color: '#7A5E16' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="font-display font-semibold tracking-[-0.02em] mb-5 leading-[0.98]"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                color: '#16211A',
                fontSize: 'clamp(4rem,8vw,6rem)',
              }}
            >
              {crop.h1}
            </h1>
            <p className="text-lg text-stone leading-relaxed">{crop.headerText}</p>
          </div>
          <div className="rounded-[32px] overflow-hidden aspect-[4/5] bg-sage">
            {img && (
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="eager"
                width={700}
                height={875}
              />
            )}
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="px-5 md:px-8 pb-16" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x rounded-[20px] overflow-hidden border"
            style={{ borderColor: '#DCE3D2' }}
          >
            {[
              { label: 'Growing method', value: crop.method },
              { label: 'Harvest season', value: crop.harvestLabel },
              { label: 'Area', value: crop.area },
              { label: 'Varieties', value: crop.varieties.map(v => v.name).join(', ') },
              { label: 'Supplied to', value: 'Contract buyers' },
              { label: 'Available', value: crop.harvestMonths.length >= 10 ? 'Year-round' : 'Seasonal' },
            ].map((fact, i) => (
              <div key={i} className="p-4 md:p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone mb-1">{fact.label}</div>
                <div className="text-sm font-medium text-ink">{fact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About this crop */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }} aria-labelledby="about-crop-heading">
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow className="mb-6">ABOUT THIS CROP</Eyebrow>
            <h2
              id="about-crop-heading"
              className="font-display text-3xl font-semibold tracking-[-0.02em] mb-6"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
            >
              About {crop.name} at Bachani Farms
            </h2>
            <div className="space-y-4">
              {crop.aboutParagraphs.map((p, i) => (
                <p key={i} className="text-base text-stone leading-relaxed max-w-[68ch]">{p}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] overflow-hidden aspect-[4/3] bg-sage">
            {img2 && (
              <img src={img2.url} alt={img2.alt} className="w-full h-full object-cover" loading="lazy" width={700} height={525} />
            )}
          </div>
        </div>
      </section>

      {/* Varieties */}
      {crop.varieties.length > 0 && (
        <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-labelledby="varieties-heading">
          <div className="max-w-[1320px] mx-auto">
            <h2
              id="varieties-heading"
              className="font-display text-3xl font-semibold tracking-[-0.02em] mb-10"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
            >
              Varieties we grow
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {crop.varieties.map((v, i) => (
                <div key={i} className="p-6 rounded-[24px] bg-white border" style={{ borderColor: '#DCE3D2' }}>
                  <div className="aspect-[4/3] rounded-[16px] overflow-hidden bg-sage mb-4">
                    {img && (
                      <img src={img.url} alt={`${v.name} variety`} className="w-full h-full object-cover" loading="lazy" width={400} height={300} />
                    )}
                  </div>
                  <h3
                    className="font-display text-xl font-semibold mb-2"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
                  >
                    {v.name}
                  </h3>
                  <p className="text-sm text-stone mb-3">{v.description}</p>
                  <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone">{v.harvestNote}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How we grow it */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }} aria-labelledby="how-grow-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="how-grow-heading"
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-10"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            {crop.growingHeading}
          </h2>
          <div className="relative">
            <div
              className="absolute top-5 left-5 right-5 h-px hidden md:block"
              style={{ background: 'linear-gradient(to right, #CAA549, #CAA549)', opacity: 0.4 }}
            />
            <div className="grid md:grid-cols-4 gap-8">
              {crop.steps.map((step, i) => (
                <div key={i} className="relative">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4 relative z-10"
                    style={{ backgroundColor: '#0B5828' }}
                  >
                    <span className="font-mono text-sm font-medium text-white">{i + 1}</span>
                  </div>
                  <h3 className="font-body font-semibold text-base text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-stone leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality — forest-deep */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#062F17' }} aria-labelledby="quality-heading">
        <div className="max-w-[1320px] mx-auto">
          <Eyebrow dark className="mb-6">QUALITY</Eyebrow>
          <h2
            id="quality-heading"
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-12"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FBFAF5' }}
          >
            Handled with care
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {crop.quality.map((q, i) => {
              const Icon = qualityIcons[i];
              return (
                <div key={i}>
                  <Icon size={24} strokeWidth={1.5} className="mb-4" style={{ color: '#CAA549' }} />
                  <h3 className="font-body font-semibold text-base mb-2" style={{ color: '#FBFAF5' }}>{q.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(251,250,245,0.7)' }}>{q.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Harvest window */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <h2
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-8"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Harvest window
          </h2>
          <HarvestAlmanac singleSlug={crop.slug} />
        </div>
      </section>

      {/* Photos */}
      <section className="py-16 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }}>
        <div className="max-w-[1320px] mx-auto grid grid-cols-3 gap-4">
          {crop.photoCaptions.map((caption, i) => {
            const photoImg = i === 0 ? img : i === 1 ? img2 : img3;
            return (
              <figure key={i} className="rounded-[24px] overflow-hidden bg-sage">
                <div className="aspect-[4/3]">
                  {photoImg && (
                    <img
                      src={photoImg.url}
                      alt={caption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={400}
                      height={300}
                    />
                  )}
                </div>
                <figcaption className="font-mono text-[10px] uppercase tracking-[0.1em] text-stone p-4">
                  {caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-labelledby="crop-faq-heading">
        <div className="max-w-[1320px] mx-auto max-w-2xl">
          <h2
            id="crop-faq-heading"
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-8"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A', maxWidth: '640px' }}
          >
            Common questions about {crop.name}
          </h2>
          <div className="max-w-2xl" itemScope itemType="https://schema.org/FAQPage">
            <Accordion items={crop.faqs} />
          </div>
        </div>
      </section>

      {/* Related crops */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }}>
        <div className="max-w-[1320px] mx-auto">
          <h2
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-10"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Explore other crops
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {relatedCrops.map(c => {
              const rImg = images[c.imageKey];
              return (
                <Link
                  key={c.slug}
                  href={`/crops/${c.slug}`}
                  className="group rounded-[20px] overflow-hidden bg-sage aspect-[4/5] relative block"
                >
                  {rImg && (
                    <img
                      src={rImg.url}
                      alt={rImg.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                      width={300}
                      height={375}
                    />
                  )}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(6,47,23,0.7) 0%, transparent 50%)' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 font-display text-lg font-semibold"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FBFAF5' }}
                  >
                    {c.name}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/crops"
              className="text-forest font-semibold hover:text-leaf transition-colors"
            >
              ← Back to Our Crops
            </Link>
          </div>
        </div>
      </section>

      {/* Contact band */}
      <section className="py-20 px-5 md:px-8 text-center" style={{ backgroundColor: '#062F17' }}>
        <div className="max-w-[1320px] mx-auto">
          <h2
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-6"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FBFAF5' }}
          >
            Interested in supply from Bachani Farms?
          </h2>
          <Button to="/contact" variant="light">Contact Us</Button>
        </div>
      </section>
    </>
  );
}
