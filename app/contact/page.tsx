import { ContactHero } from '@/components/sections/ContactHero'
import { ContactForm } from '@/components/sections/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { ContactMap } from '@/components/sections/ContactMap'
import { RocketAnimation } from '@/components/animations/RocketAnimation'
import { readJSON } from '@/lib/server-data'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Contact Abdullah Hassan - Get In Touch',
  description: 'Get in touch with Abdullah Hassan for business opportunities, partnerships, speaking engagements, and collaboration. Connect for AI consulting, technology partnerships, and entrepreneurial ventures.',
  keywords: ['Contact Abdullah Hassan', 'Business Contact', 'AI Consulting', 'Partnership Opportunities', 'Speaking Engagements'],
  url: '/contact',
})

export default function ContactPage() {
  const contact = readJSON('contact.json')

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Rocket Animation Background */}
      <RocketAnimation />
      
      {/* Contact Hero */}
      <ContactHero />
      
      {/* Contact Form & Info */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo contact={contact} />
          </div>
        </div>
        
        {/* Contact Map */}
        <ContactMap />
      </div>
    </div>
  )
}
