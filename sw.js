self.addEventListener("install", event=> event.waitUntil(caches.open("React App")
                        .then ( cache=> {return cache.add("/")})))

self.addEventListener("fetch", event=> {
            event.respondWith( caches.match(event.request)
            .then( Response =>{
                Response || fetch(event.request)
            }))
})