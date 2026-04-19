import { ScrollReveal } from '@/components/ui/ScrollReveal'

const highlights = [
  {
    num: '01',
    title: 'AI & Analytics Leader',
    description:
      'Leading multi-disciplinary teams to build data products, investor/issuer portals, and Azure-first platforms that turn complex ideas into production systems.',
    metrics: [
      'NF-GARCH research on synthetic financial data',
      'Azure-first ML pipelines and ETL systems',
      'Quant consulting at Deloitte (2022–present)',
    ],
  },
  {
    num: '02',
    title: 'Tokenization & Web3 Builder',
    description:
      'Architecting tokenization ecosystems for logistics and real assets, with investor/issuer portals, oracle connectors, and compliance-ready data models.',
    metrics: [
      'Global Edge: UAE-first RWA tokenization platform',
      'Chainlink oracle integration for on-chain data',
      'Investor & issuer portal flows on Azure',
    ],
  },
  {
    num: '03',
    title: 'Operator & Strategist',
    description:
      'Building import/distribution operations, coordinating cross-border shipments, managing partnerships, and developing distribution platforms.',
    metrics: [
      'UAE mainland entity — Hurayra Halal pet food',
      'MOCCAE compliance & distributor management',
      'Global Marketplace: containerized trade portal',
    ],
  },
]

export function HighlightsSection() {
  return (
    <section className="py-32" style={{ background: 'rgba(245,239,230,0.30)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <ScrollReveal className="mb-16">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            What I Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A]">
            Core{' '}
            <span className="gradient-text-brand">Strengths</span>
          </h2>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <ScrollReveal key={i} delay={i * 110}>
              <div className="holographic-card relative h-full border-l-2 border-l-[#6B1F2A] p-8">

                {/* Oversized background number */}
                <span
                  className="absolute top-4 right-6 font-playfair font-bold leading-none select-none pointer-events-none"
                  style={{
                    fontSize: '5.5rem',
                    color: 'rgba(198,161,91,0.10)',
                  }}
                >
                  {h.num}
                </span>

                <div className="relative">
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3 leading-snug">
                    {h.title}
                  </h3>
                  <p className="text-[#5F5A55] text-sm leading-[1.8] mb-7">
                    {h.description}
                  </p>

                  <ul className="space-y-3">
                    {h.metrics.map((m, mi) => (
                      <li key={mi} className="flex items-start gap-3">
                        <span
                          className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: '#C6A15B' }}
                        />
                        <span className="text-[#5F5A55] text-sm leading-snug">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
