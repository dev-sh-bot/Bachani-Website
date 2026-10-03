import type { Metadata } from 'next';
import ContactPage from '@/views/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Bachani Farms | Phone, WhatsApp, Email & Map',
  description:
    'Contact Bachani Farms in [District], Pakistan by phone, WhatsApp, email or message form. Buyers can ask about contract supply of our crops.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return <ContactPage />;
}
