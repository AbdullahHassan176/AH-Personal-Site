import { VenturesHero } from '@/components/sections/VenturesHero'
import { VenturesDashboard } from '@/components/sections/VenturesDashboard'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Ventures - Abdullah Hassan',
  description: 'Explore Abdullah Hassan\'s ventures: Deloitte quant consulting, Unamani Pty Ltd (AI & data), and Petigree Global / Hurayra Halal (UAE import & distribution).',
  keywords: ['Abdullah Hassan Ventures', 'Unamani', 'Petigree Global', 'Hurayra Halal', 'Deloitte Quant', 'Business Ventures'],
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
