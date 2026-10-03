import type { Metadata } from 'next';
import QualityPage from '@/views/QualityPage';

export const metadata: Metadata = {
  title: 'Quality & Packing | From Field to Buyer | Bachani Farms',
  description:
    'How Bachani Farms picks, sorts, packs and hands over its mango, banana, papaya, cucumber and other crops with care, from the field to the buyer.',
  alternates: { canonical: '/farm/quality' },
};

export default function Page() {
  return <QualityPage />;
}
