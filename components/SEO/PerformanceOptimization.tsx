'use client'

import { useEffect } from 'react'

export function PerformanceOptimization() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/DSCF6400.JPG', // Hero image
        '/images/DSCF6402.JPG', // Gallery images
        '/images/DSCF6428.JPG',
      ]

      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.classList.remove('opacity-0')
            img.classList.add('opacity-100')
            observer.unobserve(img)
          }
        })
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImages()

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration)
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError)
          })
      })
    }
  }, [])

  return null
}

// Critical CSS component for above-the-fold content
export function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical CSS for above-the-fold content */
        body {
          font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
          background-color: #0a0a0a;
          color: #ffffff;
          margin: 0;
          padding: 0;
        }
        
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }
        
        .text-yellow-400 {
          color: #fbbf24;
        }
        
        .bg-yellow-600 {
          background-color: #d97706;
        }
        
        /* Prevent layout shift */
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* Loading states */
        .lazy {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        
        .lazy.loaded {
          opacity: 1;
        }
      `
    }} />
  )
}
