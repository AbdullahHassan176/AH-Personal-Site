'use client'

import { useState } from 'react'

export function PortfolioHeader() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleRandomShowcase = () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false)
    }, 1500)
  }

  return (
    <section id="portfolio-header" className="pt-32 pb-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 text-white">
            Project <span className="text-yellow-400 glow-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of innovative projects, academic research, and venture presentations spanning AI, finance, logistics, and emerging technologies.
          </p>
        </div>
        
        {/* AI Random Showcase Button */}
        <div className="flex justify-center mb-16">
          <button 
            onClick={handleRandomShowcase}
            disabled={isGenerating}
            className="random-showcase bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover-glow disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <svg className="w-5 h-5 inline mr-3 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                AI Generating...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                AI Random Showcase
                <svg className="w-5 h-5 inline ml-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

