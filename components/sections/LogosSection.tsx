'use client'

import { useState, useEffect } from 'react'

export function LogosSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const logos = [
    { name: "Azure", icon: "☁️" },
    { name: "Python", icon: "🐍" },
    { name: "R", icon: "📊" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Chainlink", icon: "⛓️" },
    { name: "Cosmos DB", icon: "🌌" },
    { name: "Deloitte", icon: "🏢" },
    { name: "Wits", icon: "🎓" },
    { name: "UAE", icon: "🇦🇪" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [logos.length])

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-4 text-white">
            Technologies & <span className="text-yellow-400">Partnerships</span>
          </h2>
          <p className="text-gray-400">Key technologies and organizations I work with</p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-8">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-500 ${
                index === currentIndex 
                  ? 'scale-110 opacity-100' 
                  : 'scale-90 opacity-60'
              }`}
            >
              <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-2 border border-gray-700 hover-glow">
                <span className="text-2xl">{logo.icon}</span>
              </div>
              <p className="text-gray-400 text-sm">{logo.name}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {logos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

