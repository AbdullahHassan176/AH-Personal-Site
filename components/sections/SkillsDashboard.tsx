'use client'

import { useState } from 'react'

export function SkillsDashboard() {
  const [activeTab, setActiveTab] = useState('technical')

  const technicalSkills = [
    {
      name: 'Artificial Intelligence',
      percentage: 95,
      color: 'yellow',
      description: 'Machine Learning, Deep Learning, Neural Networks',
      subSkills: [
        { name: 'Deep Learning', level: 'Expert', color: 'yellow' },
        { name: 'NLP', level: 'Advanced', color: 'teal' },
        { name: 'Computer Vision', level: 'Advanced', color: 'purple' },
        { name: 'Reinforcement Learning', level: 'Intermediate', color: 'green' }
      ]
    },
    {
      name: 'Quantitative Finance',
      percentage: 90,
      color: 'teal',
      description: 'Financial Modeling, Risk Management, Trading',
      subSkills: [
        { name: 'Risk Management', level: 'Expert', color: 'yellow' },
        { name: 'Derivatives', level: 'Advanced', color: 'teal' },
        { name: 'Algorithmic Trading', level: 'Advanced', color: 'green' },
        { name: 'Portfolio Optimization', level: 'Advanced', color: 'purple' }
      ]
    },
    {
      name: 'Blockchain & DeFi',
      percentage: 85,
      color: 'purple',
      description: 'Smart Contracts, Tokenization, DeFi Protocols',
      subSkills: [
        { name: 'Smart Contracts', level: 'Advanced', color: 'purple' },
        { name: 'Tokenization', level: 'Expert', color: 'yellow' },
        { name: 'DeFi Protocols', level: 'Advanced', color: 'teal' },
        { name: 'Consensus Mechanisms', level: 'Intermediate', color: 'green' }
      ]
    },
    {
      name: 'Data Science',
      percentage: 88,
      color: 'green',
      description: 'Statistics, Analytics, Big Data',
      subSkills: [
        { name: 'Statistical Modeling', level: 'Expert', color: 'yellow' },
        { name: 'Big Data', level: 'Advanced', color: 'teal' },
        { name: 'Data Visualization', level: 'Advanced', color: 'green' },
        { name: 'Predictive Analytics', level: 'Expert', color: 'purple' }
      ]
    }
  ]

  const softSkills = [
    {
      name: 'Leadership',
      percentage: 88,
      color: 'yellow',
      description: 'Team Management, Strategic Planning, Vision',
      subSkills: [
        { name: 'Team Building', level: 'Expert', color: 'yellow' },
        { name: 'Strategic Planning', level: 'Expert', color: 'teal' },
        { name: 'Decision Making', level: 'Advanced', color: 'purple' },
        { name: 'Crisis Management', level: 'Advanced', color: 'green' }
      ]
    },
    {
      name: 'Communication',
      percentage: 85,
      color: 'teal',
      description: 'Public Speaking, Negotiation, Presentation',
      subSkills: [
        { name: 'Public Speaking', level: 'Expert', color: 'yellow' },
        { name: 'Negotiation', level: 'Advanced', color: 'teal' },
        { name: 'Presentation', level: 'Expert', color: 'green' },
        { name: 'Cross-cultural Communication', level: 'Advanced', color: 'purple' }
      ]
    },
    {
      name: 'Innovation',
      percentage: 92,
      color: 'purple',
      description: 'Creative Problem Solving, Design Thinking',
      subSkills: [
        { name: 'Design Thinking', level: 'Expert', color: 'yellow' },
        { name: 'Product Development', level: 'Advanced', color: 'teal' },
        { name: 'Market Analysis', level: 'Advanced', color: 'purple' },
        { name: 'Prototyping', level: 'Advanced', color: 'green' }
      ]
    },
    {
      name: 'Entrepreneurship',
      percentage: 90,
      color: 'green',
      description: 'Business Development, Fundraising, Scaling',
      subSkills: [
        { name: 'Business Strategy', level: 'Expert', color: 'yellow' },
        { name: 'Fundraising', level: 'Advanced', color: 'teal' },
        { name: 'Scaling', level: 'Advanced', color: 'green' },
        { name: 'Partnership Development', level: 'Advanced', color: 'purple' }
      ]
    }
  ]

  const skills = activeTab === 'technical' ? technicalSkills : softSkills

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Skills <span className="text-yellow-400">Dashboard</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive overview of technical expertise and soft skills across AI, finance, leadership, and innovation domains
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-full p-1 border border-gray-700">
            <button 
              onClick={() => setActiveTab('technical')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'technical' 
                  ? 'bg-yellow-400 text-gray-900' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Technical Skills
            </button>
            <button 
              onClick={() => setActiveTab('soft')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'soft' 
                  ? 'bg-yellow-400 text-gray-900' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card rounded-2xl p-8 hover-glow">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-16 h-16 bg-${skill.color}-400 rounded-2xl flex items-center justify-center mr-4`}>
                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      {skill.name === 'Artificial Intelligence' && (
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                      {skill.name === 'Quantitative Finance' && (
                        <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 13h2v4H7v-4zm4-6h2v10h-2V7zm4-4h2v14h-2V3z" />
                      )}
                      {skill.name === 'Blockchain & DeFi' && (
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      )}
                      {skill.name === 'Data Science' && (
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      )}
                      {skill.name === 'Leadership' && (
                        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      )}
                      {skill.name === 'Communication' && (
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      )}
                      {skill.name === 'Innovation' && (
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      )}
                      {skill.name === 'Entrepreneurship' && (
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      )}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-bold text-${skill.color}-400`}>{skill.percentage}%</div>
                  <div className="text-gray-400 text-sm">Proficiency</div>
                </div>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
                <div 
                  className={`bg-${skill.color}-400 h-3 rounded-full transition-all duration-1000`}
                  style={{width: `${skill.percentage}%`}}
                ></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {skill.subSkills.map((subSkill, subIndex) => (
                  <div key={subIndex} className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{subSkill.name}</span>
                    <span className={`text-${subSkill.color}-400 text-sm font-medium`}>{subSkill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
