'use client'

import { useEffect } from 'react'

export function PerformanceOptimization() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/DSCF6400.JPG',
        '/favicon.ico',
        '/favicon.svg',
      ]

      criticalImages.forEach((src) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Lazy load images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach((img) => imageObserver.observe(img))
    }

    // Optimize font loading
    const optimizeFonts = () => {
      if ('fonts' in document) {
        Promise.all([
          document.fonts.load('400 16px Inter'),
          document.fonts.load('400 16px Playfair Display'),
        ]).then(() => {
          document.documentElement.classList.add('fonts-loaded')
        })
      }
    }

    // Initialize optimizations
    preloadCriticalResources()
    lazyLoadImages()
    optimizeFonts()

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, but that's okay
      })
    }
  }, [])

  return null
}

// Image optimization component
interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  lazy?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  lazy = true,
}: OptimizedImageProps) {
  const imageProps = {
    src: priority ? src : undefined,
    'data-src': lazy && !priority ? src : undefined,
    alt,
    width,
    height,
    className: `${className} ${lazy && !priority ? 'lazy opacity-0 transition-opacity duration-300' : ''}`,
    loading: priority ? 'eager' as const : 'lazy' as const,
    decoding: 'async' as const,
  }

  return <img {...imageProps} />
}

// Critical CSS inlining component
export function CriticalCSS() {
  const criticalCSS = `
    /* Critical above-the-fold styles */
    body { 
      font-family: Inter, system-ui, sans-serif; 
      background-color: #1f2937; 
      color: #ffffff; 
    }
    .hero-section { 
      min-height: 100vh; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
    }
    .loading { 
      opacity: 0; 
      transition: opacity 0.3s ease; 
    }
    .loaded { 
      opacity: 1; 
    }
  `

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: criticalCSS,
      }}
    />
  )
}
