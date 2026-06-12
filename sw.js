const STATIC_CACHE = 'golfavstand-static-v1';
const STATIC_ASSETS = ['/golfavstand/Ekerum.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(STATIC_CACHE).then(c => c.addAll(STATIC_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== STATIC_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // HTML: alltid från nätverket (senaste versionen), falla tillbaka på cache om offline
  if (url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
    e.respondWith(
      fetch(e.request)
        .then(r => { const c = r.clone(); caches.open(STATIC_CACHE).then(cache => cache.put(e.request, c)); return r; })
        .catch(() => caches.match(e.request))
    );
    return;
  }
  // Statiska filer: cache-first
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
