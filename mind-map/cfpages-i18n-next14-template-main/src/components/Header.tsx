'use client'

import dynamic from 'next/dynamic'

const HeaderClient = dynamic(() => import('./HeaderClient').then(mod => mod.HeaderClient), {
  ssr: false
})

export function Header() {
  return <HeaderClient />
}
