import type { Metadata } from 'next';
import SustainabilityPage from '@/views/SustainabilityPage';

export const metadata: Metadata = {
  title: 'Sustainable Farming in Pakistan | Bachani Farms',
  description:
    'How Bachani Farms looks after water, soil and people while growing six crops in [District], Pakistan, so the land stays productive for the next generation.',
  alternates: { canonical: '/farm/sustainability' },
};

export default function Page() {
  return <SustainabilityPage />;
}
