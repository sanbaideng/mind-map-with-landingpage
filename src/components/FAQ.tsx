'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'
import Script from 'next/script'

export function FAQ() {
  const t = useTranslations('homepage')

  const faqs = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8']

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faqKey) => ({
      '@type': 'Question',
      name: t(`faq.${faqKey}.question`),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(`faq.${faqKey}.answer`),
      },
    })),
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className="bg-slate-50 py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              {t('faq.title')}
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl divide-y divide-slate-200">
            {faqs.map((faqKey) => (
              <div key={faqKey} className="py-8">
                <h3 className="text-lg font-semibold text-slate-900">
                  {t(`faq.${faqKey}.question`)}
                </h3>
                <p className="mt-4 text-base text-slate-700">
                  {t(`faq.${faqKey}.answer`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
