'use strict';
 
const CACHE_NAME = 'jc-cache-v1.1';
const urlsToCache = [
  './',
  './assets/css/main.css',
  './assets/js/main.js',
  './assets/images/jc-logo.svg',
  './assets/images/linkedin.svg',
  './assets/images/arrow.svg',
  './assets/images/portfolio/ace.png',
  './assets/images/portfolio/avenue-halls.png',
  './assets/images/portfolio/ie-divorce.png',
  './assets/images/portfolio/kct.png',
  './assets/images/portfolio/let-us-talk.png',
  './assets/images/portfolio/make-up-issue.png',
  './assets/images/portfolio/tegan-smith-photo.png',
  './assets/images/portfolio/the-hiking-chronicles.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
  
          var fetchRequest = event.request.clone();
  
          return fetch(fetchRequest).then(
            function(response) {
              // Check if we received a valid response
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              var responseToCache = response.clone();
  
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
      );
  });

  self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (CACHE_NAME.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });