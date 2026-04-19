// Bump version whenever cached assets change so old caches are purged
const CACHE_NAME = 'ah-site-v3'

const STATIC_ASSETS = [
  '/',
  '/about/',
  '/projects/',
  '/skills/',
  '/ventures/',
  '/contact/',
  '/favicon.ico',
  '/favicon.svg',
  '/manifest.json',
  '/images/DSCF6400.JPG',
  '/images/DSCF6402.JPG',
  '/images/DSCF6428.JPG',
  '/images/DSCF6446.JPG',
  '/images/DSCF6453.JPG',
  '/images/image0.jpeg',
]

// Install — cache all static assets immediately
self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  )
})

// Activate — delete any old cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  )
})

// Fetch — stale-while-revalidate for HTML, cache-first for assets
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return

  // For navigation (HTML pages) — network first, fall back to cache
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy))
          return response
        })
        .catch(() => caches.match(request).then((r) => r || caches.match('/')))
    )
    return
  }

  // For static assets (_next/static, images, fonts) — cache first
  if (
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/fonts/')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached
        return fetch(request).then((response) => {
          const copy = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy))
          return response
        })
      })
    )
    return
  }

  // Default — network with cache fallback
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  )
})
