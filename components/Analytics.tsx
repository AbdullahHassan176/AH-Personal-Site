'use client'

import { useEffect } from 'react'

export function Analytics() {
  useEffect(() => {
    // Only load analytics in production
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ANALYTICS_ID) {
      // Add your analytics script here
      console.log('Analytics loaded')
    }
  }, [])

  return null
}
