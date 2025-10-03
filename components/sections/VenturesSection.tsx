'use client'

import { useState } from 'react'

interface Venture {
  id: string
  name: string
  description: string
  founded: string
  team: string
  focus: string
  status: 'active' | 'development'
  icon: string
  color: string
  metrics: {
    revenue?: string
    users?: string
    partners?: string
  }
  milestones: Array<{
    title: string
    status: 'completed' | 'in-progress' | 'planned'
    date: string
  }>
}

const ventures: Venture[] = [
  {
    id: 'global-next',
    name: 'Global Next',
    description: 'AI Think Tank driving innovation in artificial intelligence research and applications.',
    founded: '2024',
    team: '12 members',
    focus: 'AI Research',
    status: 'active',
    icon: 'brain',
    color: 'yellow',
    metrics: {
      revenue: '+280%',
      users: '95%',
      partners: '8 Countries'
    },
    milestones: [
      { title: 'AI Platform Launch', status: 'completed', date: 'Q1 2024' },
      { title: 'Series A Funding', status: 'in-progress', date: 'Q4 2024' },
      { title: 'Global Expansion', status: 'planned', date: 'Q2 2025' }
    ]
  },
  {
    id: 'unamani-ai',
    name: 'Unamani AI',
    description: 'Advanced AI platform for tokenization and digital asset management.',
    founded: '2022',
    team: '8 members',
    focus: 'Tokenization',
    status: 'active',
    icon: 'robot',
    color: 'teal',
    metrics: {
      revenue: '$850K',
      users: '2,340',
      partners: '15,670'
    },
    milestones: [
      { title: 'Beta Platform', status: 'completed', date: '2023' },
      { title: 'Mobile App', status: 'in-progress', date: 'In Development' }
    ]
  },
  {
    id: 'global-edge',
    name: 'Global Edge',
    description: 'International trading company focused on logistics and supply chain optimization.',
    founded: '2023',
    team: '15 members',
    focus: 'Logistics',
    status: 'active',
    icon: 'globe',
    color: 'purple',
    metrics: {
      revenue: '$1.2M',
      users: '25 Active',
      partners: '45 Global'
    },
    milestones: [
      { title: 'Asia-Pacific', status: 'completed', date: '2023' },
      { title: 'European Market', status: 'in-progress', date: 'Q1 2025' }
    ]
  },
  {
    id: 'petigree',
    name: 'Petigree',
    description: 'Pet care and management platform leveraging AI for better animal welfare.',
    founded: '2024',
    team: '6 members',
    focus: 'Pet Tech',
    status: 'development',
    icon: 'paw',
    color: 'green',
    metrics: {
      revenue: '70%',
      users: '50%',
      partners: '30%'
    },
    milestones: [
      { title: 'Mobile App Launch', status: 'in-progress', date: 'Jan 2025' },
      { title: 'Public Beta', status: 'planned', date: 'Mar 2025' }
    ]
  }
]

export function VenturesSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'development': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getMilestoneIcon = (status: string) => {
    switch (status) {
      case 'completed': return 'check'
      case 'in-progress': return 'clock'
      default: return 'circle'
    }
  }

  const getMilestoneColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-400'
      case 'in-progress': return 'bg-yellow-400 pulse-glow'
      default: return 'bg-gray-600'
    }
  }

  return (
    <section id="ventures" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            My <span className="text-yellow-400">Ventures</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building the future through innovative companies and transformative technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventures.map((venture) => (
            <div 
              key={venture.id}
              className={`bg-gray-800 rounded-2xl p-8 border border-gray-700 hover-glow group cursor-pointer card-expand ${
                expandedCard === venture.id ? 'expanded' : ''
              }`}
              onClick={() => toggleCard(venture.id)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 bg-${venture.color}-400 rounded-xl flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    {venture.icon === 'brain' && (
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {venture.icon === 'robot' && (
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    )}
                    {venture.icon === 'globe' && (
                      <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                    )}
                    {venture.icon === 'paw' && (
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    )}
                  </svg>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`${getStatusColor(venture.status)} text-xs font-medium px-3 py-1 rounded-full`}>
                    {venture.status === 'active' ? 'Active' : 'Development'}
                  </span>
                  <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{venture.name}</h3>
              <p className="text-gray-400 mb-6">{venture.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Founded</span>
                  <span className="text-white">{venture.founded}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Team</span>
                  <span className="text-white">{venture.team}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Focus</span>
                  <span className="text-white">{venture.focus}</span>
                </div>
              </div>
              
              {/* Mini Dashboard (Hidden by default) */}
              <div className={`mini-dashboard ${expandedCard === venture.id ? 'active' : ''} bg-gray-750 border-t border-gray-700`}>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Key Metrics */}
                    <div>
                      <h4 className="text-lg font-semibold text-yellow-400 mb-4">Key Metrics</h4>
                      <div className="space-y-3">
                        {Object.entries(venture.metrics).map(([key, value], index) => (
                          <div key={key} className="flex justify-between items-center">
                            <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <span className={`text-${venture.color}-400 font-semibold`}>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Milestones */}
                    <div>
                      <h4 className="text-lg font-semibold text-yellow-400 mb-4">Milestones</h4>
                      <div className="space-y-4">
                        {venture.milestones.map((milestone, index) => (
                          <div key={index} className="flex items-center">
                            <div className={`w-8 h-8 ${getMilestoneColor(milestone.status)} rounded-full flex items-center justify-center mr-4`}>
                              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                {getMilestoneIcon(milestone.status) === 'check' && (
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                )}
                                {getMilestoneIcon(milestone.status) === 'clock' && (
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                )}
                                {getMilestoneIcon(milestone.status) === 'circle' && (
                                  <circle cx="10" cy="10" r="2" />
                                )}
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-medium">{milestone.title}</div>
                              <div className="text-gray-400 text-sm">{milestone.date}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-4">
                    <button className={`bg-${venture.color}-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-${venture.color}-500 transition-all`}>
                      Learn More
                    </button>
                    <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-xl hover:border-yellow-400 hover:text-yellow-400 transition-all">
                      Visit Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

