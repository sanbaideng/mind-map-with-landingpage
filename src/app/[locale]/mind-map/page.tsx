'use client'

import { useLocale } from 'next-intl'
import { useEffect, useRef } from 'react'

export default function MindMapPage() {
  const currentLocale = useLocale()
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleLoad = () => {
      if (iframeRef.current?.contentWindow) {
        const langMap: Record<string, string> = {
          'en': 'en',
          'zh': 'zh',
          'zh-TW': 'zh_tw'
        }
        
        const mindMapLang = langMap[currentLocale] || 'en'
        
        try {
          iframeRef.current.contentWindow.postMessage({
            type: 'setLanguage',
            lang: mindMapLang
          }, '*')
        } catch (error) {
          console.error('Failed to set mind-map language:', error)
        }
      }
    }

    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener('load', handleLoad)
      return () => iframe.removeEventListener('load', handleLoad)
    }
  }, [currentLocale])

  return (
    <div className="h-screen w-full">
      <iframe 
        ref={iframeRef}
        src="/mind-map/index.html" 
        className="w-full h-full border-0"
        title="Mind Map"
      />
    </div>
  )
}
