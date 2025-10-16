import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Pricing } from '@/components/Pricing'
import { Faqs } from '@/components/Faqs'

export const runtime = 'edge';

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
