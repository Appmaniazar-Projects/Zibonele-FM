// Service Worker for Zibonele FM
const CACHE_NAME = 'zibonele-fm-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/icon/icon-192x192.png',
  '/assets/icon/icon-512x512.png'
];

// Install event - cache all static assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // Force the waiting service worker to become active
        self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating Service Worker...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Take control of all clients immediately
  return self.clients.claim();
});

// Fetch event - serve from cache, falling back to network
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests, like those for Google Analytics
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found
      if (response) {
        console.log('[Service Worker] Serving from cache:', event.request.url);
        return response;
      }
      
      // Otherwise, fetch from network
      return fetch(event.request)
        .then((response) => {
          // Don't cache non-GET requests or invalid responses
          if (event.request.method !== 'GET' || 
              !response || 
              response.status !== 200 || 
              response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          // Cache the response
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
    })
  );
});

// Handle background sync for media playback
self.addEventListener('sync', (event) => {
  if (event.tag === 'media-playback') {
    console.log('[Service Worker] Background sync for media playback');
  }
});

// Listen for messages (e.g., from the page)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
