'use client'

import { useState } from 'react'

const ventures = [
  {
    name:    'Deloitte South Africa',
    role:    'Quant / Financial Engineering',
    type:    'Consulting',
    status:  'Active',
    initial: 'D',
    description:
      'Quantitative model building and validation across derivatives and risk at one of the Big Four. Delivers reproducible research pipelines, technical presentations, and cross-functional analytics for client engagements.',
    highlights: [
      'Built & validated quant models across derivatives and risk',
      'Documented controls and created reproducible research pipelines',
      'Produced technical presentations for quant audiences',
      'Delivered client-facing analytics with measurable business impact',
    ],
    tech:    ['R', 'Python', 'rugarch', 'TensorFlow', 'PyTorch', 'GitHub Actions', 'Power BI'],
    metrics: [
      { label: 'Since',    value: '2022' },
      { label: 'Domain',   value: 'Quant / Risk' },
      { label: 'Location', value: 'South Africa' },
      { label: 'Mode',     value: 'Remote-friendly' },
    ],
  },
  {
    name:    'Unamani Pty Ltd',
    role:    'Founder / CEO',
    type:    'AI & Data Analytics',
    status:  'Active',
    initial: 'U',
    description:
      'AI-forward data product and consulting company. Ships dashboards, ETL pipelines, and ML prototypes for clients. Serves as the parent platform for Global Edge and Global Marketplace.',
    highlights: [
      'Led development of AI-forward data products and consulting engagements',
      'Shipped dashboards, ETL pipelines, and ML prototypes for clients',
      'Architected Azure-first infrastructure: SWA, Functions, Cosmos DB',
      'Incubates Global Edge (tokenization) and Global Marketplace (trade portal)',
    ],
    tech:    ['Azure', 'Cosmos DB', 'Azure Static Web Apps', 'Azure Functions', 'Python', 'Next.js'],
    metrics: [
      { label: 'Founded',  value: '2024' },
      { label: 'Products', value: '2 live' },
      { label: 'Location', value: 'SA · Global' },
      { label: 'Cloud',    value: 'Azure-first' },
    ],
  },
  {
    name:    'Petigree Global / Hurayra Halal',
    role:    'Founder / Operator',
    type:    'UAE Mainland · Import & Distribution',
    status:  'Active',
    initial: 'P',
    description:
      'UAE mainland entity importing and distributing premium halal pet food (Montego brand) under the Hurayra Halal brand. Handles MOCCAE compliance, partner management, and a custom distribution platform.',
    highlights: [
      'Established UAE mainland entity; coordinated Montego shipments',
      'Managed MOCCAE compliance and regulatory approvals',
      'Negotiated A&P budgets and managed distributor partners (Aleef, etc.)',
      'Developed a distribution app for order and inventory management',
    ],
    tech:    ['Next.js', 'Vue', 'Shopify', 'Wix', 'Azure', 'Power BI'],
    metrics: [
      { label: 'Founded',    value: '2024' },
      { label: 'Market',     value: 'UAE' },
      { label: 'Compliance', value: 'MOCCAE' },
      { label: 'Brand',      value: 'Hurayra Halal' },
    ],
  },
]

export function VenturesDashboard() {
  const [active, setActive] = useState(0)
  const v = ventures[active]

  return (
    <section className="py-32" style={{ background: 'rgba(245,239,230,0.30)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A]">
            Venture{' '}
            <span className="gradient-text-brand">Portfolio</span>
          </h2>
          <p className="text-[#5F5A55] text-base mt-4 max-w-lg leading-relaxed">
            The companies and platforms I build and operate.
          </p>
        </div>

        {/* Selector tabs */}
        <div
          className="inline-flex gap-1 p-1 mb-10 rounded-[var(--radius-md)]"
          style={{ background: '#EFE6DA', border: '1px solid rgba(214,195,163,0.40)' }}
        >
          {ventures.map((vent, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-[calc(var(--radius-md)-2px)] text-sm font-semibold transition-all duration-200"
              style={
                active === i
                  ? {
                      background: '#6B1F2A',
                      color: '#F5EFE6',
                      boxShadow: '0 2px 12px rgba(107,31,42,0.25)',
                    }
                  : { color: '#5F5A55' }
              }
            >
              {vent.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div className="liquid-metal-card p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left — overview */}
            <div>
              {/* Avatar + name */}
              <div className="flex items-center gap-4 mb-7">
                <div
                  className="w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center text-2xl font-bold font-playfair flex-shrink-0"
                  style={{ background: '#6B1F2A', color: '#C6A15B' }}
                >
                  {v.initial}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] leading-snug">{v.name}</h3>
                  <p className="text-[#5F5A55] text-sm">{v.role} · {v.type}</p>
                </div>
              </div>

              <p className="text-[#5F5A55] text-base leading-[1.8] mb-8">{v.description}</p>

              {/* Metric chips */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {v.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-[var(--radius-md)]"
                    style={{ background: 'rgba(245,239,230,0.70)', border: '1px solid rgba(214,195,163,0.30)' }}
                  >
                    <div
                      className="text-lg font-bold font-playfair mb-0.5"
                      style={{ color: '#C6A15B' }}
                    >
                      {m.value}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#B8AEA1]">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Status badge */}
              <div className="status-badge status-badge--emerald inline-flex">
                <span
                  className="w-2 h-2 rounded-full bg-[#1F6F54]"
                  style={{ animation: 'status-blink 2s ease-in-out infinite' }}
                />
                {v.status}
              </div>
            </div>

            {/* Right — highlights + stack */}
            <div>
              <h4 className="text-base font-semibold text-[#1A1A1A] mb-5 uppercase tracking-[0.1em] text-xs font-mono text-[#5F5A55]">
                Key Highlights
              </h4>
              <div className="space-y-4 mb-8">
                {v.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(31,111,84,0.12)', border: '1px solid rgba(31,111,84,0.30)' }}
                    >
                      <svg className="w-3 h-3" style={{ color: '#1F6F54' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#5F5A55] text-sm leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              <div className="font-mono text-[10px] uppercase tracking-widest text-[#B8AEA1] mb-4">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {v.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-mono rounded-pill"
                    style={{
                      background: 'rgba(198,161,91,0.12)',
                      border: '1px solid rgba(198,161,91,0.35)',
                      color: '#6B1F2A',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
