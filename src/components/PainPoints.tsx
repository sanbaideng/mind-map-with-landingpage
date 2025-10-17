'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'

export function PainPoints() {
  const t = useTranslations('homepage')

  const painPoints = [
    {
      icon: '🐌',
      titleKey: 'slow',
    },
    {
      icon: '🔄',
      titleKey: 'noCollaboration',
    },
    {
      icon: '📎',
      titleKey: 'limitedExport',
    },
    {
      icon: '🤯',
      titleKey: 'complexity',
    },
  ]

  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {t('painPoints.title')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {t('painPoints.subtitle')}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {painPoints.map((painPoint) => (
            <div
              key={painPoint.titleKey}
              className="relative"
            >
              <div className="mb-4 text-4xl">{painPoint.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">
                {t(`painPoints.${painPoint.titleKey}.title`)}
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                {t(`painPoints.${painPoint.titleKey}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
