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

      <section
        id="farm-owner"
        className="px-6 pb-16 sm:px-10 sm:pb-20 lg:px-12 lg:pb-24"
        aria-labelledby="owner-name"
      >
        <div className="mx-auto grid max-w-[1200px] items-center gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-12 lg:gap-24 xl:gap-40">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[460px] overflow-hidden rounded-[24px] bg-sage md:mx-0 md:rounded-[32px]">
            {/* Portrait supplied by the user for the owner section. */}
            <Image
              src="/images/about/owner-portrait.jpg"
              alt="Male portrait supplied for the Bachani Farms owner section"
              fill
              sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 767px) 460px, (max-width: 1279px) 40vw, 450px"
              className="object-cover object-center"
            />
          </div>

          <div>
            <p className="font-body text-base leading-7 text-stone lg:text-lg lg:leading-7">
              A farm is a promise kept across many seasons. We plant with care, harvest at the right
              time and stay in the field with our team, because good produce is decided long before
              it leaves the farm.
            </p>
            <figure className="mt-7 border-t border-gold pt-6 md:mt-8 md:pt-7">
              <blockquote className="text-[clamp(1.625rem,2.5vw,2.25rem)] italic leading-[1.3] tracking-[-0.01em] text-ink">
                <p>
                  &ldquo;Farming teaches patience. We look after the land, and the land looks after us.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-8 md:mt-10 lg:mt-12">
                <h2 id="owner-name" className="font-body text-base font-semibold leading-6 text-ink">
                  Ghulam Nabi Bachani
                </h2>
                <p className="mt-1 font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-stone sm:text-[11px]">
                  Owner, Bachani Farms
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
