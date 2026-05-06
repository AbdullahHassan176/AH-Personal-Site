'use client'

import { useEffect, useRef } from 'react'

interface TechnicalSkillsProps {
  isVisible: boolean
  viewMode: string
}

const skills = [
  {
    name: 'Financial Modelling',
    percentage: 93,
    description: 'DCF · NAV · Lending · XVA',
    ringColor: '#1F6F54',
    subSkills: [
      { name: 'DCF & valuations',     level: 'Expert',   color: '#1F6F54' },
      { name: 'ETF NAV / iNAV',         level: 'Expert',   color: '#C6A15B' },
      { name: 'Excel (advanced)',       level: 'Expert',   color: '#6B1F2A' },
    ],
  },
  {
    name: 'AI / ML',
    percentage: 95,
    description: 'Production ML & Neural Stacks',
    ringColor: '#6B1F2A',
    subSkills: [
      { name: 'Deep Learning',       level: 'Expert',     color: '#1F6F54' },
      { name: 'NLP',                 level: 'Advanced',   color: '#C6A15B' },
      { name: 'Generative pipelines', level: 'Advanced',  color: '#6B1F2A' },
    ],
  },
  {
    name: 'Tokenization',
    percentage: 88,
    description: 'RWAs · Oracles · Issuance',
    ringColor: '#C6A15B',
    subSkills: [
      { name: 'RWA architecture',     level: 'Expert',    color: '#1F6F54' },
      { name: 'Smart contracts',      level: 'Advanced',  color: '#C6A15B' },
      { name: 'Investor portals',     level: 'Advanced',  color: '#6B1F2A' },
    ],
  },
  {
    name: 'Logistics & Ops',
    percentage: 86,
    description: 'Trade · Compliance · Margin',
    ringColor: '#1F6F54',
    subSkills: [
      { name: 'Import / distribution', level: 'Expert',   color: '#1F6F54' },
      { name: 'MOCCAE & trade lanes',   level: 'Advanced', color: '#C6A15B' },
      { name: 'Ops automation',         level: 'Advanced', color: '#6B1F2A' },
    ],
  },
  {
    name: 'Data Science',
    percentage: 90,
    description: 'Stats · Diagnostics · Viz',
    ringColor: '#6B1F2A',
    subSkills: [
      { name: 'Statistical modelling', level: 'Expert',   color: '#1F6F54' },
      { name: 'Forecasting discipline',level: 'Advanced', color: '#C6A15B' },
      { name: 'BI storytelling',       level: 'Expert',   color: '#6B1F2A' },
    ],
  },
]

const levelColor: Record<string, string> = {
  Expert:       '#1F6F54',
  Advanced:     '#C6A15B',
  Intermediate: '#6B1F2A',
}

export function TechnicalSkills({ isVisible, viewMode }: TechnicalSkillsProps) {
  const barsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const el = document.getElementById('technical-skills')
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          barsRef.current.forEach((bar, i) => {
            if (!bar) return
            const w = bar.dataset.width ?? '0%'
            bar.style.width = '0%'
            setTimeout(() => { bar.style.width = w }, i * 150)
          })
        }
      })
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (!isVisible) return null

  return (
    <section id="technical-skills" className="py-12" style={{ background: 'rgba(245,239,230,0.30)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="holographic-card p-6 sm:p-7 text-center xl:text-center">
              {viewMode === 'radial' ? (
                <div className="relative w-28 h-28 mx-auto mb-5">
                  <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="rgba(198,161,91,0.18)" strokeWidth="8" fill="none" />
                    <circle
                      cx="50" cy="50" r="40" fill="none"
                      stroke={skill.ringColor}
                      strokeWidth="8"
                      strokeDasharray={`${skill.percentage * 2.51} 251`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold" style={{ color: skill.ringColor }}>{skill.percentage}%</span>
                  </div>
                </div>
              ) : (
                <div className="mb-5 text-left">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[#1A1A1A] text-sm font-semibold">{skill.name}</span>
                    <span className="text-sm font-bold" style={{ color: skill.ringColor }}>{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full" style={{ background: '#EDE6DA' }}>
                    <div
                      ref={el => { barsRef.current[index] = el }}
                      data-width={`${skill.percentage}%`}
                      className="h-2 rounded-full transition-all duration-700"
                      style={{
                        width: `${skill.percentage}%`,
                        background: 'linear-gradient(90deg, #6B1F2A, #C6A15B, #1F6F54)',
                      }}
                    />
                  </div>
                </div>
              )}

              <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] mb-1 leading-snug">{skill.name}</h3>
              <p className="text-[#5F5A55] text-xs mb-4 leading-relaxed">{skill.description}</p>

              <div className="space-y-1.5 text-sm">
                {skill.subSkills.map(sub => (
                  <div key={sub.name} className="flex justify-between items-center gap-2">
                    <span className="text-[#5F5A55] text-xs text-left">{sub.name}</span>
                    <span className="text-xs font-medium flex-shrink-0" style={{ color: levelColor[sub.level] ?? '#C6A15B' }}>
                      {sub.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
