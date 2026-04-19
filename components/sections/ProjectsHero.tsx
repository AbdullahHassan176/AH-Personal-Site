export function ProjectsHero() {
  const stats = [
    { value: '3',     label: 'Active Projects',   color: '#6B1F2A' },
    { value: '$850K', label: 'Assets Tokenized',  color: '#C6A15B' },
    { value: '15K+',  label: 'Transactions',      color: '#1F6F54' },
    { value: '3',     label: 'Categories',        color: '#6B1F2A' },
  ]

  return (
    <section className="pt-28 pb-16 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-6">
          Portfolio
        </p>

        <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 text-[#1A1A1A] leading-tight">
          My <span className="gradient-text-brand">Projects</span>
        </h1>

        <p className="text-[#5F5A55] text-lg mb-14 max-w-3xl mx-auto leading-relaxed">
          Innovative solutions spanning AI research, tokenization platforms, and logistics optimisation.
          Each project represents a step forward in creating technology that serves real-world needs.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="holographic-card p-6">
              <div className="text-3xl font-bold mb-1" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[#5F5A55] text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
