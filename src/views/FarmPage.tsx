'use client';

import Link from 'next/link';
import { Warehouse, Snowflake, Waves, Tent, Tractor, Home, Droplets, Sprout, ShieldCheck, HandHeart } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Button from '../components/Button';
import StatCounter from '../components/StatCounter';
import { images } from '../data/images';
import { crops } from '../data/crops';

const markerData = [
  { num: 1, label: 'Mango orchard', desc: 'Rows of mango trees, the oldest part of the farm.' },
  { num: 2, label: 'Banana and papaya plantation', desc: 'Banana and papaya grown side by side in sheltered rows.' },
  { num: 3, label: 'Farmhouse and store', desc: 'The farmhouse, stores and space for sorting the harvest.' },
  { num: 4, label: 'Cucumber tunnels', desc: 'Tunnels where cucumbers grow through the winter.' },
  { num: 5, label: 'Sugarcane fields', desc: 'Open fields of sugarcane grown for the crushing season.' },
  { num: 6, label: 'Wheat fields', desc: 'Wheat fields sown in winter and harvested in spring.' },
  { num: 7, label: 'Water and irrigation', desc: 'Canals and tubewells that water every part of the farm.' },
];

const facilityCards = [
  { icon: Warehouse, title: 'Sorting and packing area.', body: 'A clean, covered space where produce is sorted, graded and packed.' },
  { icon: Snowflake, title: '[Cold storage].', body: 'Cooling helps protect freshness before dispatch. (Hide this card if not available.)' },
  { icon: Waves, title: 'Tubewells and canals.', body: 'A reliable water supply for every part of the farm.' },
  { icon: Tent, title: 'Tunnels.', body: '[00] tunnels for winter cucumber growing.' },
  { icon: Tractor, title: 'Machinery and equipment.', body: '[List, e.g. tractors, sprayers, trailers] for planting, care and harvest.' },
  { icon: Home, title: 'Farmhouse and staff quarters.', body: 'A base for our team through the seasons.' },
];

const practiceItems = [
  { icon: Droplets, title: 'Water and irrigation.', body: 'We plan every watering to use water wisely through the season.' },
  { icon: Sprout, title: 'Soil health.', body: 'Healthy soil grows healthy crops, so we rotate fields and add organic matter.' },
  { icon: ShieldCheck, title: 'Crop protection.', body: 'We watch our crops closely and act early to protect them.' },
  { icon: HandHeart, title: 'Harvest and handling.', body: 'Produce is picked at the right time and handled with care.' },
];

