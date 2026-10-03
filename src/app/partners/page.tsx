import type { Metadata } from 'next';
import PartnersPage from '@/views/PartnersPage';

export const metadata: Metadata = {
  title: 'Partner With Us | Contract Crop Supply | Bachani Farms',
  description:
    'Bachani Farms supplies mango, banana, papaya, cucumber, sugarcane and wheat under contract to trusted buyers. Learn how we work and get in touch.',
  alternates: { canonical: '/partners' },
};

export default function Page() {
  return <PartnersPage />;
}
