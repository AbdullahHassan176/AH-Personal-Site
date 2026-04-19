import { Contact } from '@/lib/server-data'

interface ContactInfoProps {
  contact: Contact
}

export function ContactInfo({ contact }: ContactInfoProps) {
  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <div className="holographic-card p-8">
        <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-3">
          Direct Contact
        </p>
        <h3 className="text-2xl font-playfair font-bold mb-6 text-[#1A1A1A]">
          Get in <span className="gradient-text-brand">Touch</span>
        </h3>

        <div className="space-y-5">
          {[
            {
              label: 'Email',
              value: contact.email,
              href: `mailto:${contact.email}`,
              icon: (<><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></>),
            },
            {
              label: 'Phone',
              value: contact.phone,
              href: `tel:${contact.phone}`,
              icon: (<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />),
            },
            {
              label: 'Location',
              value: 'Global Operations · Available Worldwide',
              href: null,
              icon: (<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />),
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 rounded-xl" style={{ background: '#6B1F2A' }}>
                <svg className="w-5 h-5 text-[#FBF7F1]" fill="currentColor" viewBox="0 0 20 20">{item.icon}</svg>
              </div>
              <div>
                <div className="text-[#5F5A55] text-xs font-mono uppercase tracking-wider mb-0.5">{item.label}</div>
                {item.href
                  ? <a href={item.href} className="text-[#1A1A1A] hover:text-[#6B1F2A] transition-colors text-sm font-medium">{item.value}</a>
                  : <div className="text-[#1A1A1A] text-sm font-medium">{item.value}</div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="holographic-card p-8">
        <h3 className="text-xl font-playfair font-bold mb-5 text-[#1A1A1A]">
          Connect on <span className="gradient-text-brand">Social</span>
        </h3>
        <div className="space-y-3">
          {contact.social.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-xl transition-all group"
              style={{ background: 'rgba(245,239,230,0.60)', border: '1px solid rgba(198,161,91,0.15)' }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0 transition-colors"
                style={{ background: 'rgba(107,31,42,0.10)' }}
              >
                {social.platform === 'LinkedIn' && (
                  <svg className="w-4 h-4 text-[#6B1F2A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {social.platform === 'Twitter' && (
                  <svg className="w-4 h-4 text-[#6B1F2A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                )}
                {social.platform === 'YouTube' && (
                  <svg className="w-4 h-4 text-[#6B1F2A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <div className="text-[#1A1A1A] font-medium text-sm">{social.platform}</div>
                <div className="text-[#5F5A55] text-xs">Follow for updates</div>
              </div>
              <svg className="w-4 h-4 text-[#C6A15B] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="holographic-card p-8">
        <h3 className="text-xl font-playfair font-bold mb-5 text-[#1A1A1A]">Quick Actions</h3>
        <div className="space-y-3">
          <a
            href={contact.social[0]?.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-burgundy flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
          <a
            href={contact.calendar || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-colors text-[#FBF7F1]"
            style={{ background: '#1F6F54' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Schedule Meeting
          </a>
        </div>
      </div>
    </div>
  )
}
