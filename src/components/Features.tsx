'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'

export function Features() {
  const t = useTranslations('homepage')

  const features = [
    {
      icon: '⚡',
      titleKey: 'instantStart',
    },
    {
      icon: '👥',
      titleKey: 'realTimeCollab',
    },
    {
      icon: '∞',
      titleKey: 'unlimitedMaps',
    },
    {
      icon: '🎨',
      titleKey: 'richFormatting',
    },
    {
      icon: '📤',
      titleKey: 'powerfulExport',
    },
    {
      icon: '📋',
      titleKey: 'templates',
    },
    {
      icon: '⌨️',
      titleKey: 'keyboardShortcuts',
    },
    {
      icon: '☁️',
      titleKey: 'cloudSync',
    },
  ]

  return (
    <section id="features" className="bg-slate-50 py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.titleKey}
              className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">
                    {t(`features.${feature.titleKey}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    {t(`features.${feature.titleKey}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
