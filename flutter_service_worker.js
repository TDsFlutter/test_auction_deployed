'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "506b001b2df9eaba03621579253d0516",
"assets/AssetManifest.bin.json": "b79bbf98cd8f7117e7a1874a467ed11a",
"assets/AssetManifest.json": "ae191fd9370d8147519458e9d37ce310",
"assets/assets/fonts/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/fonts/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/icons/allRounder.png": "061267654b84a43d2f49d677631ffc98",
"assets/assets/icons/auctiondefoultlogo.png": "9ee3729ce229235114008aa152958e86",
"assets/assets/icons/batsman.png": "c0b35a4cffe2d497bc85c9c6e97b8b8a",
"assets/assets/icons/bowler.png": "2cdcdf2d2d34c15337c1c73cf99d6bfb",
"assets/assets/icons/crick_Badge.png": "af664c75dc8e3b1eb20481820aff9bac",
"assets/assets/icons/euro.png": "c60dc9ed4e7764c45da86c672641d60b",
"assets/assets/icons/newPlayerSound.png": "1107ec29266b3ce1e3df2be62cf4210d",
"assets/assets/icons/playersLogo.png": "30655c9abf0f0e9ca03ad7ba1a5e6b48",
"assets/assets/icons/settings.png": "1af9fa7f10dded8f6680325bbfbe5f09",
"assets/assets/icons/soldSound.png": "c958beb26762e12978c7e1664b008d75",
"assets/assets/icons/wicketKeeper.png": "f15e7a0b3d1c5779abd4e5277497694d",
"assets/assets/images/cricketAuctionLogo.png": "d4546858d72791de9fb7cf16fb27bbf8",
"assets/assets/images/cricketPlayerWithBg.png": "799c795a1563481cf06dc532c0d3ceb3",
"assets/assets/images/cricketPlayerWithBorderBg.png": "888ee163769db99fbfd0b515d33db09b",
"assets/assets/images/cricketTeamLogo.png": "0a4c0611a156a38386a50e05cad77e70",
"assets/assets/images/decorationBg.png": "f40d0c272d33c375db7cef1b914030a8",
"assets/assets/images/playShortNameBgImage.png": "681f23688c0c3f68bc9b227634cc278c",
"assets/assets/images/soldout.png": "2c0fb33972a2d9f0d3cc5293e962bad0",
"assets/assets/images/sold_player.png": "fdd8c30c016179a57414967cb5179d01",
"assets/assets/images/transparentBg.png": "32ad4d71895274e35b26587acb2e017d",
"assets/assets/images/transparentBgMobile.png": "1bacab119bf0edd8933f83ea1554f7df",
"assets/assets/images/unsold.png": "e4f89d51307be9bc8ed264451bc920b9",
"assets/assets/images/unsold_image.png": "bc18e82a4dfda96402da4fe5317226c2",
"assets/assets/sound/sold.wav": "8b12b7eb3a81b68bb05e136725304819",
"assets/assets/sound/unsold.wav": "b40887310567d33fcba215ff5ed88f98",
"assets/FontManifest.json": "685a4775a03b9557dc68fe42f6e95df0",
"assets/fonts/MaterialIcons-Regular.otf": "9cf141a6d8a9cafa354c783c53aeeab6",
"assets/NOTICES": "492bc5dc8d21792cc37fbf942a48bce8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "72eae968d648b4e063963e43dfe0f65d",
"/": "72eae968d648b4e063963e43dfe0f65d",
"main.dart.js": "5e68ec6327c1d113da8f6c83aaba61aa",
"manifest.json": "e8929144fd3e46fbb6a49b2db7c43e46",
"version.json": "b9350a404af2f162261e377de147f82f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
