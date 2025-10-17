'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'

export function UseCases() {
  const t = useTranslations('homepage')

  const useCases = [
    {
      icon: '📚',
      titleKey: 'education',
      gradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: '📊',
      titleKey: 'projectManagement',
      gradient: 'from-purple-50 to-pink-50',
    },
    {
      icon: '💼',
      titleKey: 'business',
      gradient: 'from-orange-50 to-yellow-50',
    },
    {
      icon: '🎨',
      titleKey: 'creative',
      gradient: 'from-green-50 to-emerald-50',
    },
  ]

  return (
    <section className="bg-white py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {t('useCases.title')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {t('useCases.subtitle')}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {useCases.map((useCase) => (
            <div
              key={useCase.titleKey}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${useCase.gradient} p-8 shadow-sm ring-1 ring-slate-900/5`}
            >
              <div className="mb-4 text-5xl">{useCase.icon}</div>
              <h3 className="text-2xl font-semibold text-slate-900">
                {t(`useCases.${useCase.titleKey}.title`)}
              </h3>
              <p className="mt-4 text-base text-slate-700">
                {t(`useCases.${useCase.titleKey}.description`)}
              </p>
              <div className="mt-6 rounded-xl bg-white/50 p-4">
                <p className="text-sm font-medium text-slate-900">
                  {t(`useCases.${useCase.titleKey}.examples`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
