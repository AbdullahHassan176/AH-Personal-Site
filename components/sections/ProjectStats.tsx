export function ProjectStats() {
  return (
    <section id="stats" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
            <div className="text-gray-400">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">12</div>
            <div className="text-gray-400">Research Papers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">8</div>
            <div className="text-gray-400">AI Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">5</div>
            <div className="text-gray-400">Active Ventures</div>
          </div>
        </div>
      </div>
    </section>
  )
}
