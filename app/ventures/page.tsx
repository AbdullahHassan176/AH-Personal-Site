import { VenturesHero } from '@/components/sections/VenturesHero'
import { VenturesDashboard } from '@/components/sections/VenturesDashboard'
import { CompanyDetails } from '@/components/sections/CompanyDetails'
import { VentureMetrics } from '@/components/sections/VentureMetrics'
import { TeamSection } from '@/components/sections/TeamSection'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Ventures - Abdullah Hassan',
  description: 'Explore Abdullah Hassan\'s portfolio of innovative ventures including Global Next AI Think Tank, Unamani AI, Global Edge Trading, and more. Discover cutting-edge business solutions and entrepreneurial achievements.',
  keywords: ['Abdullah Hassan Ventures', 'Global Next', 'Unamani AI', 'Business Ventures', 'Entrepreneurial Portfolio'],
  url: '/ventures',
})

export default function VenturesPage() {
  return (
    <>
      <VenturesHero />
      <VenturesDashboard />
      <CompanyDetails />
      <VentureMetrics />
      <TeamSection />
    </>
  )
}

