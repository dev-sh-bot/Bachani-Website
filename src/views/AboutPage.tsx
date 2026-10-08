import { images } from '../data/images';

const chapters = [
  {
    era: 'THE BEGINNING',
    title: 'How it began',
    body: 'For 25 years, our family has cared for this land in Sindh, learning its seasons and building a farm rooted in patience and good soil.',
    image: 'mangoOrchard',
    side: 'right',
  },
  {
    era: 'OVER THE YEARS',
    title: 'Growing the farm',
    body: 'The farm grew to include mango, banana, papaya, cucumber, sugarcane and wheat. Each crop brings its own rhythm to the land and the people who tend it.',
    image: 'banana',
    side: 'left',
  },
  {
    era: 'TODAY',
    title: 'A farm for the future',
    body: 'Today, 25 people care for 100 acres of orchards, tunnels and fields. We keep growing with care for the soil, the harvest and the generations to come.',
    image: 'farmOverview',
    side: 'right',
  },
] as const;

export default function AboutPage() {
  const hero = images.farmOverview;

  return (
    <div style={{ backgroundColor: '#FBFAF5' }}>
      <section className="pt-32 md:pt-36 pb-8 px-6 md:px-12" aria-labelledby="about-title">
        <div className="max-w-[1320px] mx-auto">
          <p className="font-display text-4xl md:text-6xl uppercase tracking-[0.015em] leading-none mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1D211B' }}>
            Bachani Farms
          </p>
          <h1 id="about-title" className="font-display text-base md:text-lg italic" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#6B6D63' }}>
            From Sindh soil, for the years still coming.
          </h1>
        </div>
      </section>

      <div className="w-full h-[250px] md:h-[440px] overflow-hidden bg-sage">
        <img src={hero.url} alt="The landscape and fields of Bachani Farms" className="w-full h-full object-cover" fetchPriority="high" width={1920} height={900} />
      </div>

      <section className="px-6 py-12 md:py-16 text-center" aria-label="Our belief">
        <blockquote className="max-w-3xl mx-auto font-display text-xl md:text-3xl italic leading-relaxed" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#302F27' }}>
          Years will come and years will go,<br />
          Leaving but tracks upon the moor,<br />
          But the lineage of this land will grow,<br />
          As long as the grain and seed are pure.
        </blockquote>
      </section>

      <section className="px-6 md:px-12 pt-8 pb-20 md:pb-28" aria-labelledby="farm-grew-heading">
        <div className="max-w-[1320px] mx-auto">
          <h2 id="farm-grew-heading" className="font-display text-3xl md:text-4xl font-semibold mb-12 md:mb-16" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#22251F' }}>
            How the farm grew
          </h2>
          <div className="space-y-12 md:space-y-16">
            {chapters.map(chapter => {
              const image = images[chapter.image];
              return (
                <article key={chapter.era} className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${chapter.side === 'left' ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="max-w-lg">
                    <p className="font-mono text-[10px] md:text-xs tracking-[0.16em] mb-3" style={{ color: '#8A7745' }}>{chapter.era}</p>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#22251F' }}>{chapter.title}</h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: '#62665D' }}>{chapter.body}</p>
                  </div>
                  <div className="overflow-hidden rounded-[20px] md:rounded-[24px] aspect-[4/3] bg-sage">
                    <img src={image.url} alt={image.alt} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
