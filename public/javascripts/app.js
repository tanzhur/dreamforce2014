L.mapbox.accessToken = window.mapboxAccessToken;

var geocoder = L.mapbox.geocoder('mapbox.places-v1'),
  mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/' + window.mapboxMapId + '/{z}/{x}/{y}.png'),
  map = L.map('map').addLayer(mapboxTiles);

geocoder.query('575 Sutter Street, San Francisco, CA', function (err, data) {
  if (err) { return console.error(err); }
  map.setView([data.latlng[0], data.latlng[1]], 14);
});

