import { Experience } from '@/lib/data'

interface ExperienceTimelineProps {
  experience: Experience[]
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  const getDuration = (start: string, end: string | null) => {
    const startDate = new Date(start)
    const endDate = end ? new Date(end) : new Date()
    const months = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30))
    return months > 12 ? `${Math.floor(months / 12)}y ${months % 12}m` : `${months}m`
  }

  const getColor = (index: number) => {
    const colors = ['yellow', 'teal', 'purple', 'green', 'blue']
    return colors[index % colors.length]
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Professional <span className="text-yellow-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A journey through innovation, leadership, and technological advancement
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 bg-${getColor(index)}-400 rounded-full border-4 border-gray-800 z-10`}></div>
                
                {/* Content */}
                <div className="ml-16 flex-1">
                  <div className={`bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-${getColor(index)}-400 transition-all duration-300 hover-glow`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <div className={`text-${getColor(index)}-400 font-semibold text-lg mb-2`}>
                          {exp.start} - {exp.end || 'Present'}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <h4 className="text-xl text-gray-300 mb-2">{exp.company}</h4>
                        <p className="text-gray-400 mb-4">{exp.location}</p>
                      </div>
                      <div className={`px-4 py-2 rounded-full text-sm font-medium border border-${getColor(index)}-400 bg-${getColor(index)}-400/10`}>
                        <span className={`text-${getColor(index)}-400`}>{getDuration(exp.start, exp.end)}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-4">Key Achievements:</h4>
                      <div className="space-y-2">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-start">
                            <div className={`w-2 h-2 bg-${getColor(index)}-400 rounded-full mr-3 mt-2`}></div>
                            <span className="text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-4">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span key={techIndex} className={`px-3 py-1 rounded-full text-sm border border-${getColor(index)}-400 bg-${getColor(index)}-400/10 text-${getColor(index)}-400`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

