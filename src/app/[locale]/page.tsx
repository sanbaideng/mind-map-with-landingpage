import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'

export const runtime = 'edge';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const isZh = locale === 'zh'
  
  return {
    title: isZh 
      ? '你的网站标题' 
      : 'Your Site Title',
    description: isZh
      ? '你的网站描述'
      : 'Your site description',
    keywords: isZh
      ? '关键词1, 关键词2, 关键词3'
      : 'keyword1, keyword2, keyword3',
    openGraph: {
      title: isZh 
        ? '你的网站标题'
        : 'Your Site Title',
      description: isZh
        ? '你的网站描述'
        : 'Your site description',
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: isZh 
        ? '你的网站标题'
        : 'Your Site Title',
      description: isZh
        ? '你的网站描述'
        : 'Your site description',
    },
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'zh': '/zh',
      }
    },
  }
}

export default function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <main>
        <Hero />
        {/* Add your components here */}
      </main>
      <Footer />
    </>
  )
}
