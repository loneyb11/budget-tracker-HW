var CACHE_NAME = 'my-site-cache-v1';

var urlsToCache = [
    '/',
    '/styles.css',
    'index.js'
];


self.addEventListener('install', function(event){
    event.waitUntil(
        canches.open(CACHE_NAME)
        .then(function(cache){
            console.log('Cache opened');
            return cache.addAll(urlsToCache);
        })
    );
    });

    self.addEventListener("fetch", function(event){
        event.respondWith(
            fetch(event.request).catch(function(){
                return caches.match(event.request).then(function(response){
                    if (response) {
                        return response;
                    } else if (event.request.headers.get("accept").includes
                    ("text/html")){
                        return caches.match("/index.html");
                    }
                });
            })
        );
        });