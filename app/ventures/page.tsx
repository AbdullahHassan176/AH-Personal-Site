import { VenturesHero } from '@/components/sections/VenturesHero'
import { VenturesDashboard } from '@/components/sections/VenturesDashboard'
import { CompanyDetails } from '@/components/sections/CompanyDetails'
import { VentureMetrics } from '@/components/sections/VentureMetrics'
import { TeamSection } from '@/components/sections/TeamSection'

export const metadata = {
  title: 'Ventures - Abdullah Hassan',
  description: 'Explore Abdullah Hassan\'s portfolio of innovative ventures including Global Next AI Think Tank, Unamani AI, Global Edge Trading, and more.',
}

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

