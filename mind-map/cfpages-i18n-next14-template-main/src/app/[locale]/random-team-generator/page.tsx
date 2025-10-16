import { TeamGenerator } from '@/components/TeamGenerator'
import { Metadata } from 'next'

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Random Team Generator - Split Lists into Fair Groups Online',
    description: 'Generate random teams quickly and fairly. Perfect for classrooms, sports, workplace activities. Split any list into balanced groups with our free team generator.',
    keywords: 'random team generator, team maker, group generator, classroom teams, sports teams, fair team selection, split list, random groups',
    openGraph: {
      title: 'Random Team Generator - Split Lists into Fair Groups Online',
      description: 'Generate random teams quickly and fairly. Perfect for classrooms, sports, workplace activities.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Random Team Generator - Split Lists into Fair Groups Online',
      description: 'Generate random teams quickly and fairly. Perfect for classrooms, sports, workplace activities.',
    },
    alternates: {
      canonical: '/random-team-generator',
    },
  }
}

export default function TeamGeneratorPage() {
  return (
    <main>
      <TeamGenerator />
    </main>
  )
}
