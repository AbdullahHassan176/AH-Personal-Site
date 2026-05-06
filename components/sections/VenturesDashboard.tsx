'use client'

import { useState } from 'react'

const ventures = [
  {
    pill: 'Global Next',
    name: 'Global Next',
    role: 'Founder',
    type: 'Smart Logistics · Tokenised RWA',
    status: 'Active',
    initial: 'G',
    description:
      'Multinational smart-logistics operator building tokenised real-world asset infrastructure for trade finance. I pair blockchain architecture with borrowing-base spreadsheets, covenant monitoring, and lender-friendly data rooms so credit committees see both the on-chain posture and familiar Excel bridges.',
    highlights: [
      'Design RWA issuance paths with MOCCAE-grade compliance and treasury controls',
      'Model trade-finance corridors, inventory roll-forwards, and stress triggers for capital partners',
      'Wire investor + issuer workspaces on Azure while keeping deterministic Excel exports for internal risk',
      'Integrate attestable KPI oracles feeding smart contracts without breaking audit trails'
    ],
    tech: ['Next.js', 'Azure SWA', 'Functions', 'Cosmos DB', 'Solidity toolchain', 'Excel', 'Power BI'],
    metrics: [
      { label: 'Region', value: 'MENA · global lanes' },
      { label: 'Focus', value: 'RWA · trade' },
      { label: 'Stage', value: 'Pilot → scale' },
      { label: 'HQ', value: 'Dubai' },
    ],
  },
  {
    pill: 'Safe Labs',
    name: 'Safe Labs',
    role: 'CEO',
    type: 'Quantitative Research & AI Studio',
    status: 'Active',
    initial: 'S',
    description:
      'Dubai-based quantitative research and AI studio — part think tank, part media lab. We run experiments on volatility, generative finance, and frontier policy where numbers need a narrative anchor.',
    highlights: [
      'House NF-GARCH and synthetic-market research pipelines',
      'Produce board-ready visuals and white-paper calibre documentation',
      'Co-develop signal labs with founders who need institutional tone + speed',
      'Host deep-dive forums translating quant work for capital allocators'
    ],
    tech: ['Python', 'R', 'PyTorch', 'Jupyter', 'Figma-to-code', 'Notion', 'OBS / media stack'],
    metrics: [
      { label: 'Mandate', value: 'Research' },
      { label: 'Output', value: 'Memos · media' },
      { label: 'Base', value: 'Dubai' },
      { label: 'Mode', value: 'Bespoke pods' },
    ],
  },
  {
    pill: 'Unamani AI',
    name: 'Unamani AI',
    role: 'Founder / CEO',
    type: 'AI & Data Consultancy',
    status: 'Active',
    initial: 'U',
    description:
      'Applied AI consultancy shipping gradient boosting stacks, NLP copilots, and generative tooling for enterprises that already own messy data estates. Parent co. for marketplace and token experiments.',
    highlights: [
      'Deploy transformer + GBM hybrids for underwriting, CX, and anomaly detection',
      'Containerise reproducible notebooks + FastAPI surfaces for regulated clients',
      'Pair MLOps on Azure with Excel handoff layers executives already trust',
      'Co-build data strategies with CFOs bridging cloud spend to model ROI'
    ],
    tech: ['Azure', 'Cosmos DB', 'Python', 'XGBoost', 'Transformers', 'Next.js'],
    metrics: [
      { label: 'Founded', value: '2024' },
      { label: 'Focus', value: 'ML + data' },
      { label: 'Coverage', value: 'Global' },
      { label: 'Stack', value: 'Azure-first' },
    ],
  },
  {
    pill: 'Petigree',
    name: 'Petigree Global / Hurayra Halal',
    role: 'Founder / Operator',
    type: 'UAE Mainland · FMCG Import',
    status: 'Active',
    initial: 'P',
    description:
      'UAE mainland import and distribution house for halal FMCG and pet nutrition. The operating proof that I still run warehouses, customs paperwork, and distributor economics — not only models.',
    highlights: [
      'Own Montego-aligned halal SKU pipeline with distributor scorecards',
      'Coordinate MOCCAE, port, and retailer compliance without dropping margin visibility',
      'Pair Shopify + internal Next.js consoles for sell-through analytics',
      'Translate physical inventory turns into weekly cash forecasts for lenders'
    ],
    tech: ['Next.js', 'Shopify', 'Power BI', 'Excel', 'MOCCAE tooling'],
    metrics: [
      { label: 'Market', value: 'UAE GCC' },
      { label: 'SKU', value: 'FMCG · pet' },
      { label: 'Since', value: '2024' },
      { label: 'Ops', value: 'Mainland' },
    ],
  },
  {
    pill: 'Marketplace',
    name: 'Global Marketplace',
    role: 'Founder · Product',
    type: 'Containerised Trade Portal',
    status: 'Active',
    initial: 'M',
    description:
      'Container-led import/export orchestration linking buyers, forwarders, and finance teams inside one authenticated portal layered on Unamani infrastructure.',
    highlights: [
      'Consolidates quotes, manifests, invoicing, and FX assumptions per lane',
      'Embed credit triggers + vendor KPI dashboards for counterparty teams',
      'Ship bilingual UX for desks operating between UAE, Africa, and EU buyers',
      'Automate release management + secrets via GitHub Actions on Azure'
    ],
    tech: ['Next.js', 'Vue', 'Azure SWA', 'Cosmos DB', 'Functions'],
    metrics: [
      { label: 'Scope', value: 'Trade ops' },
      { label: 'Users', value: 'B2B teams' },
      { label: 'Layer', value: 'Portal' },
      { label: 'Cloud', value: 'Azure' },
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
          <p className="text-[#5F5A55] text-base mt-4 max-w-2xl leading-relaxed">
            Five active builder lines — quant research, AI services, tokenised trade infrastructure, FMCG operations, and the trade portal gluing them together.
          </p>
        </div>

        {/* Selector tabs */}
        <div
          className="flex flex-wrap gap-1 p-1 mb-10 rounded-[var(--radius-md)] justify-start"
          style={{ background: '#EFE6DA', border: '1px solid rgba(214,195,163,0.40)' }}
        >
          {ventures.map((vent, i) => (
            <button
              key={vent.pill}
              onClick={() => setActive(i)}
              className="px-4 py-2.5 rounded-[calc(var(--radius-md)-2px)] text-xs sm:text-sm font-semibold transition-all duration-200"
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
              {vent.pill}
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
