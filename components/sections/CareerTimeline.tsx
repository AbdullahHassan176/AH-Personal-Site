export function CareerTimeline() {
  const timeline = [
    {
      year: '2024 - Present',
      title: 'CEO & Founder',
      company: 'Global Next AI Think Tank',
      description: 'Leading AI research and innovation, developing cutting-edge solutions for global challenges through artificial intelligence.',
      color: 'yellow',
      achievements: [
        'Launched AI research platform',
        'Connected 500+ global experts',
        'Secured $2M in funding',
        'Published 12 research papers'
      ]
    },
    {
      year: '2023 - Present',
      title: 'CEO',
      company: 'Global Edge Trading',
      description: 'International trading company specializing in logistics optimization and supply chain management across global markets.',
      color: 'teal',
      achievements: [
        'Expanded to 15 countries',
        'Reduced logistics costs by 30%',
        'Built 45+ global partnerships',
        'Generated $1.2M monthly volume'
      ]
    },
    {
      year: '2022 - Present',
      title: 'Founder',
      company: 'Unamani AI Platform',
      description: 'Advanced AI-powered platform for tokenization and digital asset management, revolutionizing how assets are digitized and traded.',
      color: 'purple',
      achievements: [
        'Tokenized $850K in assets',
        '2,340 active users',
        '15,670 transactions processed',
        'Launched mobile app'
      ]
    },
    {
      year: '2021 - 2023',
      title: 'Master\'s Degree',
      company: 'AI & Statistics',
      description: 'Advanced studies in artificial intelligence and statistical modeling, focusing on applications in finance and global trade.',
      color: 'green',
      achievements: [
        'Graduated with distinction',
        'Published 8 research papers',
        'Led AI research projects',
        'Mentored 20+ students'
      ]
    },
    {
      year: '2020 - 2021',
      title: 'Senior Data Scientist',
      company: 'FinTech Solutions',
      description: 'Developed machine learning models for risk assessment and automated trading systems in the financial technology sector.',
      color: 'blue',
      achievements: [
        'Improved model accuracy by 25%',
        'Reduced risk exposure by 40%',
        'Led team of 8 data scientists',
        'Implemented real-time analytics'
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
            Career <span className="text-yellow-400">Timeline</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A journey through innovation, leadership, and technological advancement
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 bg-${item.color}-400 rounded-full border-4 border-gray-800 z-10`}></div>
                
                {/* Content */}
                <div className="ml-16 flex-1">
                  <div className={`bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-${item.color}-400 transition-all duration-300 hover-glow`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <div className={`text-${item.color}-400 font-semibold text-lg mb-2`}>{item.year}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <h4 className="text-xl text-gray-300 mb-4">{item.company}</h4>
                      </div>
                      <div className={`px-4 py-2 rounded-full text-sm font-medium ${getColorClasses(item.color)}`}>
                        <span className={getTextColor(item.color)}>Key Achievements</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center">
                          <div className={`w-2 h-2 bg-${item.color}-400 rounded-full mr-3`}></div>
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
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

