export function TeamSection() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      company: 'Global Next AI Think Tank',
      expertise: 'AI Research & Machine Learning',
      experience: '8+ years',
      education: 'PhD in Computer Science, MIT',
      achievements: [
        'Published 25+ research papers',
        'Led AI projects at Google',
        'Expert in neural networks'
      ],
      color: 'yellow'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Operations',
      company: 'Global Edge Trading',
      expertise: 'International Trade & Logistics',
      experience: '12+ years',
      education: 'MBA in International Business',
      achievements: [
        'Managed $500M+ in trade volume',
        'Built partnerships in 20+ countries',
        'Expert in supply chain optimization'
      ],
      color: 'teal'
    },
    {
      name: 'Dr. Alex Thompson',
      role: 'Lead Blockchain Developer',
      company: 'Unamani AI Platform',
      expertise: 'Blockchain & Smart Contracts',
      experience: '6+ years',
      education: 'PhD in Cryptography',
      achievements: [
        'Developed 15+ blockchain protocols',
        'Expert in DeFi applications',
        'Open source contributor'
      ],
      color: 'purple'
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Product',
      company: 'Quantum Finance Labs',
      expertise: 'Product Management & UX',
      experience: '7+ years',
      education: 'MS in Human-Computer Interaction',
      achievements: [
        'Launched 10+ successful products',
        'Expert in fintech UX',
        'Led teams of 20+ designers'
      ],
      color: 'green'
    }
  ]

  const advisors = [
    {
      name: 'Prof. David Kim',
      role: 'AI Research Advisor',
      affiliation: 'Stanford University',
      expertise: 'Machine Learning & Ethics',
      color: 'blue'
    },
    {
      name: 'Jennifer Martinez',
      role: 'Business Strategy Advisor',
      affiliation: 'McKinsey & Company',
      expertise: 'Global Strategy & Operations',
      color: 'red'
    },
    {
      name: 'Dr. Robert Johnson',
      role: 'Financial Technology Advisor',
      affiliation: 'Goldman Sachs',
      expertise: 'FinTech & Risk Management',
      color: 'yellow'
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Team & <span className="text-yellow-400">Advisors</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Meet the talented individuals who make our ventures successful through their expertise and dedication
          </p>
        </div>
        
        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-bold mb-12 text-white text-center">Core Team Members</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover-glow">
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-${member.color}-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-gray-900`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-gray-400 mb-1">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.company}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-gray-400 text-sm">Expertise:</span>
                    <p className="text-white text-sm">{member.expertise}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Experience:</span>
                    <p className="text-white text-sm">{member.experience}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Education:</span>
                    <p className="text-white text-sm">{member.education}</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start">
                        <div className={`w-2 h-2 bg-${member.color}-400 rounded-full mr-3 mt-2`}></div>
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Advisory Board */}
        <div>
          <h3 className="text-3xl font-playfair font-bold mb-12 text-white text-center">Advisory Board</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover-glow text-center">
                <div className={`w-16 h-16 bg-${advisor.color}-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-gray-900`}>
                  {advisor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{advisor.name}</h4>
                <p className="text-gray-400 mb-2">{advisor.role}</p>
                <p className="text-gray-500 text-sm mb-4">{advisor.affiliation}</p>
                <div className={`px-4 py-2 rounded-full text-sm font-medium border border-${advisor.color}-400 bg-${advisor.color}-400/10`}>
                  <span className={`text-${advisor.color}-400`}>{advisor.expertise}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
