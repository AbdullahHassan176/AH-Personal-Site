export function AchievementsSection() {
  const achievements = [
    {
      title: 'AI Innovation Award',
      organization: 'Global AI Summit 2024',
      year: '2024',
      description: 'Recognized for groundbreaking work in AI-driven financial solutions and global trade optimization.',
      category: 'Innovation',
      color: 'yellow'
    },
    {
      title: 'Young Entrepreneur of the Year',
      organization: 'TechCrunch Disrupt',
      year: '2023',
      description: 'Awarded for exceptional leadership in building multiple successful ventures in AI and fintech.',
      category: 'Leadership',
      color: 'teal'
    },
    {
      title: 'Best AI Research Paper',
      organization: 'International AI Conference',
      year: '2023',
      description: 'Published research on "Quantum-Enhanced Machine Learning for Financial Markets" received top honors.',
      category: 'Research',
      color: 'purple'
    },
    {
      title: 'Global Impact Award',
      organization: 'World Economic Forum',
      year: '2022',
      description: 'Recognized for contributions to global trade optimization and supply chain innovation.',
      category: 'Impact',
      color: 'green'
    },
    {
      title: 'Top 40 Under 40',
      organization: 'Forbes Middle East',
      year: '2022',
      description: 'Featured in Forbes Middle East\'s list of top young entrepreneurs and innovators.',
      category: 'Recognition',
      color: 'blue'
    },
    {
      title: 'Best Startup Pitch',
      organization: 'Techstars Demo Day',
      year: '2021',
      description: 'Won the top prize for presenting Unamani AI platform at the global Techstars accelerator.',
      category: 'Entrepreneurship',
      color: 'red'
    }
  ]

  const publications = [
    {
      title: 'Quantum-Enhanced Machine Learning for Financial Markets',
      journal: 'Nature Machine Intelligence',
      year: '2024',
      authors: 'Hassan, A., et al.',
      description: 'Novel approach to using quantum computing principles in financial machine learning models.',
      citations: 45,
      color: 'yellow'
    },
    {
      title: 'AI-Driven Supply Chain Optimization in Global Trade',
      journal: 'Journal of Operations Research',
      year: '2023',
      authors: 'Hassan, A., Smith, J., et al.',
      description: 'Comprehensive study on applying AI to optimize international supply chains.',
      citations: 32,
      color: 'teal'
    },
    {
      title: 'Blockchain Tokenization of Real-World Assets',
      journal: 'IEEE Transactions on Blockchain',
      year: '2023',
      authors: 'Hassan, A., Johnson, M., et al.',
      description: 'Research on fractionalizing real-world assets through blockchain technology.',
      citations: 28,
      color: 'purple'
    },
    {
      title: 'Predictive Analytics for Risk Management in Trading',
      journal: 'Financial Engineering',
      year: '2022',
      authors: 'Hassan, A., et al.',
      description: 'Advanced risk management techniques using machine learning in algorithmic trading.',
      citations: 67,
      color: 'green'
    }
  ]

  const speakingEngagements = [
    {
      event: 'AI & Finance Summit 2024',
      title: 'The Future of AI in Global Trade',
      location: 'Dubai, UAE',
      date: 'March 2024',
      audience: '500+ attendees',
      color: 'yellow'
    },
    {
      event: 'TechCrunch Disrupt',
      title: 'Building AI-Powered Ventures',
      location: 'San Francisco, USA',
      date: 'September 2023',
      audience: '2,000+ attendees',
      color: 'teal'
    },
    {
      event: 'World Economic Forum',
      title: 'Digital Transformation in Emerging Markets',
      location: 'Davos, Switzerland',
      date: 'January 2023',
      audience: '1,000+ attendees',
      color: 'purple'
    },
    {
      event: 'Blockchain Conference',
      title: 'Tokenization: The Future of Asset Ownership',
      location: 'Singapore',
      date: 'November 2022',
      audience: '800+ attendees',
      color: 'green'
    }
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Achievements & <span className="text-yellow-400">Recognition</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Awards, publications, and speaking engagements that showcase expertise and impact
          </p>
        </div>
        
        {/* Awards & Recognition */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-bold mb-12 text-white text-center">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover-glow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-${achievement.color}-400 rounded-xl flex items-center justify-center mr-4`}>
                    <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className={`text-${achievement.color}-400 font-semibold`}>{achievement.year}</div>
                    <div className="text-gray-400 text-sm">{achievement.category}</div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{achievement.organization}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Publications */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-bold mb-12 text-white text-center">Research Publications</h3>
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover-glow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{publication.title}</h4>
                    <p className="text-gray-400 mb-2">{publication.authors}</p>
                    <p className="text-gray-300 mb-2">{publication.journal} • {publication.year}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{publication.description}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                    <div className="text-center">
                      <div className={`text-${publication.color}-400 text-2xl font-bold`}>{publication.citations}</div>
                      <div className="text-gray-400 text-sm">Citations</div>
                    </div>
                    <div className={`w-16 h-16 bg-${publication.color}-400 rounded-xl flex items-center justify-center`}>
                      <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Speaking Engagements */}
        <div>
          <h3 className="text-3xl font-playfair font-bold mb-12 text-white text-center">Speaking Engagements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {speakingEngagements.map((engagement, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover-glow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{engagement.title}</h4>
                    <p className="text-gray-400 mb-2">{engagement.event}</p>
                    <p className="text-gray-300 mb-2">{engagement.location} • {engagement.date}</p>
                    <p className="text-gray-300 text-sm">{engagement.audience}</p>
                  </div>
                  <div className={`w-12 h-12 bg-${engagement.color}-400 rounded-xl flex items-center justify-center ml-4`}>
                    <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
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
