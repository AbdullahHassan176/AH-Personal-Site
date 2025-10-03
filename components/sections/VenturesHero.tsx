export function VenturesHero() {
  return (
    <section className="pt-24 pb-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400/30">
              <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              Entrepreneur & CEO
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 text-white leading-tight">
            My <span className="text-yellow-400">Ventures</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Building the future through innovative companies at the intersection of artificial intelligence, 
            finance, and global trade. Each venture represents a step forward in creating solutions that 
            transform industries and create positive global impact.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5</div>
              <div className="text-gray-400">Active Ventures</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-teal-400 mb-2">$2M+</div>
              <div className="text-gray-400">Total Funding</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

