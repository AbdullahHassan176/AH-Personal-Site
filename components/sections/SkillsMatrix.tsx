export function SkillsMatrix() {
  const skills = [
    {
      category: 'Artificial Intelligence',
      icon: 'brain',
      color: 'yellow',
      proficiency: 95,
      experience: '5+ Years',
      projects: '12+',
      certification: 'Certified'
    },
    {
      category: 'Quantitative Finance',
      icon: 'chart-line',
      color: 'teal',
      proficiency: 90,
      experience: '4+ Years',
      projects: '8+',
      certification: 'Certified'
    },
    {
      category: 'Leadership',
      icon: 'users',
      color: 'purple',
      proficiency: 88,
      experience: '6+ Years',
      projects: '5 Companies',
      certification: 'Executive'
    },
    {
      category: 'Innovation',
      icon: 'lightbulb',
      color: 'green',
      proficiency: 92,
      experience: '7+ Years',
      projects: '15+',
      certification: 'Founder'
    }
  ]

  const getIcon = (iconName: string) => {
    const icons = {
      brain: (
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      'chart-line': (
        <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 13h2v4H7v-4zm4-6h2v10h-2V7zm4-4h2v14h-2V3z" />
      ),
      users: (
        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      ),
      lightbulb: (
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      )
    }
    return icons[iconName as keyof typeof icons] || icons.brain
  }

  const getCertificationColor = (certification: string) => {
    switch (certification) {
      case 'Certified': return 'bg-green-100 text-green-800'
      case 'Executive': return 'bg-blue-100 text-blue-800'
      case 'Founder': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section id="skill-matrix" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Skills <span className="text-yellow-400">Matrix</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive overview of skill proficiency across different domains
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 text-yellow-400 font-semibold">Skill Category</th>
                  <th className="text-center py-4 px-6 text-gray-300 font-semibold">Proficiency</th>
                  <th className="text-center py-4 px-6 text-gray-300 font-semibold">Experience</th>
                  <th className="text-center py-4 px-6 text-gray-300 font-semibold">Projects</th>
                  <th className="text-right py-4 px-6 text-gray-300 font-semibold">Certification</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill, index) => (
                  <tr key={index} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 bg-${skill.color}-400 rounded-xl flex items-center justify-center mr-4`}>
                          <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                            {getIcon(skill.icon)}
                          </svg>
                        </div>
                        <span className="text-white font-medium">{skill.category}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`bg-${skill.color}-400 h-2 rounded-full transition-all duration-1000`}
                          style={{width: `${skill.proficiency}%`}}
                        ></div>
                      </div>
                      <span className={`text-${skill.color}-400 text-sm font-medium`}>{skill.proficiency}%</span>
                    </td>
                    <td className="py-4 px-6 text-center text-gray-300">{skill.experience}</td>
                    <td className="py-4 px-6 text-center text-gray-300">{skill.projects}</td>
                    <td className="py-4 px-6 text-right">
                      <span className={`${getCertificationColor(skill.certification)} text-xs font-medium px-3 py-1 rounded-full`}>
                        {skill.certification}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

