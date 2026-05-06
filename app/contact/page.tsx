import { ContactHero } from '@/components/sections/ContactHero'
import { ContactForm } from '@/components/sections/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { ContactMap } from '@/components/sections/ContactMap'
import { readJSON } from '@/lib/server-data'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Contact Abdullah Hassan — Modelling & Advisory',
  description:
    'Book financial modelling, valuation advisory, AI builds, or venture discussions with Abdullah Hassan — Dubai-based, available globally.',
  keywords: ['Contact financial modeller UAE', 'DCF consultant', 'valuation advisory', 'AI consulting'],
  url: '/contact',
})

export default function ContactPage() {
  const contact = readJSON('contact.json')

  return (
    <div className="min-h-screen bg-[#FBF7F1]">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14">
          <ContactForm />
          <ContactInfo contact={contact} />
        </div>
      </div>
      <ContactMap />
    </div>
  )
}
