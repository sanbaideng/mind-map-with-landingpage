import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { PainPoints } from '@/components/PainPoints'
import { Features } from '@/components/Features'
import { UseCases } from '@/components/UseCases'
import { FAQ } from '@/components/FAQ'
import { CallToAction } from '@/components/CallToAction'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const isZh = locale === 'zh'
  
  return {
    title: isZh 
      ? '在线思维导图 - 免费协作式思维导图工具 | 实时编辑与导出' 
      : 'Mind Map Online - Free Collaborative Mind Mapping Tool | Real-Time & Export',
    description: isZh
      ? '免费在线思维导图工具，支持实时协作、无限节点、多格式导出(PDF/PNG/XMind)。无需注册即可开始，适用于教育、项目管理和团队协作。'
      : 'Free online mind mapping tool with real-time collaboration, unlimited nodes, and export to PDF, PNG, XMind. Start without signup. Perfect for education, project management, and team collaboration.',
    keywords: isZh
      ? '思维导图, 在线思维导图, 免费思维导图, 思维导图工具, 协作思维导图, 思维导图软件, 项目管理, 头脑风暴, 教育工具, 在线协作'
      : 'mind map, mind map online, free mind map, mind mapping tool, collaborative mind map, mind map software, project management, brainstorming, education tool, online collaboration',
    openGraph: {
      title: isZh 
        ? '在线思维导图 - 免费协作式思维导图工具'
        : 'Mind Map Online - Free Collaborative Mind Mapping Tool',
      description: isZh
        ? '免费在线思维导图工具，支持实时协作、无限节点、多格式导出。无需注册即可开始。'
        : 'Free online mind mapping tool with real-time collaboration, unlimited nodes, and multiple export formats. Start without signup.',
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: isZh 
        ? '在线思维导图 - 免费协作式思维导图工具'
        : 'Mind Map Online - Free Collaborative Mind Mapping Tool',
      description: isZh
        ? '免费在线思维导图工具，支持实时协作、无限节点、多格式导出。'
        : 'Free online mind mapping tool with real-time collaboration, unlimited nodes, and export options.',
    },
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'zh': '/zh',
      }
    },
  }
}

export default function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <UseCases />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
