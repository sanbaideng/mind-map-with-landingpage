import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export const runtime = 'edge';

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        {/* <PrimaryFeatures /> */}
        <SecondaryFeatures />
      </main>
      <Footer />
    </>
  )
}
