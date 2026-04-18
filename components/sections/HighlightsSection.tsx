const colorMap = {
  yellow: { bg: 'bg-yellow-400', dot: 'bg-yellow-400' },
  purple: { bg: 'bg-purple-400', dot: 'bg-purple-400' },
  teal:   { bg: 'bg-teal-400',   dot: 'bg-teal-400'   },
}

// SVG icon components for each strength
function IconAI() {
  return (
    <svg className="w-10 h-10 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 110 2h-1v1a2 2 0 01-2 2v1a1 1 0 11-2 0v-1H7v1a1 1 0 11-2 0v-1a2 2 0 01-2-2v-1H2a1 1 0 110-2h1a7 7 0 017-7h1V5.73A2 2 0 0110 4a2 2 0 012-2zm-4 9a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
  )
}

function IconTokenization() {
  return (
    <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  )
}

function IconOperator() {
  return (
    <svg className="w-10 h-10 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  )
}

const highlights = [
  {
    title: 'AI & Analytics Leader',
    description: 'Leading multi-disciplinary teams to build data products, investor/issuer portals, and Azure-first platforms that turn complex ideas into production systems.',
    Icon: IconAI,
    color: 'yellow' as const,
    metrics: [
      'NF-GARCH research on synthetic financial data',
      'Azure-first ML pipelines and ETL systems',
      'Quant consulting at Deloitte (2022–present)',
    ],
  },
  {
    title: 'Tokenization & Web3 Builder',
    description: 'Architecting tokenization ecosystems for logistics and real assets, with investor/issuer portals, oracle connectors, and compliance-ready data models.',
    Icon: IconTokenization,
    color: 'purple' as const,
    metrics: [
      'Global Edge: UAE-first RWA tokenization platform',
      'Chainlink oracle integration for on-chain data',
      'Investor & issuer portal flows on Azure',
    ],
  },
  {
    title: 'Operator & Strategist',
    description: 'Building import/distribution operations, coordinating cross-border shipments, managing partnerships, and developing distribution platforms.',
    Icon: IconOperator,
    color: 'teal' as const,
    metrics: [
      'UAE mainland entity — Hurayra Halal pet food',
      'MOCCAE compliance & distributor management',
      'Global Marketplace: containerized trade portal',
    ],
  },
]

export function HighlightsSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Core <span className="text-yellow-400">Strengths</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Three pillars of expertise that drive innovation and create measurable impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {highlights.map((h, i) => {
            const c = colorMap[h.color]
            return (
              <div key={i} className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover-glow">
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 ${c.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <h.Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{h.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{h.description}</p>
                </div>

                <div className="space-y-3">
                  {h.metrics.map((metric, mi) => (
                    <div key={mi} className="flex items-center">
                      <div className={`w-2 h-2 ${c.dot} rounded-full mr-3 flex-shrink-0`} />
                      <span className="text-gray-300 text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
