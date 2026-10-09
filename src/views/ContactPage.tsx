'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Check, Handshake, MapPin, MessageCircle, Sprout } from 'lucide-react';
import Button from '../components/Button';
import Eyebrow from '../components/Eyebrow';
import { farmStats, site } from '../data/site';

const enquiryTopics = ['Crop availability', 'Contract supply', 'General enquiry'] as const;
const initialForm = { name: '', email: '', topic: String(enquiryTopics[0]), message: '', honeypot: '' };
const fieldClassName = 'block w-full rounded-[14px] border bg-paper px-4 text-base text-ink transition-[border-color,box-shadow] placeholder:text-stone/60 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15 sm:text-sm';

const enquiryDetails = [
  { icon: Sprout, title: 'Crop availability', description: 'Harvest seasons and what we grow.' },
  { icon: Handshake, title: 'Contract supply', description: 'Requirements, quantities and timing.' },
  { icon: MessageCircle, title: 'General enquiries', description: 'Farm visits, questions and conversations.' },
];

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: '' }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.honeypot) return;

    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.';

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    // TODO: Connect to a real email or form service.
    console.log('Form submission:', form);
    setSubmitted(true);
  };

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;
  const directionsUrl = `https://maps.google.com/?q=${encodeURIComponent(site.address)}`;

  return (
    <div className="bg-paper">
      <section className="px-5 pb-10 pt-28 sm:pb-14 md:px-8 md:pt-36 lg:pb-16" aria-labelledby="contact-title">
        <div className="mx-auto grid max-w-[1200px] items-center gap-9 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow className="mb-5 md:mb-7">CONTACT BACHANI FARMS</Eyebrow>
            <h1 id="contact-title" className="font-display text-[clamp(3.25rem,7vw,6.25rem)] font-medium leading-[0.98] tracking-[-0.04em] text-ink">
              Let’s talk<br />
              <em className="font-normal text-forest">harvest.</em>
            </h1>
            <p className="mt-6 max-w-[440px] text-[15px] leading-7 text-stone md:mt-7 md:text-base">
              Have a question about our crops, a supply enquiry or a visit in mind? We’d love to hear from you.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 md:mt-8">
              <a
                href="#contact-form"
                className="inline-flex min-h-[52px] items-center gap-5 rounded-full bg-forest px-6 text-sm font-semibold text-paper transition-colors hover:bg-leaf focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
              >
                Send an enquiry
                <ArrowDownRight size={18} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href="#visit-farm"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-forest underline decoration-line underline-offset-4 transition-colors hover:text-leaf focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
              >
                Find the farm
                <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure className="motion-card relative overflow-hidden rounded-[24px] bg-forest-deep sm:rounded-[32px] lg:rounded-tr-[100px]" data-card-motion="soft">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[6/5]">
              <Image
                src="/images/about/farm-courtyard.webp"
                alt="The Bachani Farms courtyard at sunset, with garden benches and fields beyond"
                fill
                priority
                sizes="(max-width: 1023px) calc(100vw - 40px), 568px"
                className="card-media object-cover object-[50%_45%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-paper/25 bg-forest-deep/30 px-3 py-2 backdrop-blur-sm sm:left-7 sm:top-7">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-paper">A FAMILY FARM IN PAKISTAN</span>
              </div>
              <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-gold">FROM OUR FIELDS</p>
                  <p className="font-display text-3xl font-medium leading-[1.12] tracking-[-0.02em] text-paper sm:text-4xl">
                    Grown with care.<br />Shared with you.
                  </p>
                </div>
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paper/35 text-paper sm:flex" aria-hidden="true">
                  <Sprout size={24} strokeWidth={1.2} />
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section className="px-5 md:px-8" aria-labelledby="contact-form">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[28px] border border-line bg-white shadow-[0_16px_48px_-32px_rgba(6,47,23,0.25)] lg:grid-cols-[0.8fr_1.2fr] lg:rounded-[32px]">
          <aside className="relative flex flex-col overflow-hidden bg-forest-deep p-6 text-paper sm:p-8 lg:p-10 xl:p-12">
            <Sprout className="pointer-events-none absolute -bottom-10 -right-8 h-60 w-60 rotate-[-20deg] text-paper/[0.04]" strokeWidth={0.7} aria-hidden="true" />
            <div className="relative">
              <Eyebrow dark className="mb-5">LET’S CONNECT</Eyebrow>
              <h2 className="max-w-xs font-display text-3xl font-medium leading-[1.12] tracking-[-0.025em] sm:text-4xl">
                A direct line<br className="hidden lg:block" /> to the farm.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-paper/70">
                From the first question to the next harvest, a good conversation is where we begin.
              </p>
            </div>

            <div className="relative mt-8 hidden border-t border-paper/15 pt-2 lg:block">
              {enquiryDetails.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4 border-b border-paper/15 py-5">
                  <Icon size={22} strokeWidth={1.3} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-medium text-paper">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-paper/60">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-auto hidden pt-9 lg:block">
              <p className="max-w-xs text-xs leading-6 text-paper/60">
                Six crops. {farmStats.acres} acres. A family commitment to the land and the people we work with.
              </p>
              <Link
                href="/crops"
                className="mt-4 inline-flex min-h-10 items-center gap-3 rounded-sm text-sm font-medium text-gold transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Discover what we grow
                <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          </aside>

          <div className="min-w-0 p-6 sm:p-8 lg:p-10 xl:p-12">
            {submitted ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center" role="status" aria-live="polite">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage text-forest">
                  <Check size={28} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-gold-ink">THANK YOU FOR REACHING OUT</p>
                <h2 id="contact-form" className="scroll-mt-28 font-display text-4xl font-medium tracking-[-0.025em] text-ink">Thank you.</h2>
                <p className="mt-4 text-sm leading-7 text-stone">Your message has been received.</p>
                <Button
                  variant="secondary"
                  className="mt-7"
                  onClick={() => { setForm(initialForm); setErrors({}); setSubmitted(false); }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 id="contact-form" className="scroll-mt-28 font-display text-3xl font-medium tracking-[-0.025em] text-ink sm:text-4xl">How can we help?</h2>
                    <p className="mt-2 text-sm leading-6 text-stone">Tell us a little about what you have in mind.</p>
                  </div>
                  <p className="text-[11px] text-stone"><span className="text-gold-ink">*</span> Required fields</p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <input
                    type="text"
                    name="website"
                    value={form.honeypot}
                    onChange={event => updateField('honeypot', event.target.value)}
                    className="sr-only"
                    tabIndex={-1}
                    aria-hidden="true"
                    autoComplete="off"
                  />

                  <fieldset className="mb-7">
                    <legend className="mb-3 text-sm font-medium text-ink">I’m interested in</legend>
                    <div className="flex flex-wrap gap-2">
                      {enquiryTopics.map(topic => (
                        <label key={topic} className="relative cursor-pointer">
                          <input
                            type="radio"
                            name="topic"
                            value={topic}
                            checked={form.topic === topic}
                            onChange={event => updateField('topic', event.target.value)}
                            className="peer sr-only"
                          />
                          <span className="inline-flex min-h-11 items-center rounded-full border border-line px-4 py-2 text-xs font-medium text-stone transition-colors hover:border-forest/40 peer-checked:border-forest peer-checked:bg-sage peer-checked:text-forest peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-forest">
                            {topic}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">Full name <span className="text-gold-ink" aria-hidden="true">*</span></label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={event => updateField('name', event.target.value)}
                        placeholder="Your full name"
                        className={`${fieldClassName} h-[52px] ${errors.name ? 'border-red-600' : 'border-line'}`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && <p id="name-error" role="alert" className="mt-2 text-xs text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">Email <span className="text-xs font-normal text-stone">(optional)</span></label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={event => updateField('email', event.target.value)}
                        placeholder="you@example.com"
                        className={`${fieldClassName} h-[52px] ${errors.email ? 'border-red-600' : 'border-line'}`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && <p id="email-error" role="alert" className="mt-2 text-xs text-red-600">{errors.email}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">Your message <span className="text-gold-ink" aria-hidden="true">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={event => updateField('message', event.target.value)}
                        placeholder="Tell us about the crop, quantity or question you have in mind…"
                        className={`${fieldClassName} min-h-[148px] resize-y py-3.5 leading-6 ${errors.message ? 'border-red-600' : 'border-line'}`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && <p id="message-error" role="alert" className="mt-2 text-xs text-red-600">{errors.message}</p>}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[230px] text-xs leading-5 text-stone">Include your email address if you’d like us to reply.</p>
                    <Button type="submit" variant="primary" showArrow className="w-full shrink-0 justify-center sm:w-auto">Send message</Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section id="visit-farm" className="scroll-mt-24 px-5 py-14 md:px-8 md:py-20" aria-labelledby="visit-heading">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-7 flex flex-col gap-4 sm:mb-9 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow className="mb-4">FIND YOUR WAY</Eyebrow>
              <h2 id="visit-heading" className="font-display text-3xl font-medium tracking-[-0.025em] text-ink sm:text-4xl">Closer to <em className="text-forest">the land.</em></h2>
            </div>
            <p className="max-w-[340px] text-sm leading-6 text-stone">Planning a visit? Send us a message before you set out.</p>
          </div>

          <div className="grid overflow-hidden rounded-[28px] border border-line bg-sage lg:grid-cols-[0.8fr_1.2fr] lg:rounded-[32px]">
            <div className="flex flex-col items-start p-6 sm:p-8 lg:p-10 xl:p-12">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-paper text-forest">
                <MapPin size={22} strokeWidth={1.4} aria-hidden="true" />
              </div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-gold-ink">OUR FARM ADDRESS</p>
              <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-ink">Bachani Farms</h3>
              <p className="mt-3 max-w-[280px] text-sm leading-7 text-stone">{site.address}</p>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-[48px] items-center gap-5 rounded-full border border-forest px-5 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest lg:mt-auto"
              >
                Get directions
                <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
            <div className="h-[300px] border-t border-line sm:h-[340px] lg:h-full lg:min-h-[360px] lg:border-l lg:border-t-0">
              <iframe
                title="Map showing the Bachani Farms address"
                src={mapUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
