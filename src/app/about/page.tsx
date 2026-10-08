import type { Metadata } from 'next';
import AboutPage from '@/views/AboutPage';
import { farmStats } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Bachani Farms | From Sindh Soil',
  description:
    `From Sindh soil, for the years still coming. Discover the story of Bachani Farms and how the farm has grown over ${farmStats.yearsOfFarming} years.`,
  alternates: { canonical: '/about' },
};

export default function Page() {
  return <AboutPage />;
}
