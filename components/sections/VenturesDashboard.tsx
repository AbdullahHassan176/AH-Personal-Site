'use client'

import { useState } from 'react'

const colorMap = {
  green:  { bg: 'bg-green-400',  text: 'text-green-400',  border: 'border-green-400',  bgLight: 'bg-green-400/10'  },
  yellow: { bg: 'bg-yellow-400', text: 'text-yellow-400', border: 'border-yellow-400', bgLight: 'bg-yellow-400/10' },
  teal:   { bg: 'bg-teal-400',   text: 'text-teal-400',   border: 'border-teal-400',   bgLight: 'bg-teal-400/10'   },
}
type ColorKey = keyof typeof colorMap

const ventures = [
  {
    name: 'Deloitte South Africa',
    role: 'Quant / Financial Engineering',
    type: 'Consulting',
    status: 'Active',
    color: 'green' as ColorKey,
    initial: 'D',
    description:
      'Quantitative model building and validation across derivatives and risk at one of the Big Four. Delivers reproducible research pipelines, technical presentations, and cross-functional analytics for client engagements.',
    highlights: [
      'Built & validated quant models across derivatives and risk',
      'Documented controls and created reproducible research pipelines',
      'Produced technical presentations for quant audiences (e.g. embedded derivatives in NPS agreements)',
      'Delivered client-facing analytics with measurable business impact',
    ],
    tech: ['R', 'Python', 'rugarch', 'TensorFlow', 'PyTorch', 'GitHub Actions', 'Power BI'],
    metrics: [
      { label: 'Since',    value: '2022' },
      { label: 'Domain',   value: 'Quant / Risk' },
      { label: 'Location', value: 'South Africa' },
      { label: 'Mode',     value: 'Remote-friendly' },
    ],
  },
  {
    name: 'Unamani Pty Ltd',
    role: 'Founder / CEO',
    type: 'AI & Data Analytics',
    status: 'Active',
    color: 'yellow' as ColorKey,
    initial: 'U',
    description:
      'AI-forward data product and consulting company. Ships dashboards, ETL pipelines, and ML prototypes for clients. Serves as the parent platform for Global Edge and Global Marketplace.',
    highlights: [
      'Led development of AI-forward data products and consulting engagements',
      'Shipped dashboards, ETL pipelines, and ML prototypes for clients',
      'Architected Azure-first infrastructure: SWA, Functions, Cosmos DB',
      'Incubates Global Edge (tokenization) and Global Marketplace (trade portal)',
    ],
    tech: ['Azure', 'Cosmos DB', 'Azure Static Web Apps', 'Azure Functions', 'Python', 'Next.js'],
    metrics: [
      { label: 'Founded',  value: '2024' },
      { label: 'Products', value: '2 live' },
      { label: 'Location', value: 'SA · Global' },
      { label: 'Cloud',    value: 'Azure-first' },
    ],
  },
  {
    name: 'Petigree Global / Hurayra Halal',
    role: 'Founder / Operator',
    type: 'UAE Mainland · Import & Distribution',
    status: 'Active',
    color: 'teal' as ColorKey,
    initial: 'P',
    description:
      'UAE mainland entity importing and distributing premium halal pet food (Montego brand) under the Hurayra Halal brand. Handles MOCCAE compliance, partner management, and a custom distribution platform.',
    highlights: [
      'Established UAE mainland entity; coordinated Montego shipments',
      'Managed MOCCAE compliance and regulatory approvals',
      'Negotiated A&P budgets and managed distributor partners (Aleef, etc.)',
      'Developed a distribution app for order and inventory management',
    ],
    tech: ['Next.js', 'Vue', 'Shopify', 'Wix', 'Azure', 'Power BI'],
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
  const c = colorMap[v.color]

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Venture <span className="text-yellow-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The companies and platforms I build and operate
          </p>
        </div>

        {/* Selector tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {ventures.map((vent, i) => {
            const tc = colorMap[vent.color]
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  active === i ? `${tc.bg} text-gray-900` : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {vent.name}
              </button>
            )
          })}
        </div>

        {/* Active detail card */}
        <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-700 hover-glow">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left — overview */}
            <div>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 ${c.bg} rounded-2xl flex items-center justify-center mr-4 text-gray-900 text-2xl font-bold flex-shrink-0`}>
                  {v.initial}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{v.name}</h3>
                  <p className="text-gray-400 text-sm">{v.role} · {v.type}</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">{v.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {v.metrics.map((m, i) => (
                  <div key={i} className="bg-gray-800 rounded-xl p-4">
                    <div className={`text-lg font-bold ${c.text} mb-0.5`}>{m.value}</div>
                    <div className="text-gray-400 text-xs uppercase tracking-wide">{m.label}</div>
                  </div>
                ))}
              </div>

              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${c.bgLight} ${c.border} border`}>
                <span className={`w-2 h-2 rounded-full ${c.bg}`} />
                <span className={c.text}>{v.status}</span>
              </span>
            </div>

            {/* Right — highlights + stack */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Key Highlights</h4>
              <div className="space-y-4 mb-8">
                {v.highlights.map((h, i) => (
                  <div key={i} className="flex items-start">
                    <div className={`w-7 h-7 ${c.bg} rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0`}>
                      <svg className="w-3.5 h-3.5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-xl font-bold text-white mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {v.tech.map((t, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${c.bgLight} ${c.border} border ${c.text}`}>
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
