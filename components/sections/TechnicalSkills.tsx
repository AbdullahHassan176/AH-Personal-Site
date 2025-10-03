'use client'

import { useEffect, useRef } from 'react'

export function TechnicalSkills() {
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const animateProgressBars = () => {
      progressBarsRef.current.forEach((bar, index) => {
        if (bar) {
          const width = bar.style.width
          bar.style.width = '0%'
          setTimeout(() => {
            bar.style.width = width
          }, index * 200)
        }
      })
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateProgressBars()
        }
      })
    })

    const skillsSection = document.getElementById('technical-skills')
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      name: 'AI/ML',
      percentage: 95,
      color: 'yellow',
      description: 'Machine Learning & Neural Networks',
      subSkills: [
        { name: 'Deep Learning', level: 'Expert', color: 'yellow' },
        { name: 'NLP', level: 'Advanced', color: 'teal' },
        { name: 'Computer Vision', level: 'Advanced', color: 'purple' }
      ]
    },
    {
      name: 'Quant Finance',
      percentage: 90,
      color: 'teal',
      description: 'Financial Modeling & Analysis',
      subSkills: [
        { name: 'Risk Management', level: 'Expert', color: 'yellow' },
        { name: 'Derivatives', level: 'Advanced', color: 'teal' },
        { name: 'Algorithmic Trading', level: 'Advanced', color: 'green' }
      ]
    },
    {
      name: 'Logistics',
      percentage: 85,
      color: 'purple',
      description: 'Supply Chain & Tokenization',
      subSkills: [
        { name: 'Supply Chain', level: 'Expert', color: 'yellow' },
        { name: 'Blockchain', level: 'Advanced', color: 'teal' },
        { name: 'Smart Contracts', level: 'Advanced', color: 'purple' }
      ]
    },
    {
      name: 'Data Science',
      percentage: 88,
      color: 'green',
      description: 'Statistics & Analytics',
      subSkills: [
        { name: 'Statistical Modeling', level: 'Expert', color: 'yellow' },
        { name: 'Big Data', level: 'Advanced', color: 'teal' },
        { name: 'Visualization', level: 'Advanced', color: 'green' }
      ]
    }
  ]

  return (
    <section id="technical-skills" className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card rounded-2xl p-8 text-center hover-glow">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-700"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${skill.percentage * 2.51} 251`}
                    strokeDashoffset="0"
                    className={`text-${skill.color}-400 transition-all duration-1000`}
                    style={{
                      strokeDasharray: `${skill.percentage * 2.51} 251`,
                      strokeDashoffset: 0
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-${skill.color}-400 text-2xl font-bold`}>
                    {skill.percentage}%
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-gray-400 mb-4">{skill.description}</p>
              
              <div className="space-y-2 text-sm">
                {skill.subSkills.map((subSkill, subIndex) => (
                  <div key={subIndex} className="flex justify-between">
                    <span className="text-gray-500">{subSkill.name}</span>
                    <span className={`text-${subSkill.color}-400`}>{subSkill.level}</span>
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
