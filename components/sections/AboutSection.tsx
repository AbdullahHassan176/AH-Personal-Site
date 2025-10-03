'use client'

import { useEffect, useRef } from 'react'

export function AboutSection() {
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const animateProgressBars = () => {
      progressBarsRef.current.forEach((bar, index) => {
        if (bar) {
          const width = bar.style.width
          bar.style.width = '0%'
          setTimeout(() => {
            bar.style.width = width
          }, index * 200)
        }
      })
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateProgressBars()
        }
      })
    })

    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      observer.observe(aboutSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            About <span className="text-yellow-400">Abdullah</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-teal-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                As the founder of Global Next AI Think Tank and CEO of multiple ventures, I'm passionate about leveraging artificial intelligence to solve complex challenges in finance, logistics, and global trade.
              </p>
              <p>
                With a Master's degree in AI & Statistics, I've built companies that span from tokenization platforms to gaming ventures, always focusing on innovation and global impact.
              </p>
              <p>
                My journey combines deep technical expertise with entrepreneurial vision, creating solutions that bridge the gap between cutting-edge technology and real-world applications.
              </p>
            </div>
            
            {/* Skills Dashboard */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">AI/ML</span>
                  <span className="text-yellow-400 font-bold">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    ref={el => { progressBarsRef.current[0] = el }}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-1000" 
                    style={{width: '95%'}}
                  ></div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Finance</span>
                  <span className="text-teal-400 font-bold">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    ref={el => { progressBarsRef.current[1] = el }}
                    className="bg-gradient-to-r from-teal-400 to-teal-500 h-2 rounded-full transition-all duration-1000" 
                    style={{width: '90%'}}
                  ></div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Leadership</span>
                  <span className="text-purple-400 font-bold">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    ref={el => { progressBarsRef.current[2] = el }}
                    className="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full transition-all duration-1000" 
                    style={{width: '88%'}}
                  ></div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Innovation</span>
                  <span className="text-green-400 font-bold">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    ref={el => { progressBarsRef.current[3] = el }}
                    className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-1000" 
                    style={{width: '92%'}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Timeline Dashboard */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-playfair font-bold mb-8 text-yellow-400">Career Journey</h3>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-yellow-400">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <div className="text-yellow-400 font-semibold">2024 - Present</div>
                <div className="text-white font-medium">CEO & Founder</div>
                <div className="text-gray-400">Global Next AI Think Tank</div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-teal-400">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-400 rounded-full"></div>
                <div className="text-teal-400 font-semibold">2023 - Present</div>
                <div className="text-white font-medium">CEO</div>
                <div className="text-gray-400">Global Edge Trading</div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-purple-400">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="text-purple-400 font-semibold">2022 - Present</div>
                <div className="text-white font-medium">Founder</div>
                <div className="text-gray-400">Unamani AI Platform</div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-green-400">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="text-green-400 font-semibold">2021 - 2023</div>
                <div className="text-white font-medium">Master's Degree</div>
                <div className="text-gray-400">AI & Statistics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
