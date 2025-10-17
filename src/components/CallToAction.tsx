'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function CallToAction() {
  const t = useTranslations('homepage')

  return (
    <section className="bg-blue-600 py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-blue-100">
            {t('cta.subtitle')}
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button href="/mind-map" color="white">
              {t('cta.button')}
            </Button>
          </div>
          <p className="mt-4 text-sm text-blue-200">
            {t('cta.noCard')}
          </p>
        </div>
      </Container>
    </section>
  )
}
