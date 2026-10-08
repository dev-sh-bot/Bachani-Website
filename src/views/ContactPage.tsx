'use client';

import { useState } from 'react';
import { Check, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { site } from '../data/site';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (form.honeypot) return;
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
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
    <section className="min-h-[80vh] px-5 md:px-8 pt-32 md:pt-36 pb-20" style={{ backgroundColor: '#FBFAF5' }}>
      <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="motion-card p-6 md:p-8 rounded-[24px] bg-white border" data-card-motion="soft" style={{ borderColor: '#DCE3D2' }}>
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: '#EEF3E6' }}>
                <Check size={24} strokeWidth={1.5} style={{ color: '#0B5828' }} />
              </div>
              <h1 className="font-display text-2xl font-semibold mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}>Thank you.</h1>
              <p className="text-base text-stone">Your message has been received.</p>
            </div>
          ) : (
            <>
              <h1 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}>Send us a message</h1>
              <form onSubmit={handleSubmit} noValidate>
                <input type="text" name="website" value={form.honeypot} onChange={event => setForm({ ...form, honeypot: event.target.value })} className="sr-only" tabIndex={-1} aria-hidden="true" />
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">Full name <span aria-hidden="true">*</span></label>
                    <input id="name" type="text" required value={form.name} onChange={event => { setForm({ ...form, name: event.target.value }); setErrors({ ...errors, name: '' }); }} className="w-full h-11 px-4 rounded-xl text-sm text-ink outline-none" style={{ border: `1px solid ${errors.name ? '#DC2626' : '#DCE3D2'}`, backgroundColor: '#FBFAF5' }} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
                    {errors.name && <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">Email <span className="text-stone text-xs">(optional)</span></label>
                    <input id="email" type="email" value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} className="w-full h-11 px-4 rounded-xl text-sm text-ink outline-none" style={{ border: '1px solid #DCE3D2', backgroundColor: '#FBFAF5' }} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">Message <span aria-hidden="true">*</span></label>
                    <textarea id="message" required rows={6} value={form.message} onChange={event => { setForm({ ...form, message: event.target.value }); setErrors({ ...errors, message: '' }); }} className="w-full px-4 py-3 rounded-xl text-sm text-ink outline-none resize-none" style={{ border: `1px solid ${errors.message ? '#DC2626' : '#DCE3D2'}`, backgroundColor: '#FBFAF5' }} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
                    {errors.message && <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
                  </div>
                  <Button type="submit" variant="primary" className="w-full justify-center">Send Message</Button>
                </div>
              </form>
            </>
          )}
        </div>

        <div className="space-y-5">
          <div className="motion-card p-6 rounded-[24px] bg-white border" style={{ borderColor: '#DCE3D2' }}>
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={19} strokeWidth={1.5} className="card-icon" style={{ color: '#0B5828' }} />
              <h2 className="font-display text-xl font-semibold" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}>Farm address</h2>
            </div>
            <p className="text-sm text-stone leading-relaxed">{site.address}</p>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex mt-4 px-5 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#0B5828', color: '#FBFAF5' }}>Get directions</a>
          </div>
          <div className="motion-card rounded-[24px] overflow-hidden border bg-sage h-[320px] md:h-[420px]" data-card-motion="soft" style={{ borderColor: '#DCE3D2' }}>
            <iframe title="Map showing the Bachani Farms address" src={mapUrl} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  );
}
