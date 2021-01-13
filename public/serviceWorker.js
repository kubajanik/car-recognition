self.addEventListener('fetch', e => {
  e.respondWith((async () => {
    const cachedResponse = await caches.match(e.request)
    if (cachedResponse) {
      return cachedResponse
    }

    const response = await fetch(e.request)
    const cache = await caches.open('cache')

    cache.put(e.request, response.clone())
    return response
  })())
})

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const cache = await caches.open('cache')
    await cache.addAll([
      '/style.css',
      '/index.html',
      '/static/js'
    ])
  })())
})