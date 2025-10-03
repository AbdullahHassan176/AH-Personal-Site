'use client'

import { useState } from 'react'

const filters = [
  { id: 'all', label: 'All Projects', icon: 'layer-group' },
  { id: 'ai', label: 'AI & Machine Learning', icon: 'brain' },
  { id: 'finance', label: 'Finance & Trading', icon: 'chart-line' },
  { id: 'logistics', label: 'Logistics & Supply Chain', icon: 'truck' },
  { id: 'tokenization', label: 'Tokenization & Blockchain', icon: 'coins' },
  { id: 'research', label: 'Academic Research', icon: 'graduation-cap' }
]

export function PortfolioFilters() {
  const [activeFilter, setActiveFilter] = useState('all')

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId)
    // Trigger project filtering logic here
  }

  return (
    <section id="filters" className="py-8 bg-gray-800 sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'filter-active'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                {filter.icon === 'layer-group' && (
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                )}
                {filter.icon === 'brain' && (
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                )}
                {filter.icon === 'chart-line' && (
                  <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 13h2v4H7v-4zm4-6h2v10h-2V7zm4-4h2v14h-2V3z" />
                )}
                {filter.icon === 'truck' && (
                  <path d="M1 3h15v13H1V3zm2 2v9h11V5H3zm13 0v9h2V5h-2z" />
                )}
                {filter.icon === 'coins' && (
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                )}
                {filter.icon === 'graduation-cap' && (
                  <path d="M12 2L1 7l11 5 11-5-11-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                )}
              </svg>
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
