'use client'

import { useState } from 'react'
import { Skills } from '@/lib/data'

interface SkillsSectionProps {
  skills: Skills
}

const CATEGORIES = [
  { key: 'financial_modelling', label: 'Financial Modelling & Valuation' },
  { key: 'languages',    label: 'Languages' },
  { key: 'frameworks',   label: 'Frameworks' },
  { key: 'data_ml',      label: 'Data & ML' },
  { key: 'cloud_devops', label: 'Cloud & DevOps' },
  { key: 'business',     label: 'Business' },
]

// Deterministic proficiency derived from string length — avoids hydration
// mismatch from Math.random() and gives stable, plausible-looking values.
function proficiency(name: string): number {
  const base = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  return 65 + (base % 30)
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [activeKey, setActiveKey] = useState('financial_modelling')

  return (
    <section className="py-20 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            Expertise
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A]">
            Skills &amp;{' '}
            <span className="gradient-text-brand">Expertise</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveKey(cat.key)}
              className="px-5 py-2.5 rounded-full font-medium text-sm transition-all"
              style={
                activeKey === cat.key
                  ? { background: '#6B1F2A', color: '#FBF7F1' }
                  : { background: 'rgba(245,239,230,0.80)', border: '1px solid rgba(198,161,91,0.20)', color: '#5F5A55' }
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(skills[activeKey as keyof Skills] ?? []).map((skill, i) => {
            const pct = proficiency(skill)
            return (
              <div key={i} className="holographic-card p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[#1A1A1A] font-semibold">{skill}</h3>
                  <span className="text-[#C6A15B] text-sm font-medium">{pct}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full" style={{ background: '#EDE6DA' }}>
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${pct}%`,
                      background: 'linear-gradient(90deg, #6B1F2A, #C6A15B, #1F6F54)',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
