const CACHE_NAME = 'bv-tracker-v12';

// All local assets to pre-cache on install
// Use relative paths so this works on any hosting path (e.g. GitHub Pages subfolders)
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './history.html',
  './spectator.html',
  './remote.html',
  './poster.html',
  './manifest.json',
  './bellaLogo.jpg',
  './belaLogo1.jpg',
  './logos/Orange Inferno.jpg',
  './logos/Gray Wolves.jpg',
  './logos/Green Bulls.jpg',
  './logos/Bella Vista Blue.jpg',
  './logos/Black Hoopers.jpg',
  './logos/Yellow Slashers.jpg',
  './logos/Red Blood Cells.jpg',
  './logos/Porpol Ravens.jpg',
  './logos/Bella Vista League Logo.jpeg',
  './logos/Cafe Bara.jpeg'
];

// ── Install: pre-cache all local assets ──────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Use individual adds so a missing logo doesn't block the whole install
      return Promise.allSettled(
        PRECACHE_ASSETS.map(url => cache.add(url).catch(() => {}))
      );
    })
  );
  self.skipWaiting();
});

// ── Activate: clear old caches ────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// ── Fetch: cache-first for local, network-only for external ──────────────────
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Let Firebase, Google Fonts, imgly CDN, and other external requests
  // go straight to the network — they handle their own caching
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      // Not in cache — fetch from network and cache for next time
      return fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // If both cache and network fail for an HTML page, return index as fallback
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
