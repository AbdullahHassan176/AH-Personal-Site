import { HeroSection } from '@/components/sections/HeroSection'
import { HighlightsSection } from '@/components/sections/HighlightsSection'
import { LogosSection } from '@/components/sections/LogosSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ContactSection } from '@/components/sections/ContactSection'
import { readJSON } from '@/lib/server-data'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Abdullah Hassan - Quant-minded AI & Analytics Leader',
  description: 'Abdullah Hassan is a results-driven technologist and entrepreneur operating at the intersection of AI, quantitative finance, and real-world asset tokenization. Founder of Global Next and Unamani AI.',
  keywords: ['AI Leader', 'Quantitative Finance', 'Entrepreneur', 'Technology Innovation', 'Data Analytics'],
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
