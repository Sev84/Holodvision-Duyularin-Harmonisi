"use strict";

const CACHE_NAME = "nsosyal-duyu-studio-v2.0.0-web";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "../Inci%20Kupeli%20K%C4%B1z.jpeg",
  "../Inci%20Kupeli%20K%C4%B1z1.jpg",
  "../Monalisa.jpeg",
  "../Monalisa1.jpg",
  "../Picasso%20Olga1.jpg",
  "../Inci%20Kupeli%20K%C4%B1z%20Son%20Hali.mp3",
  "../Monalisa%20Son%20Hali.mp3",
  "../Picasso%20Olga%20Son%20Hali.mp3",
  "../fon%20muzik.mp3"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      if (!response || response.status !== 200 || response.type === "opaque") return response;
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match("./index.html")))
  );
});
