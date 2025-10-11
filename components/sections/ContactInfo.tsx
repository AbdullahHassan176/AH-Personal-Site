import { Contact } from '@/lib/server-data'

interface ContactInfoProps {
  contact: Contact
}

export function ContactInfo({ contact }: ContactInfoProps) {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
        <h3 className="text-2xl font-playfair font-bold mb-6 text-white">
          Get in <span className="text-teal-400">Touch</span>
        </h3>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <div className="text-gray-300 font-medium mb-1">Email</div>
              <a 
                href={`mailto:${contact.email}`}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-teal-400 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 00.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <div className="text-gray-300 font-medium mb-1">Phone</div>
              <a 
                href={`tel:${contact.phone}`}
                className="text-white hover:text-teal-400 transition-colors"
              >
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="text-gray-300 font-medium mb-1">Location</div>
              <div className="text-white">Global Operations</div>
              <div className="text-gray-400 text-sm">Available Worldwide</div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
        <h3 className="text-2xl font-playfair font-bold mb-6 text-white">
          Connect on <span className="text-yellow-400">Social</span>
        </h3>

        <div className="space-y-4">
          {contact.social.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors group"
            >
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-yellow-400 transition-colors">
                {social.platform === 'LinkedIn' && (
                  <svg className="w-5 h-5 text-white group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {social.platform === 'Twitter' && (
                  <svg className="w-5 h-5 text-white group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                )}
                {social.platform === 'YouTube' && (
                  <svg className="w-5 h-5 text-white group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                )}
              </div>
              <div>
                <div className="text-white font-medium">{social.platform}</div>
                <div className="text-gray-400 text-sm">Follow for updates</div>
              </div>
              <svg className="w-4 h-4 text-gray-400 ml-auto group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-yellow-400/10 to-teal-400/10 rounded-2xl p-8 border border-yellow-400/20">
        <h3 className="text-2xl font-playfair font-bold mb-4 text-white">
          Quick <span className="text-yellow-400">Actions</span>
        </h3>
        <div className="space-y-4">
          <a
            href={contact.social[0]?.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-center"
          >
            <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
          
          <a 
            href="https://calendly.com/unamani-globalnext/chat-with-abdullah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Schedule Meeting
          </a>
        </div>
      </div>
    </div>
  )
}
