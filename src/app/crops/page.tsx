import { cropNames } from '@/data/crops';
import { farmingSummary } from '@/data/farming';
import type { Metadata } from 'next';
import CropsPage from '@/views/CropsPage';

export const metadata: Metadata = {
  title: `Our Crops | ${cropNames.join(', ')}`,
  description:
    `Explore the three farming methods at Bachani Farms in [District], Pakistan. ${farmingSummary}`,
  alternates: { canonical: '/crops' },
};

export default function Page() {
  return <CropsPage />;
}
