export function CompanyDetails() {
  const companies = [
    {
      name: 'Global Next AI Think Tank',
      logo: '🧠',
      industry: 'AI Research & Innovation',
      founded: '2024',
      headquarters: 'Dubai, UAE',
      employees: '25+',
      description: 'Leading AI research and innovation platform connecting global experts to solve complex challenges through artificial intelligence.',
      mission: 'To democratize AI research and create solutions that address humanity\'s greatest challenges through collaborative innovation.',
      vision: 'A world where AI serves humanity\'s greatest needs through ethical, transparent, and accessible research.',
      keyInitiatives: [
        'Global AI Research Network',
        'Ethical AI Guidelines',
        'Open Source AI Tools',
        'AI Education Programs'
      ],
      color: 'yellow'
    },
    {
      name: 'Global Edge Trading',
      logo: '🌍',
      industry: 'International Trade & Logistics',
      founded: '2023',
      headquarters: 'Singapore',
      employees: '15+',
      description: 'International trading company specializing in logistics optimization and supply chain management across global markets.',
      mission: 'To optimize global trade through intelligent logistics solutions and sustainable supply chain practices.',
      vision: 'Creating a more connected and efficient global trading ecosystem that benefits all stakeholders.',
      keyInitiatives: [
        'Supply Chain Optimization',
        'Sustainable Trade Practices',
        'Digital Trade Platforms',
        'Global Partnership Network'
      ],
      color: 'teal'
    },
    {
      name: 'Unamani AI Platform',
      logo: '⚡',
      industry: 'FinTech & Blockchain',
      founded: '2022',
      headquarters: 'London, UK',
      employees: '12+',
      description: 'Advanced AI-powered platform for tokenization and digital asset management, revolutionizing how assets are digitized and traded.',
      mission: 'To democratize access to advanced financial tools through AI-powered tokenization and digital asset management.',
      vision: 'A future where any asset can be tokenized and traded seamlessly across global markets.',
      keyInitiatives: [
        'Asset Tokenization Platform',
        'AI-Powered Risk Assessment',
        'Mobile Trading App',
        'Regulatory Compliance Tools'
      ],
      color: 'purple'
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Company <span className="text-yellow-400">Details</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Deep dive into the mission, vision, and strategic initiatives of each venture
          </p>
        </div>
        
        <div className="space-y-16">
          {companies.map((company, index) => (
            <div key={index} className="bg-gray-800 rounded-3xl p-8 lg:p-12 border border-gray-700 hover-glow">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Company Header */}
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-20 h-20 bg-${company.color}-400 rounded-3xl flex items-center justify-center mr-6 text-3xl`}>
                      {company.logo}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{company.name}</h3>
                      <p className="text-gray-400">{company.industry}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Founded:</span>
                      <span className="text-white">{company.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Headquarters:</span>
                      <span className="text-white">{company.headquarters}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Team Size:</span>
                      <span className="text-white">{company.employees}</span>
                    </div>
                  </div>
                  
                  <div className={`px-4 py-2 rounded-full text-sm font-medium border border-${company.color}-400 bg-${company.color}-400/10`}>
                    <span className={`text-${company.color}-400`}>Active</span>
                  </div>
                </div>
                
                {/* Mission & Vision */}
                <div className="lg:col-span-2">
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-white mb-4">Mission</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">{company.mission}</p>
                    
                    <h4 className="text-xl font-bold text-white mb-4">Vision</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">{company.vision}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6">Key Initiatives</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {company.keyInitiatives.map((initiative, initiativeIndex) => (
                        <div key={initiativeIndex} className="flex items-center">
                          <div className={`w-6 h-6 bg-${company.color}-400 rounded-full flex items-center justify-center mr-3`}>
                            <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-300">{initiative}</span>
                        </div>
                      ))}
                    </div>
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
