import { unstable_setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'

export const runtime = 'edge';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const isZh = locale === 'zh'
  
  return {
    title: isZh 
      ? '思绪思维导图 - Simple Mind Map' 
      : 'Simple Mind Map',
    description: isZh
      ? '一个功能强大的在线思维导图工具，支持多种布局和丰富的导出格式'
      : 'A powerful online mind mapping tool with multiple layouts and rich export formats',
    keywords: isZh
      ? '思维导图, mind map, 在线工具, 可视化'
      : 'mind map, online tool, visualization',
  }
}

export default function MindMapPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale);

  return (
    <div className="h-screen w-full">
      <iframe 
        src="/mind-map/index.html" 
        className="w-full h-full border-0"
        title="Mind Map"
      />
    </div>
  )
}
