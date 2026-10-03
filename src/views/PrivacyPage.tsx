'use client';

// Note: A lawyer should review this Privacy Policy before publication.
import { site } from '../data/site';

const sections = [
  { id: 'introduction', heading: 'Introduction', body: 'This Privacy Policy explains how Bachani Farms ("we", "our", "us") collects and uses information from visitors to this website. By using this website, you agree to the practices described here.' },
  { id: 'information', heading: 'Information we collect', body: 'We collect information you provide through our contact form: your name, phone number, email address (optional) and message. We do not collect payment details or other sensitive personal information.' },
  { id: 'use', heading: 'How we use it', body: 'We use your contact details to reply to your enquiry. We do not sell, rent or share your information with third parties for marketing purposes.' },
  { id: 'sharing', heading: 'Sharing', body: 'We do not share your personal information with third parties except where required by law.' },
  { id: 'cookies', heading: 'Cookies and analytics', body: 'This website may use cookies to improve your experience. We may use basic analytics to understand how visitors use the site. No personal data is collected through analytics without your knowledge.' },
  { id: 'choices', heading: 'Your choices', body: 'You can request that we delete your personal information by contacting us at the email below. You can also choose not to provide information in our contact form, though this will prevent us from responding to your enquiry.' },
  { id: 'contact-privacy', heading: 'Contact us', body: `If you have any questions about this Privacy Policy, please email us at ${site.email}.` },
];

export default function PrivacyPage() {
  return (
    <>

      <div className="pt-32 pb-24 px-5 md:px-8" style={{ backgroundColor: '#FBFAF5' }}>
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-4 gap-12">
          {/* Sticky table of contents */}
          <aside className="hidden md:block">
            <div className="sticky top-28">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: '#7A5E16' }}>
                Contents
              </h2>
              <nav aria-label="Page contents">
                <ul className="space-y-2">
                  {sections.map(s => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-sm text-stone hover:text-forest transition-colors"
                      >
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="md:col-span-3">
            <h1
              className="font-display text-5xl font-semibold tracking-[-0.02em] mb-3"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
            >
              Privacy Policy
            </h1>
            <p className="font-mono text-sm text-stone mb-12">Last updated [DD Month YYYY]</p>

            <div className="space-y-12">
              {sections.map(s => (
                <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`}>
                  <h2
                    id={`${s.id}-heading`}
                    className="font-display text-2xl font-semibold tracking-[-0.02em] mb-4"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
                  >
                    {s.heading}
                  </h2>
                  <p className="text-base text-stone leading-relaxed max-w-[68ch]">{s.body}</p>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
