'use client'

import { useState } from 'react'

export function VenturesDashboard() {
  const [activeVenture, setActiveVenture] = useState(0)

  const ventures = [
    {
      name: 'Global Next AI Think Tank',
      role: 'CEO & Founder',
      status: 'Active',
      founded: '2024',
      description: 'Leading AI research and innovation platform connecting global experts to solve complex challenges through artificial intelligence.',
      metrics: {
        experts: '500+',
        research: '12',
        funding: '$2M',
        countries: '25+'
      },
      color: 'yellow',
      logo: '🧠',
      achievements: [
        'Connected 500+ global AI experts',
        'Published 12 research papers',
        'Secured $2M in funding',
        'Expanded to 25+ countries'
      ]
    },
    {
      name: 'Global Edge Trading',
      role: 'CEO',
      status: 'Active',
      founded: '2023',
      description: 'International trading company specializing in logistics optimization and supply chain management across global markets.',
      metrics: {
        volume: '$1.2M',
        partners: '45+',
        countries: '15',
        savings: '30%'
      },
      color: 'teal',
      logo: '🌍',
      achievements: [
        'Generated $1.2M monthly trading volume',
        'Built 45+ global partnerships',
        'Expanded to 15 countries',
        'Reduced logistics costs by 30%'
      ]
    },
    {
      name: 'Unamani AI Platform',
      role: 'Founder',
      status: 'Active',
      founded: '2022',
      description: 'Advanced AI-powered platform for tokenization and digital asset management, revolutionizing how assets are digitized and traded.',
      metrics: {
        users: '2,340',
        assets: '$850K',
        transactions: '15,670',
        app: 'Mobile'
      },
      color: 'purple',
      logo: '→',
      achievements: [
        'Tokenized $850K in real-world assets',
        '2,340 active users',
        '15,670 transactions processed',
        'Launched mobile application'
      ]
    },
    {
      name: 'Quantum Finance Labs',
      role: 'Co-Founder',
      status: 'Active',
      founded: '2023',
      description: 'Research and development lab focusing on quantum computing applications in financial modeling and risk management.',
      metrics: {
        patents: '3',
        research: '8',
        team: '12',
        funding: '$500K'
      },
      color: 'green',
      logo: '🔬',
      achievements: [
        'Filed 3 quantum computing patents',
        'Published 8 research papers',
        'Built team of 12 researchers',
        'Secured $500K in funding'
      ]
    },
    {
      name: 'Gaming Ventures Studio',
      role: 'Founder',
      status: 'Active',
      founded: '2021',
      description: 'Gaming company developing innovative mobile and web-based games with AI integration and blockchain features.',
      metrics: {
        games: '5',
        players: '10K+',
        revenue: '$200K',
        platforms: '3'
      },
      color: 'blue',
      logo: '🎮',
      achievements: [
        'Developed 5 gaming titles',
        '10,000+ active players',
        'Generated $200K revenue',
        'Launched on 3 platforms'
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: 'border-yellow-400 bg-yellow-400/10',
      teal: 'border-teal-400 bg-teal-400/10',
      purple: 'border-purple-400 bg-purple-400/10',
      green: 'border-green-400 bg-green-400/10',
      blue: 'border-blue-400 bg-blue-400/10'
    }
    return colors[color as keyof typeof colors] || colors.yellow
  }

  const getTextColor = (color: string) => {
    const colors = {
      yellow: 'text-yellow-400',
      teal: 'text-teal-400',
      purple: 'text-purple-400',
      green: 'text-green-400',
      blue: 'text-blue-400'
    }
    return colors[color as keyof typeof colors] || colors.yellow
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Venture <span className="text-yellow-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive overview of all active ventures, their impact, and key achievements
          </p>
        </div>
        
        {/* Venture Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {ventures.map((venture, index) => (
            <button
              key={index}
              onClick={() => setActiveVenture(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeVenture === index
                  ? `bg-${venture.color}-400 text-gray-900`
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {venture.logo} {venture.name}
            </button>
          ))}
        </div>

        {/* Active Venture Details */}
        <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-700 hover-glow">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-${ventures[activeVenture].color}-400 rounded-2xl flex items-center justify-center mr-4 text-2xl`}>
                  {ventures[activeVenture].logo}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{ventures[activeVenture].name}</h3>
                  <p className="text-gray-400">{ventures[activeVenture].role} • Founded {ventures[activeVenture].founded}</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {ventures[activeVenture].description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {Object.entries(ventures[activeVenture].metrics).map(([key, value], index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-4">
                    <div className={`text-2xl font-bold text-${ventures[activeVenture].color}-400 mb-1`}>{value}</div>
                    <div className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>
              
              <div className={`px-4 py-2 rounded-full text-sm font-medium ${getColorClasses(ventures[activeVenture].color)} inline-block`}>
                <span className={getTextColor(ventures[activeVenture].color)}>{ventures[activeVenture].status}</span>
              </div>
            </div>
            
            {/* Right Content - Achievements */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Key Achievements</h4>
              <div className="space-y-4">
                {ventures[activeVenture].achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-8 h-8 bg-${ventures[activeVenture].color}-400 rounded-full flex items-center justify-center mr-4 mt-1`}>
                      <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

