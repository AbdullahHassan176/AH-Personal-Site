import { Metadata } from 'next'

export const siteConfig = {
  name: 'Abdullah Hassan',
  title: 'Abdullah Hassan - Quant-minded AI & Analytics Leader',
  description: 'Abdullah Hassan is a results-driven technologist and entrepreneur operating at the intersection of AI, quantitative finance, and real-world asset tokenization. Founder of Global Next and Unamani AI.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://abdullahhassan.azurestaticapps.net',
  ogImage: '/images/DSCF6400.JPG',
  links: {
    twitter: 'https://twitter.com/abdullahhassan',
    linkedin: 'https://linkedin.com/in/abdullahhassan',
    github: 'https://github.com/abdullahhassan',
  },
  keywords: [
    'Abdullah Hassan',
    'AI Specialist',
    'Quantitative Finance',
    'Entrepreneur',
    'Machine Learning',
    'Data Analytics',
    'Fintech',
    'Blockchain',
    'Asset Tokenization',
    'Global Next',
    'Unamani AI',
    'Technology Leader',
    'Business Intelligence',
    'Financial Technology',
    'AI Consulting',
    'Data Science',
    'Investment Technology',
    'Digital Assets',
    'Financial Analytics',
    'Tech Entrepreneur'
  ],
  authors: [
    {
      name: 'Abdullah Hassan',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://abdullahhassan.azurestaticapps.net',
    },
  ],
  creator: 'Abdullah Hassan',
  publisher: 'Abdullah Hassan',
  category: 'Technology',
  classification: 'Personal Website',
  language: 'en-US',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
}: {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
} = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const fullDescription = description || siteConfig.description
  const fullKeywords = [...siteConfig.keywords, ...keywords]
  const fullImage = image || siteConfig.ogImage
  const fullUrl = url || siteConfig.url

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    category: siteConfig.category,
    classification: siteConfig.classification,
    applicationName: siteConfig.name,
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },
    manifest: '/manifest.json',
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: fullUrl,
      languages: {
        'en-US': fullUrl,
      },
    },
    openGraph: {
      type,
      locale: 'en_US',
      url: fullUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: '@abdullahhassan',
      site: '@abdullahhassan',
    },
    robots: siteConfig.robots,
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
      other: {
        'msvalidate.01': process.env.BING_VERIFICATION || '',
      },
    },
    other: {
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': siteConfig.name,
      'mobile-web-app-capable': 'yes',
      'msapplication-TileColor': '#1f2937',
      'msapplication-config': '/browserconfig.xml',
    },
  }
}

export function generateStructuredData({
  type = 'Person',
  name = 'Abdullah Hassan',
  description = siteConfig.description,
  url = siteConfig.url,
  image = siteConfig.ogImage,
  jobTitle = 'AI & Analytics Leader',
  worksFor = 'Global Next, Unamani AI',
  sameAs = [
    'https://linkedin.com/in/abdullahhassan',
    'https://twitter.com/abdullahhassan',
    'https://github.com/abdullahhassan',
  ],
}: {
  type?: 'Person' | 'Organization' | 'WebSite' | 'WebPage'
  name?: string
  description?: string
  url?: string
  image?: string
  jobTitle?: string
  worksFor?: string
  sameAs?: string[]
} = {}) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url,
    image,
  }

  if (type === 'Person') {
    return {
      ...baseStructuredData,
      jobTitle,
      worksFor: worksFor.split(', ').map(company => ({
        '@type': 'Organization',
        name: company,
      })),
      sameAs,
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'Quantitative Finance',
        'Data Analytics',
        'Financial Technology',
        'Blockchain Technology',
        'Asset Tokenization',
        'Business Intelligence',
      ],
      alumniOf: 'University',
      nationality: 'American',
    }
  }

  if (type === 'WebSite') {
    return {
      ...baseStructuredData,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${url}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    }
  }

  return baseStructuredData
}
