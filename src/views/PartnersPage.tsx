'use client';

import { CalendarCheck, Scale, Sprout, MessageCircle } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import { faqs } from '../data/faqs';
import { crops } from '../data/crops';

export default function PartnersPage() {
  return (
    <>

      {/* Page header */}
      <section className="pt-36 pb-16 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <Eyebrow className="mb-6">PARTNERS AND BUYERS</Eyebrow>
          <h1
            className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.02em] mb-6 leading-[0.98]"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A', maxWidth: '700px' }}
          >
            <em className="not-italic italic">Working</em> with Bachani Farms
          </h1>
          <p className="text-lg text-stone max-w-xl mb-8">
            We supply our harvest under contract to trusted buyers who take it on to markets in Pakistan and abroad. Here is how we work together.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button to="/contact" variant="primary">Contact Us</Button>
            <Button href="https://wa.me/923000000000" variant="secondary">WhatsApp Us</Button>
          </div>
        </div>
      </section>

      {/* What buyers can expect */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }} aria-labelledby="buyers-expect-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="buyers-expect-heading"
            className="font-display text-4xl font-semibold tracking-[-0.02em] mb-12"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            What buyers can expect
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CalendarCheck, title: 'Planned harvest windows.', body: 'You know when each crop is ready, because we plan around the season.' },
              { icon: Scale, title: 'Consistent grading.', body: 'Produce is checked and graded before it is packed.' },
              { icon: Sprout, title: 'Direct from the grower.', body: 'We grow what we supply, so you deal directly with the farm.' },
              { icon: MessageCircle, title: 'Clear communication.', body: 'A named contact and quick replies through every season.' },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="p-6 rounded-[24px] bg-white border" style={{ borderColor: '#DCE3D2' }}>
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

      {/* How supply works */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-labelledby="supply-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="supply-heading"
            className="font-display text-4xl font-semibold tracking-[-0.02em] mb-12"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            How we work together
          </h2>
          <div className="relative">
            <div
              className="absolute top-5 left-5 right-5 h-px hidden md:block"
              style={{ backgroundColor: '#CAA549', opacity: 0.4 }}
            />
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: 1, title: 'Introduction.', body: 'Tell us which crops you are interested in and when you need them.' },
                { num: 2, title: 'Planning.', body: 'We check our harvest windows and volumes against your needs.' },
                { num: 3, title: 'Agreement.', body: 'We agree the terms in a supply contract.' },
                { num: 4, title: 'Harvest and handover.', body: 'We harvest, sort and pack, and hand over the produce as agreed.' },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4 relative z-10"
                    style={{ backgroundColor: '#0B5828' }}
                  >
                    <span className="font-mono text-sm font-medium text-white">{step.num}</span>
                  </div>
                  <h3 className="font-body font-semibold text-base text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-stone leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Crops table */}
      <section className="py-16 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }}>
        <div className="max-w-[1320px] mx-auto">
          <h2
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-8"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Crops we supply
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] bg-white rounded-[20px] overflow-hidden border" style={{ borderColor: '#DCE3D2' }}>
              <thead>
                <tr style={{ backgroundColor: '#EEF3E6', borderBottom: '1px solid #DCE3D2' }}>
                  {['Crop', 'Season', 'Growing method', 'More'].map(h => (
                    <th key={h} className="text-left py-3 px-5 font-mono text-[10px] uppercase tracking-[0.12em] text-stone">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE3D2]">
                {crops.map(crop => (
                  <tr key={crop.slug} className="hover:bg-sage/50 transition-colors">
                    <td className="py-4 px-5 font-semibold text-sm text-ink">{crop.name}</td>
                    <td className="py-4 px-5 text-sm text-stone">{crop.harvestLabel}</td>
                    <td className="py-4 px-5 text-sm text-stone">{crop.method}</td>
                    <td className="py-4 px-5">
                      <a href={`/crops/${crop.slug}`} className="text-forest text-sm font-medium hover:text-leaf transition-colors">
                        {crop.name} →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Partners — hidden until confirmed */}
      {/* TODO: Uncomment when real partners and certifications are confirmed */}

      {/* Company profile — hidden until PDF exists */}
      {/* TODO: Uncomment when PDF exists */}

      {/* FAQ */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-labelledby="partners-faq-heading">
        <div className="max-w-[1320px] mx-auto max-w-2xl">
          <h2
            id="partners-faq-heading"
            className="font-display text-3xl font-semibold tracking-[-0.02em] mb-8"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A', maxWidth: '640px' }}
          >
            Common questions from buyers
          </h2>
          <div className="max-w-2xl" itemScope itemType="https://schema.org/FAQPage">
            <Accordion items={faqs.partners} />
          </div>
        </div>
      </section>

      {/* Closing band */}
      <section className="py-24 md:py-28 px-5 md:px-8 text-center" style={{ backgroundColor: '#062F17' }}>
        <div className="max-w-[1320px] mx-auto">
          <h2
            className="font-display text-4xl font-semibold tracking-[-0.02em] mb-6"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FBFAF5' }}
          >
            Let's talk about supply
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button to="/contact" variant="light">Contact Us</Button>
            <Button href="https://wa.me/923000000000" variant="light">WhatsApp Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
