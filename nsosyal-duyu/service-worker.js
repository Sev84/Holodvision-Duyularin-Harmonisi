"use strict";

const CACHE_NAME = "nsosyal-duyu-studio-v2.1.0";
const APP_SHELL = [
  "./",
  "./index.html",
  "./usability.html",
  "./styles.css",
  "./app.js",
  "./usability.js",
  "./manifest.webmanifest",
  "./assets/images/inci-kupeli-kiz.jpg",
  "./assets/images/inci-kupeli-kiz-piksel.jpg",
  "./assets/images/mona-lisa.jpg",
  "./assets/images/mona-lisa-piksel.jpg",
  "./assets/images/picasso-olga-piksel.jpg",
  "./assets/audio/inci-kupeli-kiz.mp3",
  "./assets/audio/mona-lisa.mp3",
  "./assets/audio/picasso-olga.mp3",
  "./assets/audio/fon-muzigi.mp3"
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
