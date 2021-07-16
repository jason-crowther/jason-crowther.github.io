"use strict";

const CACHE_NAME = "jc-cache-v1.1";
const urlsToCache = [
	"./",
	"./dist/js/app.js",
	"./dist/icons/jc-logo.svg",
	"./dist/images/main-bg-2.jpg",
	"./dist/images/jason.jpg",
	"./dist/images/portfolio/ace.png",
	"./dist/images/portfolio/avenue-halls.png",
	"./dist/images/portfolio/ie-divorce.png",
	"./dist/images/portfolio/kct.png",
	"./dist/images/portfolio/let-us-talk.png",
	"./dist/images/portfolio/the-hiking-chronicles.png",
	"./dist/images/portfolio/english-with-natasha.png",
	"./dist/images/portfolio/property-on-show.png",
];

self.addEventListener("install", function (event) {
	// Perform install steps
	console.log("Service Worker installing.");
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			console.log("Opened cache");
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener("fetch", function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			// Cache hit - return response
			if (response) {
				return response;
			}

			var fetchRequest = event.request.clone();

			return fetch(fetchRequest).then(function (response) {
				// Check if we received a valid response
				if (!response || response.status !== 200 || response.type !== "basic") {
					return response;
				}

				var responseToCache = response.clone();

				caches.open(CACHE_NAME).then(function (cache) {
					cache.put(event.request, responseToCache);
				});

				return response;
			});
		})
	);
});

self.addEventListener("activate", function (event) {
	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames.map(function (cacheName) {
					if (CACHE_NAME.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
