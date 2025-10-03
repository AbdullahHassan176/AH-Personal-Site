'use client'

import { useState } from 'react'

export function SkillsHeader() {
  const [isTechnical, setIsTechnical] = useState(true)
  const [viewMode, setViewMode] = useState('radial')

  return (
    <section id="dashboard-header" className="pt-24 pb-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 text-white">
            Skills <span className="text-yellow-400 glow-text">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Interactive visualization of technical expertise and soft skills across AI, finance, leadership, and innovation domains
          </p>
        </div>
        
        {/* Toggle Controls */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-gray-300 font-medium">Technical Skills</span>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={!isTechnical}
                onChange={() => setIsTechnical(!isTechnical)}
              />
              <span className="toggle-slider"></span>
            </label>
            <span className="text-gray-300 font-medium">Soft Skills</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setViewMode(viewMode === 'radial' ? 'bar' : 'radial')}
              className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
            >
              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                {viewMode === 'radial' ? (
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                ) : (
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                )}
              </svg>
              {viewMode === 'radial' ? 'Bar View' : 'Radial View'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
