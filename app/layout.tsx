import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Abdullah Hassan - Quant-minded AI & Analytics Leader',
  description: 'Abdullah Hassan is a results-driven technologist and entrepreneur operating at the intersection of AI, quantitative finance, and real-world asset tokenization.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
  },
  keywords: ['Abdullah Hassan', 'Entrepreneur', 'AI Specialist', 'Finance', 'Ventures', 'Global Next', 'Unamani AI'],
  authors: [{ name: 'Abdullah Hassan' }],
  creator: 'Abdullah Hassan',
  publisher: 'Abdullah Hassan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Abdullah Hassan - Quant-minded AI & Analytics Leader',
    description: 'Abdullah Hassan is a results-driven technologist and entrepreneur operating at the intersection of AI, quantitative finance, and real-world asset tokenization.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Abdullah Hassan',
    images: [
      {
        url: '/images/DSCF6400.JPG',
        width: 1200,
        height: 630,
        alt: 'Abdullah Hassan - Professional Portrait',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdullah Hassan - Quant-minded AI & Analytics Leader',
    description: 'Abdullah Hassan is a results-driven technologist and entrepreneur operating at the intersection of AI, quantitative finance, and real-world asset tokenization.',
    images: ['/images/DSCF6400.JPG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-gray-900 text-white font-inter">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
