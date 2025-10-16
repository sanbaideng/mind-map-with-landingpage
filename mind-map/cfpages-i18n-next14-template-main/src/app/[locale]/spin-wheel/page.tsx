import { SpinWheel } from '@/components/SpinWheel'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'

export const runtime = 'edge';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return {
    title: 'Spin Wheel - Ultimate Online Decision Maker and Random Selector',
    description: 'Make decisions with our interactive spin wheel. Perfect for classrooms, games, yes/no choices, and random selection. Free, fair, and fun to use.',
    keywords: 'spin wheel, wheel of names, decision maker, random wheel, picker wheel, yes no wheel, classroom wheel, random selector, online spinner',
    openGraph: {
      title: 'Spin Wheel - Ultimate Online Decision Maker and Random Selector',
      description: 'Make decisions with our interactive spin wheel. Perfect for classrooms, games, yes/no choices, and random selection.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Spin Wheel - Ultimate Online Decision Maker and Random Selector',
      description: 'Make decisions with our interactive spin wheel. Perfect for classrooms, games, yes/no choices, and random selection.',
    },
    alternates: {
      canonical: '/spin-wheel',
    },
  }
}

export default function SpinWheelPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <SpinWheel />
    </main>
  )
}
