import { farmingSummary } from '@/data/farming';
import type { Metadata } from 'next';
import FarmPage from '@/views/FarmPage';
import { farmStats } from '@/data/site';

export const metadata: Metadata = {
  title: 'Our Farm | Orchards, Tunnels and Fields at Bachani Farms',
  description:
    `See our three farming methods across ${farmStats.acres} acres in [District], Pakistan. ${farmingSummary}`,
  alternates: { canonical: '/farm' },
};

export default function Page() {
  return <FarmPage />;
}
