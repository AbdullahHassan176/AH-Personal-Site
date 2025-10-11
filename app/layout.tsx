import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@/components/Analytics'
import { generateMetadata as generateSEOMetadata, generateStructuredData } from '@/lib/seo'
import { PerformanceOptimization, CriticalCSS } from '@/components/PerformanceOptimization'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
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
        <CriticalCSS />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://abdullahhassan.azurestaticapps.net'} />
        <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION || ''} />
        <meta name="msvalidate.01" content={process.env.BING_VERIFICATION || ''} />
        <meta name="yandex-verification" content={process.env.YANDEX_VERIFICATION || ''} />
        <meta name="yahoo-site-verification" content={process.env.YAHOO_VERIFICATION || ''} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/images/DSCF6400.JPG" as="image" />
      </head>
      <body className="bg-gray-900 text-white font-inter">
        <PerformanceOptimization />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
