import { Profile } from '@/lib/data'
import { readJSON } from '@/lib/data'

interface AboutHeroProps {
  profile: Profile
}

export function AboutHero({ profile }: AboutHeroProps) {
  const images = readJSON('images.json')
  return (
    <section className="pt-24 pb-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400/30">
                <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Entrepreneur & AI Specialist
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 text-white leading-tight">
              About <span className="text-yellow-400">{profile.fullName}</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {profile.summary}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
                <div className="text-gray-400">Active Ventures</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="text-3xl font-bold text-teal-400 mb-2">7+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover-glow transition-all">
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                View Ventures
              </button>
              <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-medium hover:border-yellow-400 hover:text-yellow-400 transition-all">
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </button>
            </div>
          </div>
          
          {/* Right Portrait */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-teal-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gray-800 rounded-3xl p-2 hover-glow">
                <img 
                  className="w-full h-auto rounded-2xl object-cover" 
                  style={{ objectPosition: '70% center' }}
                  src={images.profile.main}
                  alt={images.profile.alt}
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
                <div className="text-yellow-400 text-2xl font-bold">AI</div>
                <div className="text-gray-400 text-sm">Expert</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
                <div className="text-teal-400 text-2xl font-bold">CEO</div>
                <div className="text-gray-400 text-sm">Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}