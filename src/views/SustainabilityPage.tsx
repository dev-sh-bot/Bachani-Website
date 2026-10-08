'use client';

import Eyebrow from '../components/Eyebrow';
import Button from '../components/Button';
import { images } from '../data/images';
import { farmStats } from '../data/site';

const pillars = [
  {
    label: 'WATER',
    title: 'Using every drop well.',
    body: 'We plan irrigation crop by crop and field by field, using canal water and tubewells [and drip irrigation on (crop)] so each crop gets what it needs and no more.',
    imageKey: 'irrigation',
  },
  {
    label: 'SOIL',
    title: 'Feeding the ground.',
    body: 'We rotate crops, add organic matter and test our soil [every (season)], because healthy soil grows healthy crops and holds water better.',
    imageKey: 'openField',
  },
  {
    label: 'CROP CARE',
    title: 'Acting early, acting carefully.',
    body: 'We watch our crops closely and deal with pests and disease early and only where needed, to protect the crop, the workers and the land.',
    imageKey: 'cucumberTunnel',
  },
  {
    label: 'PEOPLE',
    title: 'A farm that gives back.',
    body: `Our team of ${farmStats.teamMembers} people cares for the farm through the seasons, and we keep the workplace safe and fair.`,
    imageKey: 'farmTeam',
  },
];

export default function SustainabilityPage() {
  return (
    <>

      {/* Page header */}
      <section className="pt-36 pb-8 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <Eyebrow className="mb-6">SUSTAINABILITY</Eyebrow>
          <h1
            className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.02em] mb-6 leading-[0.98]"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A', maxWidth: '700px' }}
          >
            Farming that <em className="not-italic italic">lasts</em>
          </h1>
          <p className="text-lg text-stone max-w-xl mb-10">
            A farm only lasts if the land, the water and the people who work it are looked after. That is how we farm at Bachani Farms.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="px-4 md:px-8 pb-8">
        <div className="motion-card max-w-[1320px] mx-auto rounded-[32px] overflow-hidden aspect-[21/9] bg-sage">
          {images['irrigation'] && (
            <img
              src={images['irrigation'].url}
              alt={images['irrigation'].alt}
              className="card-media w-full h-full object-cover"
              loading="lazy"
              width={1320}
              height={566}
            />
          )}
        </div>
      </div>

      {/* Four pillars */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-labelledby="pillars-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2 id="pillars-heading" className="sr-only">Our sustainability pillars</h2>
          <div className="space-y-24">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
              >
                <div className={`motion-card rounded-[32px] overflow-hidden aspect-[4/3] bg-sage ${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  {images[pillar.imageKey] && (
                    <img
                      src={images[pillar.imageKey].url}
                      alt={images[pillar.imageKey].alt}
                      className="card-media w-full h-full object-cover"
                      loading="lazy"
                      width={700}
                      height={525}
                    />
                  )}
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: '#7A5E16' }}>
                    {pillar.label}
                  </div>
                  <h3
                    className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-5"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-base text-stone leading-relaxed">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      {/* Note: Replace with real figures or delete */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }} aria-labelledby="commitments-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="commitments-heading"
            className="font-display text-4xl font-semibold tracking-[-0.02em] mb-12"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            What we work towards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '[00]%', label: 'of our fruit area on [drip] irrigation' },
              { value: '[00]', label: 'acres in crop rotation each year' },
              { value: String(farmStats.teamMembers), label: 'people on our team' },
              { value: '[Goal]', label: 'Add your own sustainability goal here' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className="font-display text-5xl font-semibold mb-3"
                  style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#5A4632' }}
                >
                  {item.value}
                </div>
                <p className="text-sm text-stone leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research — hidden until confirmed */}
      {/* TODO: Uncomment when confirmed
      <section>
        <h2>Learning with others</h2>
        <p>[We work with (institution or advisor) to improve our soil, water use and crop health.]</p>
      </section>
      */}

      {/* Closing band */}
      <section className="py-20 px-5 md:px-8 text-center" style={{ backgroundColor: '#062F17' }}>
        <div className="max-w-[1320px] mx-auto">
          <h2
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-6"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FBFAF5' }}
          >
            See how we grow
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button to="/farm" variant="light">Our Farm</Button>
            <Button to="/crops" variant="light">Our Crops</Button>
          </div>
        </div>
      </section>
    </>
  );
}
