import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@/components/Analytics'
import { generateMetadata as generateSEOMetadata, generateStructuredData } from '@/lib/seo'
import { PerformanceOptimization, CriticalCSS } from '@/components/PerformanceOptimization'

// next/font self-hosts fonts at build time — no runtime request to Google.
// display:'swap' lets text render immediately in a fallback font while the
// custom font loads, eliminating layout shift.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  // Only load the two weights actually used (bold headings + hero h1).
  weight: ['700', '900'],
  preload: false, // Secondary font — don't block initial render
})

export const metadata: Metadata = generateSEOMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generateStructuredData()

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Inline critical CSS before any external stylesheet — prevents flash */}
        <CriticalCSS />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Canonical & verification */}
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://abdullahhassan.azurestaticapps.net'} />
        <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION || ''} />
        <meta name="msvalidate.01" content={process.env.BING_VERIFICATION || ''} />

        {/* Hero portrait — preload the LCP image so it starts fetching
            immediately, before the JS bundle is even parsed. */}
        <link rel="preload" href="/images/DSCF6400.JPG" as="image" fetchPriority="high" />
      </head>
      <body className="font-inter antialiased">
        <PerformanceOptimization />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
