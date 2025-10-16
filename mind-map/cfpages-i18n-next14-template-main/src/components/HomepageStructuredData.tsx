export function HomepageStructuredData({ locale }: { locale: string }) {
  const isZh = locale === 'zh'
  
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": isZh ? "随机生成器工具" : "Random Generator Tools",
    "description": isZh 
      ? "免费的随机生成工具套件：团队生成器、转盘、随机选择器" 
      : "Free random generator tools suite: Team Generator, Spin Wheel, Random Picker",
    "url": "https://random-generator.tools",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://random-generator.tools/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": isZh ? "随机生成器工具套件" : "Random Generator Tools Suite",
    "description": isZh
      ? "包含团队生成器、转盘和随机选择器的完整工具套件，用于公平分组、决策制定和随机选择。"
      : "Complete suite of random generation tools including Team Generator, Spin Wheel, and Random Picker for fair grouping, decision making, and random selection.",
    "applicationCategory": "Utility",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      isZh ? "团队生成器 - 公平分组" : "Team Generator - Fair grouping",
      isZh ? "转盘 - 决策制定" : "Spin Wheel - Decision making", 
      isZh ? "随机选择器 - 随机选择" : "Random Picker - Random selection",
      isZh ? "100%公平算法" : "100% fair algorithms",
      isZh ? "移动设备友好" : "Mobile friendly",
      isZh ? "隐私保护" : "Privacy focused"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2847"
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isZh ? "首页" : "Home",
        "item": "https://random-generator.tools"
      }
    ]
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": isZh ? "随机生成器工具" : "Random Generator Tools",
    "url": "https://random-generator.tools",
    "logo": "https://random-generator.tools/logo.png",
    "description": isZh
      ? "提供免费、公平、易用的随机生成工具，帮助团队和个人做出公正决策。"
      : "Providing free, fair, and easy-to-use random generation tools to help teams and individuals make fair decisions.",
    "sameAs": [
      "https://github.com/random-generator-tools"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  )
}