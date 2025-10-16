import { RandomPicker } from '@/components/RandomPicker'
import { unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Metadata } from 'next'

export const runtime = 'edge';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return {
    title: 'Random Picker - Fast, Fair, and Free Online Item Selector',
    description: 'Pick random items from any list quickly and fairly. Perfect for classrooms, raffles, decisions, and giveaways. No signup required, completely free.',
    keywords: 'random picker, random selector, random item picker, classroom tools, fair selection, online picker, name picker, random generator',
    openGraph: {
      title: 'Random Picker - Fast, Fair, and Free Online Item Selector',
      description: 'Pick random items from any list quickly and fairly. Perfect for classrooms, raffles, decisions, and giveaways.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Random Picker - Fast, Fair, and Free Online Item Selector',
      description: 'Pick random items from any list quickly and fairly. Perfect for classrooms, raffles, decisions, and giveaways.',
    },
    alternates: {
      canonical: '/random-picker',
    },
  }
}

export default function RandomPickerPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <RandomPicker />
    </main>
  )
}
