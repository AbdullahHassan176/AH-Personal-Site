import Head from 'next/head'
import { generateStructuredData } from '@/lib/seo'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'Person' | 'Organization' | 'WebSite' | 'WebPage'
  structuredData?: any
  noindex?: boolean
}

export function SEO({
  title,
  description,
  image,
  url,
  type = 'WebPage',
  structuredData,
  noindex = false,
}: SEOProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abdullahhassan.azurestaticapps.net'
  const fullTitle = title ? `${title} | Abdullah Hassan` : 'Abdullah Hassan - AI & Analytics Leader'
  const fullDescription = description || 'Abdullah Hassan is a results-driven technologist and entrepreneur operating at the intersection of AI, quantitative finance, and real-world asset tokenization.'
  const fullImage = image || `${baseUrl}/images/DSCF6400.JPG`
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl

  const defaultStructuredData = generateStructuredData({
    type,
    name: fullTitle,
    description: fullDescription,
    url: fullUrl,
    image: fullImage,
  })

  const finalStructuredData = structuredData || defaultStructuredData

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content="Abdullah Hassan, AI Specialist, Quantitative Finance, Entrepreneur, Technology Leader, Global Next, Unamani AI" />
      <meta name="author" content="Abdullah Hassan" />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type === 'Person' ? 'profile' : 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="Abdullah Hassan" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@abdullahhassan" />
      <meta name="twitter:site" content="@abdullahhassan" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#fbbf24" />
      <meta name="msapplication-TileColor" content="#1f2937" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Abdullah Hassan" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData),
        }}
      />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://storage.googleapis.com" />
    </Head>
  )
}
