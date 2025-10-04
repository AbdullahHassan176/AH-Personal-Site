'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav 
      id="header" 
      className={cn(
        "fixed top-0 w-full backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300",
        isScrolled ? "bg-gray-900" : "bg-gray-900/95"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-playfair font-bold text-yellow-400">
            AH
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">Home</a>
            <a href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">About</a>
            <a href="/projects" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">Projects</a>
            <a href="/skills" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">Skills</a>
            <a href="/contact" className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all hover-glow">
              Contact
            </a>
            <a href="/admin/login" className="text-gray-400 hover:text-gray-300 transition-colors text-sm">
              Admin
            </a>
          </div>
          <button className="md:hidden text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
