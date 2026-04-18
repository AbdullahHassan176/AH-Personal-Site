'use client'

const techItems = [
  { name: 'Python',          dot: '#3776AB' },
  { name: 'R',               dot: '#276DC3' },
  { name: 'TypeScript',      dot: '#3178C6' },
  { name: 'TensorFlow',      dot: '#FF6F00' },
  { name: 'PyTorch',         dot: '#EE4C2C' },
  { name: 'Next.js',         dot: '#ffffff' },
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
  { name: 'Wits University', dot: '#D4AF37' },
]

// Duplicate so the marquee loops seamlessly
const doubled = [...techItems, ...techItems]

export function LogosSection() {
  return (
    <section className="py-16 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl font-playfair font-bold mb-3 text-white">
          Technologies &amp; <span className="text-yellow-400">Organisations</span>
        </h2>
        <p className="text-gray-400">The tools, frameworks, and institutions I work with</p>
      </div>

      {/* Scrolling ticker */}
      <div className="relative">
        {/* Fade-out edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-4 animate-marquee w-max hover:[animation-play-state:paused]"
          style={{ willChange: 'transform' }}
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-5 py-3 bg-gray-800 border border-gray-700 rounded-full whitespace-nowrap select-none hover:border-yellow-400/50 transition-colors duration-200"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.dot }}
              />
              <span className="text-gray-300 text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
