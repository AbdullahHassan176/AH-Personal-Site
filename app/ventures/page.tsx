import { VenturesHero } from '@/components/sections/VenturesHero'
import { VenturesDashboard } from '@/components/sections/VenturesDashboard'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Ventures - Safe Labs, Global Next, Unamani AI',
  description:
    'Active ventures: Global Next (RWA logistics + trade finance), Safe Labs (quant research & AI studio), Unamani AI, Petigree/Hurayra Halal FMCG, Global Marketplace trade portal.',
  keywords: ['Safe Labs', 'Global Next', 'Unamani AI', 'RWA tokenisation', 'UAE entrepreneur', 'Financial modelling'],
  url: '/ventures',
})

export default function VenturesPage() {
  return (
    <>
      <VenturesHero />
      <VenturesDashboard />
    </>
  )
}
