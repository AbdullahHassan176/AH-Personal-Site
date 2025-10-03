export function HighlightsSection() {
  const highlights = [
    {
      title: "AI & Analytics Leader",
      description: "Leading multi-disciplinary teams to build data products, investor/issuer portals, and Azure-first platforms that turn complex ideas into production systems.",
      icon: "🧠",
      color: "yellow",
      metrics: ["500+ AI experts connected", "12 research papers", "$2M funding secured"]
    },
    {
      title: "Tokenization & Web3 Builder", 
      description: "Architecting tokenization ecosystems for logistics and real estate, with investor/issuer portals and compliance-ready data models.",
      icon: "⚡",
      color: "purple",
      metrics: ["$850K assets tokenized", "2,340 active users", "15,670 transactions"]
    },
    {
      title: "Operator & Strategist",
      description: "Building import/distribution operations, coordinating shipments, managing partnerships, and developing distribution platforms.",
      icon: "🌍",
      color: "teal", 
      metrics: ["15 countries", "45+ partnerships", "30% cost reduction"]
    }
  ]

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
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover-glow">
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-${highlight.color}-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl`}>
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{highlight.title}</h3>
                <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
              </div>
              
              <div className="space-y-3">
                {highlight.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center">
                    <div className={`w-2 h-2 bg-${highlight.color}-400 rounded-full mr-3`}></div>
                    <span className="text-gray-300">{metric}</span>
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

