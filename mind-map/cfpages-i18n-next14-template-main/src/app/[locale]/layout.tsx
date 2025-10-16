import '@/styles/tailwind.css'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { Header } from '@/components/Header'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' },
    { locale: 'es' },
    { locale: 'fr' },
    { locale: 'de' },
    { locale: 'it' },
    { locale: 'pt' },
    { locale: 'ko' },
    { locale: 'ja' },
    { locale: 'zh-TW' },
  ]
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html className="h-full bg-white antialiased" lang={locale}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="flex h-full flex-col">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
