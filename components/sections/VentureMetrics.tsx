'use client'

import { useState, useEffect } from 'react'

export function VentureMetrics() {
  const [activeMetric, setActiveMetric] = useState(0)

  const metrics = [
    {
      title: 'Global Reach',
      description: 'International presence and market expansion',
      data: [
        { label: 'Countries', value: 25, color: 'yellow' },
        { label: 'Cities', value: 45, color: 'teal' },
        { label: 'Partners', value: 120, color: 'purple' },
        { label: 'Languages', value: 8, color: 'green' }
      ]
    },
    {
      title: 'Financial Performance',
      description: 'Revenue, funding, and financial growth metrics',
      data: [
        { label: 'Total Funding', value: 2.5, suffix: 'M', color: 'yellow' },
        { label: 'Monthly Revenue', value: 1.2, suffix: 'M', color: 'teal' },
        { label: 'Growth Rate', value: 45, suffix: '%', color: 'purple' },
        { label: 'Profit Margin', value: 28, suffix: '%', color: 'green' }
      ]
    },
    {
      title: 'Team & Talent',
      description: 'Human resources and organizational growth',
      data: [
        { label: 'Total Employees', value: 67, color: 'yellow' },
        { label: 'Remote Workers', value: 45, color: 'teal' },
        { label: 'Countries', value: 12, color: 'purple' },
        { label: 'Retention Rate', value: 92, suffix: '%', color: 'green' }
      ]
    },
    {
      title: 'Technology & Innovation',
      description: 'Technical achievements and innovation metrics',
      data: [
        { label: 'Patents Filed', value: 8, color: 'yellow' },
        { label: 'Research Papers', value: 15, color: 'teal' },
        { label: 'AI Models', value: 23, color: 'purple' },
        { label: 'Open Source', value: 12, color: 'green' }
      ]
    }
  ]

  const ventureStats = [
    {
      venture: 'Global Next AI Think Tank',
      metrics: {
        experts: 500,
        research: 12,
        funding: 2.0,
        countries: 25
      },
      color: 'yellow'
    },
    {
      venture: 'Global Edge Trading',
      metrics: {
        volume: 1.2,
        partners: 45,
        countries: 15,
        savings: 30
      },
      color: 'teal'
    },
    {
      venture: 'Unamani AI Platform',
      metrics: {
        users: 2340,
        assets: 0.85,
        transactions: 15670,
        growth: 150
      },
      color: 'purple'
    }
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Venture <span className="text-yellow-400">Metrics</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive analytics and performance indicators across all ventures
          </p>
        </div>
        
        {/* Metric Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {metrics.map((metric, index) => (
            <button
              key={index}
              onClick={() => setActiveMetric(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeMetric === index
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {metric.title}
            </button>
          ))}
        </div>

        {/* Active Metric Display */}
        <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-700 hover-glow mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">{metrics[activeMetric].title}</h3>
            <p className="text-gray-400 text-lg">{metrics[activeMetric].description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics[activeMetric].data.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-24 h-24 bg-${item.color}-400 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-2xl font-bold text-gray-900">
                    {item.value}{item.suffix || ''}
                  </div>
                </div>
                <div className="text-white font-semibold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Venture Stats */}
        <div>
          <h3 className="text-3xl font-playfair font-bold mb-12 text-white text-center">Individual Venture Performance</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {ventureStats.map((venture, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover-glow">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">{venture.venture}</h4>
                  <div className={`w-12 h-12 bg-${venture.color}-400 rounded-xl flex items-center justify-center mx-auto text-2xl`}>
                    {index === 0 && '→'}
                    {index === 1 && '→'}
                    {index === 2 && '→'}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {Object.entries(venture.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <div className="flex items-center">
                        <div className={`w-3 h-3 bg-${venture.color}-400 rounded-full mr-2`}></div>
                        <span className={`text-${venture.color}-400 font-semibold`}>
                          {typeof value === 'number' && value < 10 ? value.toFixed(1) : value}
                          {key === 'funding' || key === 'assets' ? 'M' : ''}
                          {key === 'savings' || key === 'growth' ? '%' : ''}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

