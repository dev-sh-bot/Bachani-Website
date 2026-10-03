import type { Metadata } from 'next';
import GalleryPage from '@/views/GalleryPage';

export const metadata: Metadata = {
  title: 'Photo & Video Gallery | Life at Bachani Farms',
  description:
    'Photos and short videos from Bachani Farms in [District], Pakistan: mango orchards, cucumber tunnels, wheat and sugarcane fields, harvest days and the farm team.',
  alternates: { canonical: '/gallery' },
};

export default function Page() {
  return <GalleryPage />;
}
