'use client'

import { useState } from 'react'
import { Skills } from '@/lib/data'

interface SkillsSectionProps {
  skills: Skills
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('languages')

  const categories = [
    { key: 'languages', label: 'Languages', color: 'yellow' },
    { key: 'frameworks', label: 'Frameworks', color: 'teal' },
    { key: 'data_ml', label: 'Data & ML', color: 'purple' },
    { key: 'cloud_devops', label: 'Cloud & DevOps', color: 'green' },
    { key: 'business', label: 'Business', color: 'blue' }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: 'border-yellow-400 bg-yellow-400/10 text-yellow-400',
      teal: 'border-teal-400 bg-teal-400/10 text-teal-400',
      purple: 'border-purple-400 bg-purple-400/10 text-purple-400',
      green: 'border-green-400 bg-green-400/10 text-green-400',
      blue: 'border-blue-400 bg-blue-400/10 text-blue-400'
    }
    return colors[color as keyof typeof colors] || colors.yellow
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Skills & <span className="text-yellow-400">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive technical and business skills across multiple domains
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.key
                  ? `bg-${category.color}-400 text-gray-900`
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeCategory as keyof Skills].map((skill, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover-glow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{skill}</h3>
                <div className={`w-3 h-3 bg-${categories.find(c => c.key === activeCategory)?.color}-400 rounded-full`}></div>
              </div>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-${categories.find(c => c.key === activeCategory)?.color}-400 h-2 rounded-full transition-all duration-1000`}
                    style={{width: `${Math.random() * 40 + 60}%`}}
                  ></div>
                </div>
                <span className="ml-3 text-gray-400 text-sm">
                  {Math.floor(Math.random() * 40 + 60)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

