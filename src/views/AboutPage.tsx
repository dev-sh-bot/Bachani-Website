import Image from 'next/image';
import { farmStats } from '../data/site';
import { cropList } from '../data/crops';
import { farmingSummary } from '../data/farming';

const chapters = [
  {
    era: 'THE BEGINNING',
    title: 'How it began',
    body: `For ${farmStats.yearsOfFarming} years, our family has cared for this land in Sindh, learning its seasons and building a farm rooted in patience and good soil.`,
    image: '/images/about/farm-courtyard.webp',
    alt: 'Benches, gardens and softly lit pathways at the farm at sunset',
    side: 'right',
  },
  {
    era: 'OVER THE YEARS',
    title: 'Growing the farm',
    body: `The farm grew to include ${cropList}. Each crop brings its own rhythm to the land and the people who tend it.`,
    image: '/images/about/orchard-birds.webp',
    alt: 'A flock of birds above the orchard trees behind the farm entrance',
    side: 'left',
  },
  {
    era: 'THE PRESENT',
    title: 'Today',
    body: `Today, our team of ${farmStats.teamMembers} people cares for ${farmStats.acres} acres using three kinds of farming. ${farmingSummary} We keep growing with care for the soil, the harvest and the generations to come.`,
    image: '/images/about/farm-at-sunset.webp',
    alt: 'The farm courtyard, benches and illuminated pathways surrounded by fields at sunset',
    side: 'right',
  },
] as const;

export default function AboutPage() {
  return (
    <div className="bg-paper" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
      <section className="px-6 pb-7 pt-28 sm:px-10 sm:pb-8 md:pt-32 lg:px-12" aria-labelledby="about-title">
        <div className="mx-auto max-w-[1200px]">
          <h1 id="about-title" className="text-[clamp(2.25rem,6.5vw,4.5rem)] font-normal leading-[1.1] tracking-[-0.025em] text-ink">
            BACHANI FARMS
          </h1>
          <p className="mt-3 text-base italic leading-relaxed text-stone sm:text-lg md:text-xl">
            From Sindh soil, for the years still coming.
          </p>
        </div>
      </section>

      <figure className="relative aspect-[16/10] w-full overflow-hidden bg-sage sm:aspect-[18/7]">
        <Image
          src="/images/about/farm-at-sunset.webp"
          alt="Bachani Farms at sunset, with glowing lamps, courtyard benches and fields beyond"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_12%]"
        />
      </figure>

      <section className="px-5 pb-12 pt-8 text-center sm:pb-14 sm:pt-7 md:px-8 md:pb-16 md:pt-10" aria-label="Our belief">
        <blockquote className="mx-auto max-w-3xl text-[clamp(1.125rem,3vw,1.75rem)] italic leading-[1.7] text-ink">
          <p>Years will come and years will go,</p>
          <p>Leaving but tracks upon the moor,</p>
          <p>But the lineage of this land will grow,</p>
          <p>As long as the grain and seed are pure.</p>
        </blockquote>
      </section>

      <section className="px-6 pb-16 sm:px-10 sm:pb-20 lg:px-12 lg:pb-24" aria-labelledby="farm-grew-heading">
        <div className="mx-auto max-w-[1160px]">
          <h2 id="farm-grew-heading" className="mb-8 text-3xl font-normal leading-tight tracking-[-0.025em] text-ink sm:mb-9 md:mb-12 md:text-4xl">
            How the farm <em>grew</em>
          </h2>
          <div className="space-y-10 sm:space-y-8 md:space-y-12">
            {chapters.map(chapter => (
              <article key={chapter.era} className="grid items-center gap-5 sm:grid-cols-2 sm:gap-8 md:gap-12 lg:gap-20">
                <div className={`max-w-lg ${chapter.side === 'left' ? 'sm:order-2' : ''}`}>
                  <p className="mb-2 font-body text-[10px] font-medium tracking-[0.15em] text-gold-ink md:mb-3 md:text-[11px]">{chapter.era}</p>
                  <h3 className="mb-3 text-2xl font-normal leading-tight tracking-[-0.015em] text-ink md:text-3xl">{chapter.title}</h3>
                  <p className="text-sm leading-relaxed text-stone md:text-base md:leading-7">{chapter.body}</p>
                </div>
                <div className="motion-card relative aspect-[4/3] overflow-hidden rounded-[16px] bg-sage md:rounded-[20px]">
                  <Image
                    src={chapter.image}
                    alt={chapter.alt}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1279px) 50vw, 540px"
                    className="card-media object-cover object-top"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
