'use client'

import { useEffect, useRef } from 'react'

const skills = [
  { label: 'AI / ML',        pct: 95 },
  { label: 'Quant Finance',  pct: 90 },
  { label: 'Leadership',     pct: 88 },
  { label: 'Innovation',     pct: 92 },
]

const timeline = [
  {
    year:    '2022 – Present',
    title:   'Quant / Financial Engineering',
    company: 'Deloitte South Africa',
    note:    'Quantitative model building, risk analytics, reproducible research pipelines.',
  },
  {
    year:    '2024 – Present',
    title:   'Founder / CEO',
    company: 'Unamani Pty Ltd',
    note:    'AI-forward data products; incubates Global Edge and Global Marketplace.',
  },
  {
    year:    '2024 – Present',
    title:   'Founder / Operator',
    company: 'Petigree Global / Hurayra Halal',
    note:    'UAE mainland import & distribution of Montego halal pet food.',
  },
  {
    year:    '2025 – Present',
    title:   'MSc Mathematical Statistics',
    company: 'University of the Witwatersrand',
    note:    'Research: Normalizing Flows + GARCH for synthetic financial time series.',
  },
]

export function AboutSection() {
  const barsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const bars = barsRef.current
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            bars.forEach((bar, i) => {
              if (!bar) return
              const target = bar.dataset.width ?? '0%'
              bar.style.width = '0%'
              setTimeout(() => { bar.style.width = target }, i * 150)
            })
          }
        })
      },
      { threshold: 0.3 }
    )
    const section = document.getElementById('about')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            About
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A]">
            About{' '}
            <span className="gradient-text-brand">Abdullah</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — bio + skills */}
          <div>
            <div className="space-y-5 text-[#5F5A55] text-base leading-[1.8] mb-12">
              <p>
                A results-driven technologist and entrepreneur operating at the intersection of AI,
                quantitative finance, and real-world asset tokenization. Leading multi-disciplinary teams
                to build data products, investor/issuer portals, and Azure-first platforms.
              </p>
              <p>
                His work spans normalizing-flow GARCH research, synthetic data generation, FX &amp; equity
                modelling, and the architecture of tokenization ecosystems for logistics and real estate.
              </p>
              <p>
                Abdullah blends rigorous analytical training with hands-on full-stack execution to ship
                valuable, scalable software — across South Africa and the UAE.
              </p>
            </div>

            {/* Skill bars */}
            <div className="space-y-5">
              {skills.map(({ label, pct }, i) => (
                <div key={label} className="holographic-card p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#1A1A1A] text-sm font-medium">{label}</span>
                    <span
                      className="font-mono text-xs font-semibold"
                      style={{ color: '#C6A15B' }}
                    >
                      {pct}%
                    </span>
                  </div>
                  <div
                    className="w-full rounded-full overflow-hidden"
                    style={{ height: '6px', background: 'rgba(214,195,163,0.30)' }}
                  >
                    <div
                      ref={el => { barsRef.current[i] = el }}
                      data-width={`${pct}%`}
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: '0%',
                        background: 'linear-gradient(90deg, #6B1F2A, #C6A15B, #1F6F54)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — timeline */}
          <div className="liquid-metal-card p-8">
            <h3 className="text-xl font-playfair font-bold text-[#1A1A1A] mb-8">
              Career Journey
            </h3>

            <div className="relative">
              {/* Vertical spine */}
              <div
                className="absolute left-[7px] top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, #6B1F2A, #C6A15B, #1F6F54)' }}
              />

              <div className="space-y-8 pl-8">
                {timeline.map(({ year, title, company, note }, i) => (
                  <div key={i} className="relative">
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full border-2"
                      style={{ background: '#FBF7F1', borderColor: '#C6A15B' }}
                    />

                    <div
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] mb-1"
                      style={{ color: '#C6A15B' }}
                    >
                      {year}
                    </div>
                    <div className="text-[#1A1A1A] font-semibold text-sm mb-0.5">{title}</div>
                    <div className="text-[#6B1F2A] text-sm font-medium mb-2">{company}</div>
                    <div className="text-[#5F5A55] text-xs leading-relaxed">{note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
