'use client'

import { useEffect, useState } from 'react'

export function RocketAnimation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${0.5 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-gray-300 rounded-full shadow-2xl">
        <div className="absolute top-4 left-4 w-8 h-8 bg-gray-400 rounded-full"></div>
        <div className="absolute top-8 right-6 w-4 h-4 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-6 left-6 w-6 h-6 bg-gray-400 rounded-full"></div>
      </div>

      {/* Rocket */}
      <div className="rocket-container">
        <div className="rocket">
          {/* Rocket Body */}
          <div className="rocket-body">
            <div className="rocket-window"></div>
            <div className="rocket-fins">
              <div className="fin fin-left"></div>
              <div className="fin fin-right"></div>
            </div>
          </div>
          
          {/* Rocket Flame */}
          <div className="rocket-flame">
            <div className="flame flame-1"></div>
            <div className="flame flame-2"></div>
            <div className="flame flame-3"></div>
          </div>
        </div>
      </div>

      {/* Trailing Stars */}
      <div className="trail-container">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="trail-star"
            style={{
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

    </div>
  )
}
