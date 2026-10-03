import type { Metadata } from 'next';
import FarmPage from '@/views/FarmPage';

export const metadata: Metadata = {
  title: 'Our Farm | Orchards, Tunnels and Fields at Bachani Farms',
  description:
    'See how Bachani Farms is laid out across [00] acres in [District], Pakistan: mango orchard, plantations, cucumber tunnels, open fields and the water that feeds them.',
  alternates: { canonical: '/farm' },
};

export default function Page() {
  return <FarmPage />;
}
