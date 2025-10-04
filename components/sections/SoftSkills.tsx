'use client'

import { useEffect, useRef } from 'react'

interface SoftSkillsProps {
  isVisible: boolean
  viewMode: string
}

export function SoftSkills({ isVisible, viewMode }: SoftSkillsProps) {
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

    const skillsSection = document.getElementById('soft-skills')
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      name: 'Leadership',
      percentage: 88,
      color: 'yellow',
      description: 'Team Management & Vision',
      subSkills: [
        { name: 'Team Building', level: 'Expert', color: 'yellow' },
        { name: 'Strategic Planning', level: 'Expert', color: 'teal' },
        { name: 'Decision Making', level: 'Advanced', color: 'purple' }
      ]
    },
    {
      name: 'Communication',
      percentage: 85,
      color: 'teal',
      description: 'Public Speaking & Negotiation',
      subSkills: [
        { name: 'Public Speaking', level: 'Expert', color: 'yellow' },
        { name: 'Negotiation', level: 'Advanced', color: 'teal' },
        { name: 'Presentation', level: 'Expert', color: 'green' }
      ]
    },
    {
      name: 'Innovation',
      percentage: 92,
      color: 'purple',
      description: 'Creative Problem Solving',
      subSkills: [
        { name: 'Design Thinking', level: 'Expert', color: 'yellow' },
        { name: 'Product Development', level: 'Advanced', color: 'teal' },
        { name: 'Market Analysis', level: 'Advanced', color: 'purple' }
      ]
    },
    {
      name: 'Entrepreneurship',
      percentage: 90,
      color: 'green',
      description: 'Business Development & Growth',
      subSkills: [
        { name: 'Business Strategy', level: 'Expert', color: 'yellow' },
        { name: 'Fundraising', level: 'Advanced', color: 'teal' },
        { name: 'Scaling', level: 'Advanced', color: 'green' }
      ]
    }
  ]

  if (!isVisible) return null

  return (
    <section id="soft-skills" className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card rounded-2xl p-8 text-center hover-glow">
              {viewMode === 'radial' ? (
                // Radial View
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
              ) : (
                // Bar View
                <div className="w-full mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className={`text-${skill.color}-400 font-bold`}>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      ref={el => { progressBarsRef.current[index] = el }}
                      className={`bg-${skill.color}-400 h-3 rounded-full transition-all duration-1000`}
                      style={{width: `${skill.percentage}%`}}
                    ></div>
                  </div>
                </div>
              )}
              
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

