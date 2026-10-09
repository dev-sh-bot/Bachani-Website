import { cropList } from '@/data/crops';
import type { Metadata } from 'next';
import QualityPage from '@/views/QualityPage';

export const metadata: Metadata = {
  title: 'Quality & Packing | From Field to Buyer | Bachani Farms',
  description:
    `How Bachani Farms picks, sorts, packs and hands over ${cropList} with care, from the field to the buyer.`,
  alternates: { canonical: '/farm/quality' },
};

export default function Page() {
  return <QualityPage />;
}
