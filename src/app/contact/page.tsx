import type { Metadata } from 'next';
import ContactPage from '@/views/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Bachani Farms | Message, Address & Map',
  description:
    'Send Bachani Farms a message, view the farm address and find its location on the map.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return <ContactPage />;
}
