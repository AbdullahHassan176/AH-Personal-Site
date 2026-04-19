'use client'

import { useEffect } from 'react'

export function PerformanceOptimization() {
  useEffect(() => {
    // Register service worker for offline caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // SW registration is a progressive enhancement — failure is fine
      })
    }
  }, [])

  return null
}

// Critical CSS — inlined in <head> before any external stylesheet loads.
// Prevents flash of wrong background/text color during initial paint.
export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          *,*::before,*::after{box-sizing:border-box}
          html{scroll-behavior:smooth}
          body{
            margin:0;
            background-color:#FBF7F1;
            color:#1A1A1A;
            font-family:Inter,system-ui,-apple-system,sans-serif;
            -webkit-font-smoothing:antialiased;
            -moz-osx-font-smoothing:grayscale;
          }
          #hero{min-height:100vh;background-color:#FBF7F1}
          nav{position:fixed;top:0;width:100%;z-index:50;background-color:rgba(251,247,241,0.90)}
        `,
      }}
    />
  )
}
