import type { Metadata } from 'next';
import CropsPage from '@/views/CropsPage';

export const metadata: Metadata = {
  title: 'Our Crops | Mango, Banana, Papaya, Cucumber, Sugarcane, Wheat',
  description:
    'Explore the six crops grown at Bachani Farms in [District], Pakistan: mango, banana, papaya, cucumber, sugarcane and wheat, with growing methods and harvest seasons.',
  alternates: { canonical: '/crops' },
};

export default function Page() {
  return <CropsPage />;
}
