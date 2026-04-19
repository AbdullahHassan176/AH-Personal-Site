'use client'

const techItems = [
  { name: 'Python',          dot: '#3776AB' },
  { name: 'R',               dot: '#276DC3' },
  { name: 'TypeScript',      dot: '#3178C6' },
  { name: 'TensorFlow',      dot: '#FF6F00' },
  { name: 'PyTorch',         dot: '#EE4C2C' },
  { name: 'Next.js',         dot: '#1A1A1A' },
  { name: 'React',           dot: '#61DAFB' },
  { name: 'Vue',             dot: '#4FC08D' },
  { name: 'Azure',           dot: '#0078D4' },
  { name: 'Cosmos DB',       dot: '#0089D6' },
  { name: 'GitHub Actions',  dot: '#2088FF' },
  { name: 'Docker',          dot: '#2496ED' },
  { name: 'Chainlink',       dot: '#375BD2' },
  { name: 'Power BI',        dot: '#F2C811' },
  { name: 'rugarch',         dot: '#276DC3' },
  { name: 'nflows',          dot: '#EE4C2C' },
  { name: 'Deloitte',        dot: '#86BC25' },
  { name: 'Wits University', dot: '#C6A15B' },
]

// Duplicate for seamless loop
const doubled = [...techItems, ...techItems]

export function LogosSection() {
  return (
    <section
      className="py-20 overflow-hidden"
      style={{ background: 'rgba(239,230,218,0.40)' }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-3">
          Tech Stack &amp; Affiliations
        </p>
        <h2 className="text-3xl font-playfair font-bold text-[#1A1A1A]">
          Technologies &amp;{' '}
          <span className="gradient-text-brand">Organisations</span>
        </h2>
      </div>

      {/* Scrolling ticker */}
      <div className="relative">
        {/* Fade edges — match section background */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(239,230,218,0.80), transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgba(239,230,218,0.80), transparent)' }}
        />

        <div
          className="flex gap-3 animate-marquee w-max hover:[animation-play-state:paused]"
          style={{ willChange: 'transform' }}
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2.5 whitespace-nowrap select-none transition-all duration-200"
              style={{
                background: 'rgba(245,239,230,0.80)',
                border: '1px solid rgba(198,161,91,0.18)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-75"
                style={{ backgroundColor: item.dot }}
              />
              <span className="text-[#5F5A55] text-[13px] font-medium tracking-wide">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
