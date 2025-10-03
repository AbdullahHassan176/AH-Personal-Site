'use client'

import { useState, useEffect } from 'react'
import { Switch } from '@radix-ui/react-switch'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('theme')
    if (saved) {
      setIsDark(saved === 'dark')
    }
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-400">Light</span>
        <div className="w-11 h-6 bg-gray-600 rounded-full relative">
          <span className="block w-4 h-4 bg-white rounded-full absolute top-1 left-1" />
        </div>
        <span className="text-sm text-gray-400">Dark</span>
      </div>
    )
  }

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm text-gray-400">Light</span>
      <Switch
        checked={isDark}
        onCheckedChange={setIsDark}
        className="w-11 h-6 bg-gray-600 rounded-full relative transition-colors data-[state=checked]:bg-yellow-400"
      >
        <span className="block w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform data-[state=checked]:translate-x-5" />
      </Switch>
      <span className="text-sm text-gray-400">Dark</span>
    </div>
  )
}

