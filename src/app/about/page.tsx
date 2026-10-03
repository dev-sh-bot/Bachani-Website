import type { Metadata } from 'next';
import AboutPage from '@/views/AboutPage';

export const metadata: Metadata = {
  title: 'About Bachani Farms | Our Story, Values and Team',
  description:
    'Learn how Bachani Farms grew from a small orchard into a six-crop farm in [District], Pakistan, and meet the values and people behind every harvest.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return <AboutPage />;
}
