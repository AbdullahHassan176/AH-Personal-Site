import { Profile } from '@/lib/data'

interface AboutContentProps {
  profile: Profile
}

export function AboutContent({ profile }: AboutContentProps) {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-playfair font-bold mb-8 text-white">
              My <span className="text-yellow-400">Story</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                {profile.summary}
              </p>
              
              <p>
                My approach combines deep technical expertise with entrepreneurial vision, creating solutions that not only work today but are designed to scale and adapt to tomorrow's challenges. I believe in the power of AI to democratize access to advanced financial tools and create more efficient global trade systems.
              </p>
              
              <p>
                Beyond business, I'm committed to sharing knowledge through speaking engagements, research publications, and mentoring the next generation of entrepreneurs. My goal is to build a future where technology serves humanity's greatest needs.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-yellow-400">Current Focus</h3>
              <div className="space-y-4">
                {profile.currentFocus.map((focus, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Focus Area {index + 1}</h4>
                      <p className="text-gray-400">{focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-yellow-400">Location & Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{profile.location}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-300">{profile.emails[0]}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-300">{profile.phones[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}