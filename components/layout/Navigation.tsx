'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/ventures', label: 'Ventures' },
  { href: '/skills',   label: 'Skills' },
  { href: '/blog',     label: 'Blog' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled]   = useState(false)
  const [isMenuOpen, setIsMenuOpen]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <nav
      id="header"
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#FBF7F1]/98 shadow-[0_2px_24px_rgba(107,31,42,0.08)]'
          : 'bg-[#FBF7F1]/90',
        'backdrop-blur-xl border-b border-[#D6C3A3]/20'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-playfair font-bold tracking-tight select-none"
          style={{
            background: 'linear-gradient(135deg, #6B1F2A 0%, #1F6F54 50%, #C6A15B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          AH
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                pathname === href
                  ? 'text-[#6B1F2A] border-b border-[#6B1F2A] pb-0.5'
                  : 'text-[#5F5A55] hover:text-[#6B1F2A]'
              )}
            >
              {label}
            </a>
          ))}

          <a
            href="/contact"
            className={cn(
              'btn-burgundy px-6 py-2.5 text-sm font-semibold rounded-[var(--radius-md)] tracking-wide',
              pathname === '/contact' && 'opacity-90'
            )}
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#5F5A55] hover:text-[#6B1F2A] transition-colors p-1"
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FBF7F1] border-t border-[#D6C3A3]/30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  'py-3 px-4 rounded-[var(--radius-md)] text-sm font-medium transition-colors',
                  pathname === href
                    ? 'text-[#6B1F2A] bg-[rgba(107,31,42,0.06)]'
                    : 'text-[#5F5A55] hover:text-[#6B1F2A] hover:bg-[rgba(107,31,42,0.04)]'
                )}
              >
                {label}
              </a>
            ))}
            <a
              href="/contact"
              className="btn-burgundy mt-2 py-3 px-4 rounded-[var(--radius-md)] text-sm font-semibold text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
