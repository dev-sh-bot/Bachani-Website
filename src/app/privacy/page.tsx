import type { Metadata } from 'next';
import PrivacyPage from '@/views/PrivacyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bachani Farms',
  description: 'How Bachani Farms collects and uses information from visitors to this website.',
  alternates: { canonical: '/privacy' },
};

export default function Page() {
  return <PrivacyPage />;
}
