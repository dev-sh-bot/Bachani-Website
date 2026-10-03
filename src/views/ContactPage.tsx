'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Copy, Check, Clock } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Button from '../components/Button';
import { site } from '../data/site';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General question',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(''), 2000);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
    if (!form.message.trim()) e.message = 'Please enter a message.';
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (form.honeypot) return;
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    // TODO: Connect to real email or form service here
    console.log('Form submission:', form);
    setSubmitted(true);
  };

  const contactCards = [
    { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone}`, key: 'phone' },
    { icon: MessageCircle, label: 'WhatsApp', value: site.whatsapp, href: `https://wa.me/${site.whatsapp.replace(/\D/g, '')}`, key: 'wa' },
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}`, key: 'email' },
    { icon: MapPin, label: 'Address', value: site.address, href: undefined, key: 'addr' },
  ];

  return (
    <>

      {/* Header */}
      <section className="pt-36 pb-16 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto">
          <Eyebrow className="mb-6">CONTACT US</Eyebrow>
          <h1
            className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.02em] mb-6 leading-[0.98]"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
          >
            Get in touch
          </h1>
          <p className="text-lg text-stone max-w-lg">
            Questions about the farm or our crops? Call, send a WhatsApp message or use the form below.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="px-5 md:px-8 pb-16" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-4 gap-4">
          {contactCards.map(card => {
            const Icon = card.icon;
            return (
              <div key={card.key} className="p-5 rounded-[20px] bg-white border" style={{ borderColor: '#DCE3D2' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#EEF3E6' }}>
                  <Icon size={18} strokeWidth={1.5} style={{ color: '#0B5828' }} />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone mb-1">{card.label}</div>
                {card.href ? (
                  <a href={card.href} className="text-sm font-medium text-ink hover:text-forest transition-colors break-all">
                    {card.value}
                  </a>
                ) : (
                  <p className="text-sm text-stone leading-relaxed">{card.value}</p>
                )}
                {card.key !== 'addr' && (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(card.value, card.key)}
                    className="mt-3 flex items-center gap-1.5 text-xs text-stone hover:text-forest transition-colors"
                    aria-label={`Copy ${card.label}`}
                  >
                    {copied === card.key ? (
                      <><Check size={12} strokeWidth={1.5} /> Copied</>
                    ) : (
                      <><Copy size={12} strokeWidth={1.5} /> Copy</>
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-5 md:px-8 pb-24 md:pb-32" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 gap-10">
          {/* Form */}
          <div className="p-8 rounded-[24px] bg-white border" style={{ borderColor: '#DCE3D2' }}>
            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: '#EEF3E6' }}
                >
                  <Check size={24} strokeWidth={1.5} style={{ color: '#0B5828' }} />
                </div>
                <h2
                  className="font-display text-2xl font-semibold mb-3"
                  style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
                >
                  Thank you.
                </h2>
                <p className="text-base text-stone">Your message has been sent, and we will reply soon.</p>
              </div>
            ) : (
              <>
                <h2
                  className="font-display text-2xl font-semibold mb-6"
                  style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
                >
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} noValidate>
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    value={form.honeypot}
                    onChange={e => setForm({ ...form, honeypot: e.target.value })}
                    className="sr-only"
                    tabIndex={-1}
                    aria-hidden="true"
                  />

                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                        Full name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                        className="w-full h-11 px-4 rounded-xl text-sm text-ink outline-none transition-colors"
                        style={{
                          border: `1px solid ${errors.name ? '#DC2626' : '#DCE3D2'}`,
                          backgroundColor: '#FBFAF5',
                        }}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
                        Phone number <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: '' }); }}
                        className="w-full h-11 px-4 rounded-xl text-sm text-ink outline-none transition-colors"
                        style={{
                          border: `1px solid ${errors.phone ? '#DC2626' : '#DCE3D2'}`,
                          backgroundColor: '#FBFAF5',
                        }}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
                        Email <span className="text-stone text-xs">(optional)</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl text-sm text-ink outline-none transition-colors"
                        style={{ border: '1px solid #DCE3D2', backgroundColor: '#FBFAF5' }}
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-ink mb-1.5">
                        Subject
                      </label>
                      <select
                        id="subject"
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl text-sm text-ink outline-none transition-colors bg-paper"
                        style={{ border: '1px solid #DCE3D2', backgroundColor: '#FBFAF5' }}
                      >
                        <option>General question</option>
                        <option>Contract supply</option>
                        <option>Media</option>
                        <option>Careers</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                        Message <span aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }); }}
                        className="w-full px-4 py-3 rounded-xl text-sm text-ink outline-none transition-colors resize-none"
                        style={{
                          border: `1px solid ${errors.message ? '#DC2626' : '#DCE3D2'}`,
                          backgroundColor: '#FBFAF5',
                        }}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
                    </div>

                    <Button type="submit" variant="primary" className="w-full justify-center">
                      Send Message
                    </Button>

                    <p className="text-xs text-center" style={{ color: '#4B584F' }}>
                      Buyers: choose Contract supply as the subject and tell us which crops you are interested in.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Office hours */}
            <div className="p-6 rounded-[20px] bg-white border" style={{ borderColor: '#DCE3D2' }}>
              <div className="flex items-center gap-3 mb-4">
                <Clock size={18} strokeWidth={1.5} style={{ color: '#0B5828' }} />
                <h2 className="font-semibold text-sm text-ink">Office hours</h2>
              </div>
              <div className="space-y-2 text-sm text-stone">
                <div className="flex justify-between">
                  <span>Monday to Saturday</span>
                  <span className="font-medium text-ink">[9:00 AM – 5:00 PM]</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-ink">Closed</span>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-[20px] overflow-hidden border"
              style={{ borderColor: '#DCE3D2' }}
            >
              <div
                className="h-64 flex flex-col items-center justify-center text-center p-6"
                style={{ backgroundColor: '#EEF3E6' }}
              >
                <MapPin size={32} strokeWidth={1.5} className="mb-3" style={{ color: '#0B5828' }} />
                <p className="text-sm font-medium text-ink mb-1">{site.address}</p>
                <p className="text-xs text-stone mb-4">Map will load here</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full text-sm font-medium transition-colors"
                  style={{ backgroundColor: '#0B5828', color: '#FBFAF5' }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
