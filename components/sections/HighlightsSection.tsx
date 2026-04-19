import { ScrollReveal } from '@/components/ui/ScrollReveal'

const highlights = [
  {
    num: '01',
    title: 'AI & Analytics Leader',
    description:
      'Leading multi-disciplinary teams to build data products, investor/issuer portals, and Azure-first platforms that turn complex ideas into production systems.',
    accentBorder: 'border-l-yellow-400',
    numColor: 'text-yellow-400/10',
    dotColor: 'bg-yellow-400',
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
    accentBorder: 'border-l-purple-400',
    numColor: 'text-purple-400/10',
    dotColor: 'bg-purple-400',
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
    accentBorder: 'border-l-teal-400',
    numColor: 'text-teal-400/10',
    dotColor: 'bg-teal-400',
    metrics: [
      'UAE mainland entity — Hurayra Halal pet food',
      'MOCCAE compliance & distributor management',
      'Global Marketplace: containerized trade portal',
    ],
  },
]

export function HighlightsSection() {
  return (
    <section className="py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <ScrollReveal className="mb-16">
          <p className="text-gray-600 text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            What I Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white">
            Core <span className="text-yellow-400">Strengths</span>
          </h2>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {highlights.map((h, i) => (
            <ScrollReveal key={i} delay={i * 110}>
              <div
                className={`relative h-full bg-white/[0.03] border border-white/[0.07] border-l-2 ${h.accentBorder} p-8 transition-transform duration-300 hover:-translate-y-1`}
              >
                {/* Oversized background number for depth */}
                <span
                  className={`absolute top-5 right-6 font-playfair font-bold text-[5.5rem] leading-none select-none pointer-events-none ${h.numColor}`}
                >
                  {h.num}
                </span>

                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
                    {h.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-7">
                    {h.description}
                  </p>

                  <ul className="space-y-3">
                    {h.metrics.map((m, mi) => (
                      <li key={mi} className="flex items-start gap-3">
                        <span
                          className={`mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${h.dotColor}`}
                        />
                        <span className="text-gray-400 text-sm leading-snug">{m}</span>
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
