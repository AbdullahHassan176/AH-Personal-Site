'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Profile, Images } from '@/lib/server-data'

interface HeroSectionProps {
  profile: Profile
  images: Images
}

export function HeroSection({ profile, images }: HeroSectionProps) {
  useEffect(() => {
    // Add animation delay to particles
    const particles = document.querySelectorAll('.particle')
    particles.forEach((particle, index) => {
      (particle as HTMLElement).style.animationDelay = `${index * 0.5}s`
    })
  }, [])

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden animated-gradient flex items-center">
      {/* Floating Particles */}
      <div className="particle" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
      <div className="particle" style={{top: '60%', left: '20%', animationDelay: '1s'}}></div>
      <div className="particle" style={{top: '30%', right: '15%', animationDelay: '2s'}}></div>
      <div className="particle" style={{top: '80%', right: '30%', animationDelay: '3s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="fade-in">
          <div className="mb-6">
            <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400/30">
              <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Available for Ventures
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
            <span className="text-white">{profile.fullName.split(' ')[0]}</span><br />
            <span className="text-yellow-400 glow-text typing-animation">{profile.fullName.split(' ')[1]}</span>
          </h1>
          
          <h2 className="text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
            {profile.headline}
          </h2>
          
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
            {profile.summary.substring(0, 200)}...
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover-glow transition-all">
              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              Explore Ventures
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-medium hover:border-yellow-400 hover:text-yellow-400 transition-all">
              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              About Me
            </button>
          </div>
        </div>
        
        {/* Right Portrait */}
        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-teal-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gray-800 rounded-3xl p-2 hover-glow">
              <Image 
                className="w-full h-auto rounded-2xl object-cover" 
                src={images.profile.main}
                alt={images.profile.alt}
                width={400}
                height={500}
                priority
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
              <div className="text-yellow-400 text-2xl font-bold">5+</div>
              <div className="text-gray-400 text-sm">Ventures</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
              <div className="text-teal-400 text-2xl font-bold">AI</div>
              <div className="text-gray-400 text-sm">Expert</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-gray-500 text-sm mb-2">Scroll to explore</div>
        <svg className="w-6 h-6 text-yellow-400 animate-bounce mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}