export function ProjectsHero() {
  return (
    <section className="pt-24 pb-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400/30">
              <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Portfolio
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 text-white leading-tight">
            My <span className="text-yellow-400">Projects</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Innovative solutions spanning AI research, tokenization platforms, and logistics optimization. 
            Each project represents a step forward in creating technology that serves real-world needs.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
              <div className="text-gray-400">Active Projects</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-teal-400 mb-2">$850K</div>
              <div className="text-gray-400">Assets Tokenized</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">15K+</div>
              <div className="text-gray-400">Transactions</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">3</div>
              <div className="text-gray-400">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

