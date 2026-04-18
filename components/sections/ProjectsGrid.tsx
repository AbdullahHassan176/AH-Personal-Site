'use client'

import { useState } from 'react'
import { Project } from '@/lib/data'

interface ProjectsGridProps {
  projects: Project[]
}

// Explicit color maps — Tailwind JIT requires full literal class names
const colorMap: Record<string, { bg: string; text: string; border: string; bgLight: string; dot: string }> = {
  purple: { bg: 'bg-purple-400', text: 'text-purple-400', border: 'border-purple-400', bgLight: 'bg-purple-400/10', dot: 'bg-purple-400' },
  yellow: { bg: 'bg-yellow-400', text: 'text-yellow-400', border: 'border-yellow-400', bgLight: 'bg-yellow-400/10', dot: 'bg-yellow-400' },
  teal:   { bg: 'bg-teal-400',   text: 'text-teal-400',   border: 'border-teal-400',   bgLight: 'bg-teal-400/10',   dot: 'bg-teal-400'   },
  green:  { bg: 'bg-green-400',  text: 'text-green-400',  border: 'border-green-400',  bgLight: 'bg-green-400/10',  dot: 'bg-green-400'  },
  blue:   { bg: 'bg-blue-400',   text: 'text-blue-400',   border: 'border-blue-400',   bgLight: 'bg-blue-400/10',   dot: 'bg-blue-400'   },
  gray:   { bg: 'bg-gray-400',   text: 'text-gray-400',   border: 'border-gray-400',   bgLight: 'bg-gray-400/10',   dot: 'bg-gray-400'   },
}

const categoryColor: Record<string, string> = {
  'Web3 / Tokenization': 'purple',
  'AI & Quant Research': 'yellow',
  'Logistics':           'teal',
  'FinTech':             'green',
  'Web':                 'blue',
}

// Category-specific SVG icons
function IconTokenization({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  )
}

function IconResearch({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      <path d="M9 9h6M9 12h3" strokeLinecap="round" />
    </svg>
  )
}

function IconLogistics({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  )
}

function IconFinTech({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
    </svg>
  )
}

function IconWeb({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  )
}

const categoryIcon: Record<string, (props: { className?: string }) => JSX.Element> = {
  'Web3 / Tokenization': IconTokenization,
  'AI & Quant Research': IconResearch,
  'Logistics':           IconLogistics,
  'FinTech':             IconFinTech,
  'Web':                 IconWeb,
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Project <span className="text-yellow-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Innovative solutions that demonstrate technical expertise and business impact
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeFilter === cat ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filtered.map((project, index) => {
            const colorKey = categoryColor[project.category] || 'gray'
            const c = colorMap[colorKey]
            const Icon = categoryIcon[project.category]

            return (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover-glow">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                    {Icon ? (
                      <Icon className="w-6 h-6 text-gray-900" />
                    ) : (
                      <span className="text-gray-900 font-bold text-sm">{project.category[0]}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                    <p className="text-gray-400 text-sm">{project.year} · {project.category}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.summary}</p>

                {/* Outcomes */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Outcomes</h4>
                  <div className="space-y-2">
                    {project.outcomes.map((outcome, oi) => (
                      <div key={oi} className="flex items-start">
                        <div className={`w-2 h-2 ${c.dot} rounded-full mr-3 mt-1.5 flex-shrink-0`} />
                        <span className="text-gray-300 text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, ti) => (
                      <span key={ti} className={`px-3 py-1 rounded-full text-xs font-medium ${c.bgLight} ${c.border} border ${c.text}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.links.site && (
                    <a
                      href={project.links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover-glow transition-all"
                    >
                      View Site
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:border-yellow-400 hover:text-yellow-400 transition-all"
                    >
                      View Code
                    </a>
                  )}
                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:border-yellow-400 hover:text-yellow-400 transition-all"
                    >
                      Read Paper
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
