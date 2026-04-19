'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/ventures', label: 'Ventures' },
  { href: '/skills', label: 'Skills' },
  { href: '/blog', label: 'Blog' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <nav
      id="header"
      className={cn(
        "fixed top-0 w-full backdrop-blur-md border-b border-white/[0.07] z-50 transition-all duration-300",
        isScrolled ? "bg-gray-950/95" : "bg-gray-950/80"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-playfair font-bold text-yellow-400">
            AH
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  "font-medium transition-colors",
                  pathname === href
                    ? "text-yellow-400 border-b border-yellow-400 pb-0.5"
                    : "text-gray-300 hover:text-yellow-400"
                )}
              >
                {label}
              </a>
            ))}
            <a
              href="/contact"
              className={cn(
                "border px-6 py-2 text-sm font-medium transition-all duration-200",
                pathname === '/contact'
                  ? "bg-yellow-400 text-gray-900 border-yellow-400"
                  : "border-yellow-400/60 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 hover:border-yellow-400"
              )}
            >
              Contact
            </a>
          </div>

          {/* Hamburger / Close button */}
          <button
            className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors p-1"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col space-y-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  "py-3 px-4 rounded-lg font-medium transition-colors",
                  pathname === href
                    ? "text-yellow-400 bg-yellow-400/10"
                    : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800"
                )}
              >
                {label}
              </a>
            ))}
            <a
              href="/contact"
              className={cn(
                "py-3 px-4 rounded-lg font-medium transition-colors mt-2",
                pathname === '/contact'
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 border border-yellow-400/30"
              )}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
