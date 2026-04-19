'use client'

import { useState } from 'react'

export function PortfolioHeader() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleRandomShowcase = () => {
    setIsGenerating(true)
    setTimeout(() => setIsGenerating(false), 1500)
  }

  return (
    <section className="pt-28 pb-16 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-6">
          Portfolio
        </p>
        <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-5 text-[#1A1A1A] leading-tight">
          Project <span className="gradient-text-brand">Portfolio</span>
        </h1>
        <p className="text-[#5F5A55] text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Innovative projects, academic research, and venture presentations spanning AI, finance, logistics, and emerging technologies.
        </p>

        <button
          onClick={handleRandomShowcase}
          disabled={isGenerating}
          className="btn-burgundy inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg disabled:opacity-50"
        >
          {isGenerating ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Generating…
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              AI Random Showcase
            </>
          )}
        </button>
      </div>
    </section>
  )
}
