'use client';

import { Ruler, Palette, Bug, Droplet, ClipboardCheck, Tag } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import { faqs } from '../data/faqs';
import { images } from '../data/images';

const qualityChecks = [
  { icon: Ruler, title: 'Size and grade', body: 'Checked and sorted by size.' },
  { icon: Palette, title: 'Colour and ripeness', body: 'Assessed for the right stage of ripeness.' },
  { icon: Bug, title: 'Freedom from damage and pests', body: 'Any damaged or pest-affected produce is set aside.' },
  { icon: Droplet, title: 'Cleanliness', body: 'Produce is clean and free from soil and debris.' },
  { icon: ClipboardCheck, title: 'Records for every lot', body: 'We keep records of each picking by crop and block.' },
  { icon: Tag, title: 'Clear labelling', body: 'Packs are labelled clearly so buyers know what they have received.' },
];

const journeySteps = [
  {
    num: 1,
    title: 'Harvest planning.',
    body: 'Our team checks each block and plans picking by crop, maturity and buyer schedule, so produce is harvested at the right stage.',
  },
  {
    num: 2,
    title: 'Picking at the right stage.',
    body: 'Crops are picked when they are ready, by trained pickers, and handled gently from the first moment.',
  },
  {
    num: 3,
    title: 'Field handling.',
    body: 'Produce is moved quickly out of the sun and into shade, so freshness is protected from the start.',
  },
  {
    num: 4,
    title: 'Sorting and grading.',
    body: 'Each lot is checked and graded by size, colour and condition. Damaged or off-grade produce is set aside.',
  },
  {
    num: 5,
    title: 'Packing.',
    body: 'Produce is packed in clean [crates or cartons] suited to the crop, and labelled by [crop and lot].',
  },
  {
    num: 6,
    title: '[Cooling and storage].',
    body: 'Where needed, produce is cooled and stored before dispatch to help it stay fresh. (Hide this step if not available.)',
  },
  {
    num: 7,
    title: 'Handover and dispatch.',
    body: 'Under our contracts, buyers collect or receive the produce and take it on to markets in Pakistan and abroad.',
  },
];

const cropTable = [
  { crop: 'Mango', picked: '[By hand]', packed: '[Crates]', handover: '[Buyer collects]' },
  { crop: 'Banana', picked: '[By hand]', packed: '[Bunches/crates]', handover: '[Buyer collects]' },
  { crop: 'Papaya', picked: '[By hand]', packed: '[Crates]', handover: '[Buyer collects]' },
  { crop: 'Cucumber', picked: '[By hand]', packed: '[Crates]', handover: '[Buyer collects]' },
  { crop: 'Sugarcane', picked: '[Cut by hand/machine]', packed: '[Loaded loose]', handover: '[Delivered to mill]' },
  { crop: 'Wheat', picked: '[Harvested by machine]', packed: '[Bags/bulk]', handover: '[Buyer collects]' },
];

export default function QualityPage() {
  const harvestImg = images['harvest'];

  return (
    <>

      {/* Page header */}
      <section className="pt-36 pb-8 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <Eyebrow className="mb-6">QUALITY AND PACKING</Eyebrow>
          <h1
            className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.02em] mb-6 leading-[0.98]"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A', maxWidth: '700px' }}
          >
            From field to <em className="not-italic italic">buyer</em>
          </h1>
          <p className="text-lg text-stone max-w-xl mb-10">
            Good produce is made in the field and kept good by what happens next. Here is how we look after every harvest until it reaches our buyers.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="px-4 md:px-8 pb-8">
        <div className="motion-card max-w-[1320px] mx-auto rounded-[32px] overflow-hidden aspect-[21/9] bg-sage">
          {harvestImg && (
            <img
              src={harvestImg.url}
              alt={harvestImg.alt}
              className="card-media w-full h-full object-cover"
              loading="lazy"
              width={1320}
              height={566}
            />
          )}
        </div>
      </div>

      {/* The journey — vertical timeline */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-labelledby="journey-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="journey-heading"
            className="font-display text-4xl font-semibold tracking-[-0.02em] mb-16"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            The journey from field to buyer
          </h2>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px" style={{ backgroundColor: '#CAA549', opacity: 0.4 }} />
            <div className="space-y-12">
              {journeySteps.map((step, i) => (
                <div key={i} className="flex gap-8">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                    style={{ backgroundColor: '#062F17' }}
                  >
                    <span className="font-mono text-sm font-medium" style={{ color: '#CAA549' }}>{step.num}</span>
                  </div>
                  <div className="pt-1">
                    <h3
                      className="font-display text-xl font-semibold mb-2"
                      style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-base text-stone leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Crop handling table */}
      <section className="py-16 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }} aria-labelledby="table-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="table-heading"
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-8"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            How each crop is handled
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr style={{ borderBottom: '1px solid #DCE3D2' }}>
                  {['Crop', 'Picked', 'Packed as', 'Handover'].map(h => (
                    <th
                      key={h}
                      className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-[0.12em] text-stone"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE3D2]">
                {cropTable.map(row => (
                  <tr key={row.crop} className="hover:bg-white/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-sm text-ink">{row.crop}</td>
                    <td className="py-4 px-4 text-sm text-stone">{row.picked}</td>
                    <td className="py-4 px-4 text-sm text-stone">{row.packed}</td>
                    <td className="py-4 px-4 text-sm text-stone">{row.handover}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quality checks */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }} aria-labelledby="checks-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="checks-heading"
            className="font-display text-4xl font-semibold tracking-[-0.02em] mb-12"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            What we check
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityChecks.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="motion-card p-6 rounded-[24px] bg-white border" style={{ borderColor: '#DCE3D2' }}>
                  <Icon size={20} strokeWidth={1.5} className="card-icon mb-4" style={{ color: '#0B5828' }} />
                  <h3 className="font-body font-semibold text-base text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-stone">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Traceability — hidden until confirmed */}
      {/* TODO: Uncomment when traceability system is confirmed
      <section className="py-20 px-5 md:px-8" style={{ backgroundColor: '#062F17' }}>
        <div className="max-w-[1320px] mx-auto">
          <h2>Every lot has a home</h2>
          <p>[We record which block and which day every lot was picked, so we can trace it back to where it grew.]</p>
        </div>
      </section>
      */}

      {/* Certifications — hidden until confirmed */}
      {/* TODO: Only show real, current certifications
      <section>...</section>
      */}

      {/* FAQ */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-labelledby="quality-faq-heading">
          <div className="max-w-[1320px] mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              id="quality-faq-heading"
              className="font-display text-3xl font-semibold tracking-[-0.02em] mb-8 mx-auto"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
            >
              Common questions about quality
            </h2>
            <div itemScope itemType="https://schema.org/FAQPage" className="text-left">
              <Accordion items={faqs.quality} />
            </div>
          </div>
        </div>
      </section>

      {/* Closing band */}
      <section className="py-20 px-5 md:px-8 text-center" style={{ backgroundColor: '#062F17' }}>
        <div className="max-w-[1320px] mx-auto">
          <h2
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-6"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FBFAF5' }}
          >
            Looking for a reliable grower?
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button to="/contact" variant="light">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
