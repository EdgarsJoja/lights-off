self.addEventListener('install', (event) => {
  console.log('installing...');
});

self.addEventListener('fetch', event => {
  console.log('fetching...', event.request.url);
});
