import type { Metadata } from 'next';
import GalleryPage from '@/views/GalleryPage';

export const metadata: Metadata = {
  title: 'Photo & Video Gallery | Life at Bachani Farms',
  description:
    'Photos and short videos from Bachani Farms in [District], Pakistan: mango orchards, cucumber tunnels, open fields of sugarcane, wheat, tomatoes and banana, and harvest days.',
  alternates: { canonical: '/gallery' },
};

export default function Page() {
  return <GalleryPage />;
}
