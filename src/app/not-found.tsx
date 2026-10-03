import type { Metadata } from 'next';
import NotFoundPage from '@/views/NotFoundPage';

export const metadata: Metadata = {
  title: 'Page not found | Bachani Farms',
  description: 'We could not find the page you were looking for.',
  robots: { index: false },
};

export default function NotFound() {
  return <NotFoundPage />;
}
