'use client';

import Link from 'next/link';
import { Sprout, Wheat, Users, Handshake } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Button from '../components/Button';
import StatCounter from '../components/StatCounter';
import { images } from '../data/images';

export default function AboutPage() {
  const farmOwnerImg = images['farmOwner'];
  const orchardImg = images['orchard'];

  return (
    <>

      {/* Page header */}
      <section className="pt-36 pb-16 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <Eyebrow className="mb-6">ABOUT US</Eyebrow>
          <h1
            className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.02em] mb-6 leading-[0.98]"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A', maxWidth: '700px' }}
          >
            Our <em className="not-italic italic">story</em>
          </h1>
          <p className="text-lg text-stone max-w-xl mb-10">
            Bachani Farms is a farm in [District], Pakistan, built season by season on land we have cared for over [00] years.
          </p>
        </div>
      </section>

      {/* Hero photo */}
      <div className="px-4 md:px-8">
        <div className="max-w-[1320px] mx-auto rounded-[32px] overflow-hidden aspect-[16/7] bg-sage">
          {orchardImg && (
            <img
              src={orchardImg.url}
              alt={orchardImg.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              width={1320}
              height={577}
            />
          )}
        </div>
      </div>

      {/* Our Story — vertical timeline */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-labelledby="story-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="story-heading"
            className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-16"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Our story
          </h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px" style={{ backgroundColor: '#DCE3D2' }} />
            {[
              {
                year: '[Year]',
                title: 'How it began.',
                body: 'Bachani Farms started with a small orchard and a simple aim: to grow good fruit from good soil. Mango trees were planted, tended and waited for. That patience set the tone for everything that followed.',
                imageKey: 'mangoOrchard',
                side: 'left',
              },
              {
                year: '[Year]',
                title: 'Growing the farm.',
                body: 'Over the years we added banana, papaya, sugarcane and wheat, and planted more mango trees. Each new crop taught us something, and each one made the farm stronger and more balanced through the year.',
                imageKey: 'banana',
                side: 'right',
              },
              {
                year: 'Today',
                title: 'The farm now.',
                body: 'We farm [00] acres, including tunnels for winter cucumbers, with a team of [00] people. We supply our harvest under contract to trusted buyers, who take it on to markets in Pakistan and abroad.',
                imageKey: 'farmOverview',
                side: 'left',
              },
            ].map((chapter, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-8 mb-20 ${chapter.side === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 pr-8 md:pr-12">
                  <div
                    className="font-mono text-2xl font-medium mb-3"
                    style={{ color: '#5A4632' }}
                  >
                    {chapter.year}
                  </div>
                  <h3
                    className="font-display text-2xl font-semibold mb-3"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
                  >
                    {chapter.title}
                  </h3>
                  <p className="text-base text-stone leading-relaxed">{chapter.body}</p>
                </div>
                <div className="md:w-1/2 rounded-[24px] overflow-hidden aspect-[4/3] bg-sage">
                  {images[chapter.imageKey] && (
                    <img
                      src={images[chapter.imageKey].url}
                      alt={images[chapter.imageKey].alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={600}
                      height={450}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }} aria-labelledby="milestones-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="milestones-heading"
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-8"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Milestones
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {[
              { year: '[Year]', event: 'First mango orchard planted' },
              { year: '[Year]', event: 'Banana and papaya plantations added' },
              { year: '[Year]', event: 'Sugarcane and wheat brought into the rotation' },
              { year: '[Year]', event: 'First tunnels built for cucumbers' },
              { year: '[Year]', event: 'First long-term supply contracts signed' },
            ].map((m, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-start p-6 rounded-[20px] bg-white border"
                style={{ borderColor: '#DCE3D2', minWidth: '220px' }}
              >
                <div className="font-mono text-xl font-medium mb-2" style={{ color: '#5A4632' }}>{m.year}</div>
                <p className="text-sm text-stone">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from the Owner */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-labelledby="owner-message-heading">
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-[32px] overflow-hidden aspect-[3/4] bg-sage max-w-md">
            {farmOwnerImg && (
              <img
                src={farmOwnerImg.url}
                alt={farmOwnerImg.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                width={480}
                height={640}
              />
            )}
          </div>
          <div>
            <p className="text-base text-stone leading-relaxed mb-8">
              A farm is a promise kept across many seasons. We plant with care, harvest at the right time and stay in the field with our team, because good produce is decided long before it leaves the farm.
            </p>
            <div
              className="py-6 mb-6"
              style={{ borderTop: '2px solid #CAA549' }}
            >
              <blockquote
                id="owner-message-heading"
                className="font-display text-2xl md:text-3xl italic font-medium leading-[1.3]"
                style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
              >
                "Farming teaches patience. We look after the land, and the land looks after us."
              </blockquote>
            </div>
            <div>
              <p className="font-semibold text-ink">[Owner Name]</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone mt-1">
                Owner, Bachani Farms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }} aria-labelledby="mission-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="mission-heading"
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-10"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Mission and vision
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: 'MISSION',
                text: 'To grow honest, high-quality produce and supply it with the reliability that long-term buyers depend on.',
              },
              {
                label: 'VISION',
                text: 'To be a trusted name in Pakistani agriculture, known for the quality of our crops and the care we give our land and our people.',
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[24px] bg-white border" style={{ borderColor: '#DCE3D2' }}>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: '#7A5E16' }}>
                  {item.label}
                </div>
                <p
                  className="font-display text-xl font-medium leading-[1.4]"
                  style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-labelledby="values-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="values-heading"
            className="font-display text-4xl font-semibold tracking-[-0.02em] mb-10"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Our values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sprout, title: 'Care for the land.', body: 'We protect our soil and water for the next generation.' },
              { icon: Wheat, title: 'Quality at harvest.', body: 'Every crop is picked at the right time and handled with care.' },
              { icon: Users, title: 'Our people.', body: 'Our team is the heart of the farm, and we invest in the people who grow our crops.' },
              { icon: Handshake, title: 'Trusted partnerships.', body: 'We build long-term relationships with the buyers we supply.' },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-6 rounded-[24px] bg-white border" style={{ borderColor: '#DCE3D2' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#EEF3E6' }}>
                    <Icon size={20} strokeWidth={1.5} style={{ color: '#0B5828' }} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}>
                    {v.title}
                  </h3>
                  <p className="text-sm text-stone leading-relaxed">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team — hidden until confirmed */}
      {/* TODO: Unhide when team details are confirmed
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }}>
        <div className="max-w-[1320px] mx-auto">
          <h2>The people who run the farm</h2>
          ...portrait cards...
        </div>
      </section>
      */}

      {/* Numbers and closing */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }}>
        <div className="max-w-[1320px] mx-auto">
          <StatCounter
            stats={[
              { value: '6', label: 'Main crops' },
              { value: '[00]', label: 'Acres' },
              { value: '[00]', label: 'Years of farming' },
              { value: '[00]', label: 'People on the team' },
            ]}
          />
          <div className="mt-16 rounded-[24px] p-10 text-center" style={{ backgroundColor: '#EEF3E6', border: '1px solid #DCE3D2' }}>
            <h2
              className="font-display text-3xl font-semibold tracking-[-0.02em] mb-6"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
            >
              See what we grow
            </h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button to="/crops" variant="primary">Explore Our Crops</Button>
              <Button to="/contact" variant="secondary">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
