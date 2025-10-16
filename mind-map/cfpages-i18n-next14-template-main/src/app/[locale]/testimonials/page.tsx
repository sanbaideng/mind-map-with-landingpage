import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Testimonials } from '@/components/Testimonials'

export const runtime = 'edge';

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
