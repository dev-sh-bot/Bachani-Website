import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CropPage from '@/views/CropPage';
import { crops, getCropBySlug } from '@/data/crops';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return crops.map((crop) => ({ slug: crop.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const crop = getCropBySlug(slug);
  if (!crop) return { title: 'Crop not found' };
  return {
    title: crop.seoTitle,
    description: crop.seoDescription,
    alternates: { canonical: `/crops/${crop.slug}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!getCropBySlug(slug)) notFound();
  return <CropPage slug={slug} />;
}
