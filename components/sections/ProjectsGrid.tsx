'use client'

import { useState } from 'react'
import { Project } from '@/lib/data'

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const getColor = (category: string) => {
    const colors: Record<string, string> = {
      'Web3 / Tokenization': 'purple',
      'AI & Quant Research': 'yellow',
      'Logistics': 'teal',
      'FinTech': 'green',
      'Web': 'blue'
    }
    return colors[category] || 'gray'
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Project <span className="text-yellow-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Innovative solutions that demonstrate technical expertise and business impact
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeFilter === category
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover-glow">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-${getColor(project.category)}-400 rounded-xl flex items-center justify-center mr-4 text-2xl`}>
                      {project.category === 'Web3 / Tokenization' && '⚡'}
                      {project.category === 'AI & Quant Research' && '🧠'}
                      {project.category === 'Logistics' && '🌍'}
                      {project.category === 'FinTech' && '💰'}
                      {project.category === 'Web' && '🌐'}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                      <p className="text-gray-400">{project.year} • {project.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.summary}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Outcomes:</h4>
                    <div className="space-y-2">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className="flex items-start">
                          <div className={`w-2 h-2 bg-${getColor(project.category)}-400 rounded-full mr-3 mt-2`}></div>
                          <span className="text-gray-300 text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-3 py-1 rounded-full text-sm border border-${getColor(project.category)}-400 bg-${getColor(project.category)}-400/10 text-${getColor(project.category)}-400`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {project.links.site && (
                      <a 
                        href={project.links.site} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover-glow transition-all"
                      >
                        View Site
                      </a>
                    )}
                    {project.links.repo && (
                      <a 
                        href={project.links.repo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:border-yellow-400 hover:text-yellow-400 transition-all"
                      >
                        View Code
                      </a>
                    )}
                    {project.links.paper && (
                      <a 
                        href={project.links.paper} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:border-yellow-400 hover:text-yellow-400 transition-all"
                      >
                        Read Paper
                      </a>
                    )}
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