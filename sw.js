// Service worker mínimo, só para o navegador tratar o atalho como app instalável.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* sempre vai à rede */ });
