'use client'

import { useState } from 'react'

const filters = [
  { id: 'all',           label: 'All Projects' },
  { id: 'ai',           label: 'AI & Machine Learning' },
  { id: 'finance',      label: 'Finance & Trading' },
  { id: 'logistics',    label: 'Logistics & Supply Chain' },
  { id: 'tokenization', label: 'Tokenization & Blockchain' },
  { id: 'research',     label: 'Academic Research' },
]

export function PortfolioFilters() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <section
      className="py-5 sticky top-[72px] z-40"
      style={{ background: 'rgba(239,230,218,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(198,161,91,0.15)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className="px-4 py-2 rounded-full font-medium text-sm transition-all"
              style={
                activeFilter === filter.id
                  ? { background: '#6B1F2A', color: '#FBF7F1' }
                  : { background: 'rgba(245,239,230,0.80)', border: '1px solid rgba(198,161,91,0.20)', color: '#5F5A55' }
              }
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
