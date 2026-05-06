import { HeroSection } from '@/components/sections/HeroSection'
import { HighlightsSection } from '@/components/sections/HighlightsSection'
import { LogosSection } from '@/components/sections/LogosSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ContactSection } from '@/components/sections/ContactSection'
import { readJSON } from '@/lib/server-data'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Abdullah Hassan — Quant AI Leader & Financial Modeller',
  description:
    'Dubai-based financial modeller (DCF · ETF NAV · lending · XVA) and AI founder — Deloitte digital assets experience, NF-GARCH research, Safe Labs, Global Next, Unamani AI.',
  keywords: ['AI Consultant', 'Financial Modeller', 'DCF', 'ETF NAV', 'Deloitte', 'NF-GARCH', 'UAE', 'Founder'],
  type: 'website',
})

export default function HomePage() {
  const profile = readJSON('profile.json')
  const images = readJSON('images.json')
  const contact = readJSON('contact.json')
  
  return (
    <>
      <HeroSection profile={profile} images={images} />
      <HighlightsSection />
      <LogosSection />
      <GallerySection images={images} />
      <ContactSection contact={contact} />
    </>
  )
}
