'use client'

import { useState } from 'react'

// Sub-skill level tier colours
const TIER_STYLE: Record<string, { color: string; bg: string; border: string }> = {
  Expert:       { color: '#1F6F54', bg: 'rgba(31,111,84,0.10)',  border: 'rgba(31,111,84,0.30)'  },
  Advanced:     { color: '#C6A15B', bg: 'rgba(198,161,91,0.10)', border: 'rgba(198,161,91,0.30)' },
  Intermediate: { color: '#6B1F2A', bg: 'rgba(107,31,42,0.10)', border: 'rgba(107,31,42,0.30)'  },
}

const technicalSkills = [
  {
    name: 'Artificial Intelligence',
    pct:  95,
    desc: 'Machine Learning, Deep Learning, Neural Networks',
    subs: [
      { name: 'Deep Learning',          level: 'Expert'       },
      { name: 'NLP',                    level: 'Advanced'     },
      { name: 'Computer Vision',        level: 'Advanced'     },
      { name: 'Reinforcement Learning', level: 'Intermediate' },
    ],
  },
  {
    name: 'Quantitative Finance',
    pct:  90,
    desc: 'Financial Modelling, Risk Management, Trading',
    subs: [
      { name: 'Risk Management',         level: 'Expert'   },
      { name: 'Derivatives',             level: 'Advanced' },
      { name: 'Algorithmic Trading',     level: 'Advanced' },
      { name: 'Portfolio Optimisation',  level: 'Advanced' },
    ],
  },
  {
    name: 'Blockchain & DeFi',
    pct:  85,
    desc: 'Smart Contracts, Tokenization, DeFi Protocols',
    subs: [
      { name: 'Smart Contracts',        level: 'Advanced'     },
      { name: 'Tokenization',           level: 'Expert'       },
      { name: 'DeFi Protocols',         level: 'Advanced'     },
      { name: 'Consensus Mechanisms',   level: 'Intermediate' },
    ],
  },
  {
    name: 'Data Science',
    pct:  88,
    desc: 'Statistics, Analytics, Big Data',
    subs: [
      { name: 'Statistical Modelling',  level: 'Expert'   },
      { name: 'Big Data',               level: 'Advanced' },
      { name: 'Data Visualisation',     level: 'Advanced' },
      { name: 'Predictive Analytics',   level: 'Expert'   },
    ],
  },
]

const softSkills = [
  {
    name: 'Leadership',
    pct:  88,
    desc: 'Team Management, Strategic Planning, Vision',
    subs: [
      { name: 'Team Building',      level: 'Expert'   },
      { name: 'Strategic Planning', level: 'Expert'   },
      { name: 'Decision Making',    level: 'Advanced' },
      { name: 'Crisis Management',  level: 'Advanced' },
    ],
  },
  {
    name: 'Communication',
    pct:  85,
    desc: 'Public Speaking, Negotiation, Presentation',
    subs: [
      { name: 'Public Speaking',            level: 'Expert'   },
      { name: 'Negotiation',                level: 'Advanced' },
      { name: 'Presentation',               level: 'Expert'   },
      { name: 'Cross-cultural Comms',       level: 'Advanced' },
    ],
  },
  {
    name: 'Innovation',
    pct:  92,
    desc: 'Creative Problem Solving, Design Thinking',
    subs: [
      { name: 'Design Thinking',    level: 'Expert'   },
      { name: 'Product Development', level: 'Advanced' },
      { name: 'Market Analysis',    level: 'Advanced' },
      { name: 'Prototyping',        level: 'Advanced' },
    ],
  },
  {
    name: 'Entrepreneurship',
    pct:  90,
    desc: 'Business Development, Fundraising, Scaling',
    subs: [
      { name: 'Business Strategy',      level: 'Expert'   },
      { name: 'Fundraising',            level: 'Advanced' },
      { name: 'Scaling',                level: 'Advanced' },
      { name: 'Partnership Development', level: 'Advanced' },
    ],
  },
]

export function SkillsDashboard() {
  const [tab, setTab] = useState<'technical' | 'soft'>('technical')
  const skills = tab === 'technical' ? technicalSkills : softSkills

  return (
    <section className="py-32 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            Expertise
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A]">
            Skills{' '}
            <span className="gradient-text-brand">Dashboard</span>
          </h2>
          <p className="text-[#5F5A55] text-base mt-4 max-w-lg leading-relaxed">
            Comprehensive overview of technical expertise and soft skills across AI, finance, leadership, and innovation.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex gap-1 p-1 rounded-[var(--radius-md)]"
            style={{ background: '#EFE6DA', border: '1px solid rgba(214,195,163,0.40)' }}
          >
            {(['technical', 'soft'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-8 py-2.5 rounded-[calc(var(--radius-md)-2px)] text-sm font-semibold transition-all duration-200"
                style={
                  tab === t
                    ? {
                        background: '#6B1F2A',
                        color: '#F5EFE6',
                        boxShadow: '0 2px 12px rgba(107,31,42,0.25)',
                      }
                    : { color: '#5F5A55' }
                }
              >
                {t === 'technical' ? 'Technical' : 'Soft Skills'}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {skills.map(skill => (
            <div key={skill.name} className="holographic-card p-7">
              {/* Title row */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-0.5">{skill.name}</h3>
                  <p className="text-[#5F5A55] text-xs">{skill.desc}</p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <div
                    className="text-2xl font-bold font-playfair leading-none"
                    style={{ color: '#C6A15B' }}
                  >
                    {skill.pct}%
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-[#B8AEA1] mt-0.5">
                    Proficiency
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div
                className="w-full rounded-full overflow-hidden mb-6"
                style={{ height: '5px', background: 'rgba(214,195,163,0.30)' }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${skill.pct}%`,
                    background: 'linear-gradient(90deg, #6B1F2A, #C6A15B, #1F6F54)',
                    transition: 'width 1s cubic-bezier(0.4,0,0.2,1)',
                  }}
                />
              </div>

              {/* Sub-skills */}
              <div className="grid grid-cols-2 gap-2.5">
                {skill.subs.map((sub, i) => {
                  const t = TIER_STYLE[sub.level] ?? TIER_STYLE.Intermediate
                  return (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-[#5F5A55] text-xs truncate">{sub.name}</span>
                      <span
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-pill ml-2 flex-shrink-0"
                        style={{
                          color:        t.color,
                          background:   t.bg,
                          border:       `1px solid ${t.border}`,
                        }}
                      >
                        {sub.level}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
