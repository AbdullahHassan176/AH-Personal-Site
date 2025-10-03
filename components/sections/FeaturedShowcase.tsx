'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: "Global Next AI Think Tank Platform",
    description: "Revolutionary AI research platform connecting global experts, facilitating collaborative innovation, and accelerating breakthrough discoveries in artificial intelligence.",
    tags: ["AI Research", "Platform Development", "Innovation"],
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/4b798647a2-6d2b07ea9d36eab16cac.png"
  },
  {
    title: "Quantum-Enhanced Trading Algorithm",
    description: "Next-generation trading system leveraging quantum computing principles for ultra-fast market analysis and prediction with unprecedented accuracy.",
    tags: ["Quantum Computing", "Trading", "AI"],
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/4b798647a2-6d2b07ea9d36eab16cac.png"
  },
  {
    title: "Autonomous Supply Chain Network",
    description: "Self-managing logistics ecosystem using AI agents to optimize global trade routes, predict demand, and minimize environmental impact.",
    tags: ["Logistics", "AI Agents", "Sustainability"],
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/4b798647a2-6d2b07ea9d36eab16cac.png"
  }
]

export function FeaturedShowcase() {
  const [currentProject, setCurrentProject] = useState(0)

  const handleRandomShowcase = () => {
    const randomIndex = Math.floor(Math.random() * projects.length)
    setCurrentProject(randomIndex)
  }

  const project = projects[currentProject]

  return (
    <section id="featured-showcase" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-8 border border-gray-600">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mr-4">
                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  FEATURED
                </span>
                <span className="text-gray-400 text-sm">AI Powered Selection</span>
              </div>
              
              <h2 className="text-4xl font-playfair font-bold mb-4 text-white">
                {project.title}
              </h2>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm border border-yellow-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-colors">
                  <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  View Project
                </button>
                <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-colors">
                  <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Technical Details
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-teal-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <Image 
                  className="w-full h-64 rounded-xl object-cover" 
                  src={project.image} 
                  alt="AI research platform interface, modern dashboard, neural network visualization, dark theme with golden accents"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
