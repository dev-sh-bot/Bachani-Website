import { cropList } from '@/data/crops';
import type { Metadata } from 'next';
import HomePage from '@/views/HomePage';

export const metadata: Metadata = {
  title: 'Bachani Farms | Mango, Cucumber & Crop Farm in Pakistan',
  description:
    `Bachani Farms grows ${cropList} in [District], Pakistan, and supplies quality produce to export buyers under contract.`,
  alternates: { canonical: '/' },
};

export default function Page() {
  return <HomePage />;
}