export default function FarmPage() {
  return (
    <>

      {/* Page header */}
      <section className="pt-36 pb-16 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <Eyebrow className="mb-6">OUR FARM</Eyebrow>
          <h1
            className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.02em] mb-6 leading-[0.98]"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A', maxWidth: '700px' }}
          >
            How the farm works
          </h1>
          <p className="text-lg text-stone max-w-xl mb-12">
            From orchards and plantations to tunnels and open fields, here is how we grow across 100 acres.
          </p>
          <StatCounter
            stats={[
              { value: '100', label: 'Acres' },
              { value: '6', label: 'Main crops' },
              { value: '[00]', label: 'Tunnels' },
              { value: '[00]', label: 'Tubewells' },
            ]}
          />
        </div>
      </section>

      {/* Farm map — illustrated */}
      {/* Note: This illustration will later be replaced with a real drone or satellite map */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }} aria-labelledby="map-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="map-heading"
            className="font-display text-4xl font-semibold tracking-[-0.02em] mb-12"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Around the farm
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Illustrated map placeholder */}
            <div
              className="md:col-span-2 rounded-[32px] overflow-hidden aspect-video relative"
              style={{ backgroundColor: '#FBFAF5', border: '1px solid #DCE3D2' }}
            >
              <svg viewBox="0 0 800 500" className="w-full h-full" aria-label="Illustrative farm layout map">
                {/* Background */}
                <rect width="800" height="500" fill="#FBFAF5" />
                {/* Orchard area */}
                <g opacity="0.7">
                  {[...Array(5)].map((_, r) =>
                    [...Array(6)].map((_, c) => (
                      <circle key={`o-${r}-${c}`} cx={60 + c * 30} cy={60 + r * 30} r={10} fill="#EFA43A" opacity={0.5} />
                    ))
                  )}
                </g>
                <text x="80" y="220" fontSize="11" fill="#7A5E16" fontFamily="monospace">① Mango Orchard</text>

                {/* Plantation */}
                {[...Array(4)].map((_, r) =>
                  [...Array(4)].map((_, c) => (
                    <rect key={`p-${r}-${c}`} x={240 + c * 22} y={60 + r * 28} width={16} height={22} fill="#E6C23E" opacity={0.5} rx="2" />
                  ))
                )}
                <text x="248" y="200" fontSize="11" fill="#7A5E16" fontFamily="monospace">② Plantation</text>

                {/* Tunnels */}
                {[...Array(4)].map((_, i) => (
                  <rect key={`t-${i}`} x={420} y={60 + i * 36} width={100} height={26} fill="#3E8E3E" opacity={0.4} rx="13" />
                ))}
                <text x="430" y="220" fontSize="11" fill="#7A5E16" fontFamily="monospace">④ Tunnels</text>

                {/* Sugarcane */}
                {[...Array(5)].map((_, c) => (
                  <rect key={`s-${c}`} x={60 + c * 40} y={280} width={8} height={100} fill="#86B347" opacity={0.6} />
                ))}
                <text x="70" y="400" fontSize="11" fill="#7A5E16" fontFamily="monospace">⑤ Sugarcane</text>

                {/* Wheat */}
                {[...Array(8)].map((_, c) => (
                  <rect key={`w-${c}`} x={260 + c * 35} y={280} width={25} height={100} fill="#CFA64C" opacity={0.4} />
                ))}
                <text x="280" y="400" fontSize="11" fill="#7A5E16" fontFamily="monospace">⑥ Wheat fields</text>

                {/* Irrigation line */}
                <path d="M0,250 Q200,230 400,250 T800,240" stroke="#64B5F6" strokeWidth="4" fill="none" opacity={0.5} />
                <text x="600" y="248" fontSize="11" fill="#7A5E16" fontFamily="monospace">⑦ Irrigation</text>

                {/* Farmhouse */}
                <rect x="580" y="280" width="80" height="60" fill="#5A4632" opacity={0.3} rx="8" />
                <text x="590" y="360" fontSize="11" fill="#7A5E16" fontFamily="monospace">③ Farmhouse</text>
              </svg>
            </div>

            {/* Marker list */}
            <div className="space-y-3">
              {markerData.map(m => (
                <button
                  key={m.num}
                  type="button"
                  className="w-full text-left p-4 rounded-[16px] bg-white border transition-colors hover:border-forest group"
                  style={{ borderColor: '#DCE3D2' }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-mono font-medium"
                      style={{ backgroundColor: '#0B5828', color: '#FBFAF5' }}
                    >
                      {m.num}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-ink mb-1">{m.label}</div>
                      <div className="text-xs text-stone">{m.desc}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growing methods */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-labelledby="methods-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="methods-heading"
            className="font-display text-4xl font-semibold tracking-[-0.02em] mb-12"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Growing methods
          </h2>
          <div className="space-y-8">
            {[
              {
                title: 'Orchards and plantations.',
                body: 'Mango, banana and papaya grow in long, open rows that we tend all year. Regular pruning, feeding and watering keep every tree and plant healthy.',
                imageKey: 'orchard',
                links: ['mango', 'banana', 'papaya'],
              },
              {
                title: 'Tunnel farming.',
                body: 'Tunnels protect our cucumbers through the cooler months, letting us grow a fresh crop when open fields cannot.',
                imageKey: 'cucumberTunnel',
                links: ['cucumber'],
              },
              {
                title: 'Open fields.',
                body: 'Sugarcane and wheat follow the seasons in our open fields, planted and harvested in step with the year.',
                imageKey: 'openField',
                links: ['sugarcane', 'wheat'],
              },
            ].map((method, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
              >
                <div className={`rounded-[32px] overflow-hidden aspect-[4/3] bg-sage ${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  {images[method.imageKey] && (
                    <img
                      src={images[method.imageKey].url}
                      alt={images[method.imageKey].alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={700}
                      height={525}
                    />
                  )}
                </div>
                <div className="p-8 rounded-[24px] bg-white border" style={{ borderColor: '#DCE3D2' }}>
                  <h3
                    className="font-display text-2xl font-semibold mb-4"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
                  >
                    {method.title}
                  </h3>
                  <p className="text-base text-stone leading-relaxed mb-6">{method.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {method.links.map(slug => {
                      const crop = crops.find(c => c.slug === slug);
                      return crop ? (
                        <Link
                          key={slug}
                          href={`/crops/${slug}`}
                          className="px-3 py-1 rounded-full text-sm font-medium hover:bg-sage transition-colors"
                          style={{ color: '#0B5828', border: '1px solid #DCE3D2' }}
                        >
                          {crop.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#EEF3E6' }} aria-labelledby="facilities-heading">
        <div className="max-w-[1320px] mx-auto">
          <Eyebrow className="mb-6">ON THE FARM</Eyebrow>
          <h2
            id="facilities-heading"
            className="font-display text-4xl font-semibold tracking-[-0.02em] mb-12"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            What keeps the farm <em className="not-italic italic">running</em>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityCards.map((card, i) => {
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

      {/* Practices */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }} aria-labelledby="practices-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2
            id="practices-heading"
            className="font-display text-4xl font-semibold tracking-[-0.02em] mb-12"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Good farming, every season
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceItems.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#EEF3E6' }}>
                    <Icon size={20} strokeWidth={1.5} style={{ color: '#0B5828' }} />
                  </div>
                  <h3 className="font-body font-semibold text-base text-ink mb-2">{p.title}</h3>
                  <p className="text-sm text-stone leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team band */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ backgroundColor: '#062F17' }}>
        <div className="max-w-[1320px] mx-auto">
          <div className="rounded-[32px] overflow-hidden aspect-[21/9] bg-forest mb-12">
            {images['farmTeamWork'] && (
              <img
                src={images['farmTeamWork'].url}
                alt={images['farmTeamWork'].alt}
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
                width={1320}
                height={566}
              />
            )}
          </div>
          <h2
            className="font-display text-4xl font-semibold tracking-[-0.02em] mb-4"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FBFAF5' }}
          >
            A farm is its people
          </h2>
          <p className="text-base mb-8 max-w-xl" style={{ color: 'rgba(251,250,245,0.7)' }}>
            Behind every harvest is a team that works in the orchard, the tunnels and the fields through every season. We are proud of the people who grow our crops.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button to="/farm/quality" variant="light">Quality and Packing</Button>
            <Button to="/farm/sustainability" variant="light">Sustainability</Button>
          </div>
        </div>
      </section>
    </>
  );
}
