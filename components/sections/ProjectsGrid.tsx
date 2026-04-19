'use client'

import { useState } from 'react'
import { Project } from '@/lib/data'

interface ProjectsGridProps {
  projects: Project[]
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
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}
function IconLogistics({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </svg>
  )
}
function IconFinTech({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
function IconWeb({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
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
    <section className="py-20" style={{ background: 'rgba(245,239,230,0.30)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            Work
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A]">
            Project <span className="gradient-text-brand">Portfolio</span>
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-5 py-2.5 rounded-full font-medium text-sm transition-all"
              style={
                activeFilter === cat
                  ? { background: '#6B1F2A', color: '#FBF7F1' }
                  : { background: 'rgba(245,239,230,0.80)', border: '1px solid rgba(198,161,91,0.20)', color: '#5F5A55' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filtered.map((project, index) => {
            const Icon = categoryIcon[project.category]
            return (
              <div key={index} className="holographic-card p-8 flex flex-col">
                {/* Header */}
                <div className="flex items-center mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ background: '#6B1F2A' }}
                  >
                    {Icon
                      ? <Icon className="w-5 h-5 text-[#FBF7F1]" />
                      : <span className="text-[#FBF7F1] font-bold text-sm">{project.category[0]}</span>
                    }
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] leading-snug">{project.name}</h3>
                    <p className="text-[#5F5A55] text-xs mt-0.5">{project.year} · {project.category}</p>
                  </div>
                </div>

                <p className="text-[#5F5A55] mb-5 leading-relaxed text-sm flex-1">{project.summary}</p>

                {/* Outcomes */}
                <div className="mb-5">
                  <h4 className="text-[#1A1A1A] font-semibold text-sm mb-3">Key Outcomes</h4>
                  <div className="space-y-2">
                    {project.outcomes.map((outcome, oi) => (
                      <div key={oi} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#C6A15B' }} />
                        <span className="text-[#5F5A55] text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, ti) => (
                      <span
                        key={ti}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono"
                        style={{
                          background: 'rgba(198,161,91,0.10)',
                          border: '1px solid rgba(198,161,91,0.30)',
                          color: '#6B1F2A',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 flex-wrap">
                  {project.links.site && (
                    <a
                      href={project.links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-burgundy inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      View Site
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-[rgba(107,31,42,0.25)] text-[#6B1F2A] hover:border-[#C6A15B] hover:text-[#C6A15B] transition-colors"
                    >
                      View Code
                    </a>
                  )}
                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-[rgba(107,31,42,0.25)] text-[#6B1F2A] hover:border-[#C6A15B] hover:text-[#C6A15B] transition-colors"
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
