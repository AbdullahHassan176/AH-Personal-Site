'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Global Next AI Think Tank Platform',
    description: 'Revolutionary AI research platform connecting global experts, facilitating collaborative innovation, and accelerating breakthrough discoveries in artificial intelligence.',
    tags: ['AI Research', 'Platform Development', 'Innovation'],
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/4b798647a2-6d2b07ea9d36eab16cac.png',
  },
  {
    title: 'Quantum-Enhanced Trading Algorithm',
    description: 'Next-generation trading system leveraging quantum computing principles for ultra-fast market analysis and prediction with unprecedented accuracy.',
    tags: ['Quantum Computing', 'Trading', 'AI'],
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/4b798647a2-6d2b07ea9d36eab16cac.png',
  },
  {
    title: 'Autonomous Supply Chain Network',
    description: 'Self-managing logistics ecosystem using AI agents to optimise global trade routes, predict demand, and minimise environmental impact.',
    tags: ['Logistics', 'AI Agents', 'Sustainability'],
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/4b798647a2-6d2b07ea9d36eab16cac.png',
  },
]

export function FeaturedShowcase() {
  const [current, setCurrent] = useState(0)
  const project = projects[current]

  return (
    <section className="py-16" style={{ background: 'rgba(245,239,230,0.30)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="liquid-metal-card p-8 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold text-[#FBF7F1]"
                  style={{ background: '#6B1F2A' }}
                >
                  ★ FEATURED
                </span>
                <span className="text-[#5F5A55] text-sm">AI-Powered Selection</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4 text-[#1A1A1A]">
                {project.title}
              </h2>

              <p className="text-[#5F5A55] text-base mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-mono"
                    style={{
                      background: 'rgba(198,161,91,0.12)',
                      border: '1px solid rgba(198,161,91,0.35)',
                      color: '#6B1F2A',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="btn-burgundy inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  View Project
                </button>
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-[rgba(107,31,42,0.25)] text-[#6B1F2A] hover:border-[#C6A15B] hover:text-[#C6A15B] transition-colors"
                  onClick={() => setCurrent((current + 1) % projects.length)}
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="holographic-card p-4">
              <Image
                className="w-full h-56 lg:h-64 rounded-xl object-cover"
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
