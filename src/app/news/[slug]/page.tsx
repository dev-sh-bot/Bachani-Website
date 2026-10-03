import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NewsArticlePage from '@/views/NewsArticlePage';
import { news } from '@/data/news';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((a) => a.slug === slug);
  if (!article) return { title: 'Article not found' };
  return {
    title: `${article.title} | Bachani Farms News`,
    description: article.excerpt,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: { type: 'article' },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!news.find((a) => a.slug === slug)) notFound();
  return <NewsArticlePage slug={slug} />;
}
