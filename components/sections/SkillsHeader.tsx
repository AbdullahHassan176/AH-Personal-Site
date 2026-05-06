'use client'

interface SkillsHeaderProps {
  onToggleSkills: (isTechnical: boolean) => void
  onToggleView: (viewMode: string) => void
  isTechnical: boolean
  viewMode: string
}

export function SkillsHeader({ onToggleSkills, onToggleView, isTechnical, viewMode }: SkillsHeaderProps) {
  return (
    <section className="pt-28 pb-12 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            Capabilities
          </p>
          <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-5 text-[#1A1A1A]">
            Skills <span className="gradient-text-brand">Dashboard</span>
          </h1>
          <p className="text-[#5F5A55] text-lg max-w-2xl mx-auto leading-relaxed">
            Technical track spans financial modelling stacks, AI systems, token rails, and logistics analytics — soft skills cover boardroom delivery and venture leadership.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Technical / Soft toggle */}
          <div
            className="flex rounded-full p-1 gap-1"
            style={{ background: 'rgba(245,239,230,0.80)', border: '1px solid rgba(198,161,91,0.20)' }}
          >
            {['Technical Skills', 'Soft Skills'].map((label, i) => {
              const active = i === 0 ? isTechnical : !isTechnical
              return (
                <button
                  key={label}
                  onClick={() => onToggleSkills(i === 0)}
                  className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                  style={
                    active
                      ? { background: '#6B1F2A', color: '#FBF7F1' }
                      : { color: '#5F5A55' }
                  }
                >
                  {label}
                </button>
              )
            })}
          </div>

          {/* View mode toggle */}
          <button
            onClick={() => onToggleView(viewMode === 'radial' ? 'bar' : 'radial')}
            className="btn-burgundy inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            {viewMode === 'radial' ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Bar View
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeWidth={2} />
                  <path strokeLinecap="round" strokeWidth={2} d="M12 3v9l5 5" />
                </svg>
                Radial View
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
