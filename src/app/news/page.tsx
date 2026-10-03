import type { Metadata } from 'next';
import NewsPage from '@/views/NewsPage';

export const metadata: Metadata = {
  title: 'Farm News & Harvest Updates | Bachani Farms',
  description:
    'Harvest updates, farm news and seasonal stories from Bachani Farms in [District], Pakistan: mango, cucumber, sugarcane, wheat and more.',
  alternates: { canonical: '/news' },
};

export default function Page() {
  return <NewsPage />;
}
