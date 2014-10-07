L.mapbox.accessToken = window.mapboxAccessToken;

var geocoder = L.mapbox.geocoder('mapbox.places-v1'),
  mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/' + window.mapboxMapId + '/{z}/{x}/{y}.png'),
  map = L.map('map').addLayer(mapboxTiles);

function displayMap(zoom) {
  return function (err, data) {
    if (err) { return console.error(err); }
    map.setView(data.latlng, zoom);
  };
}

function dropMarker(location, data) {
  L.marker(data.latlng).bindPopup(location.name).addTo(map);
  return data.latlng;
}

function fetchLocations(cb) {
  cb(null, [
    {
      name: 'Port of Oakland',
      address: '530 Water Street, Oakland, CA 94607'
    },
    {
      name: 'Port of San Francisco',
      address: 'Pier 1 The Embarcadero, San Francisco, CA 94111'
    }
  ]);
}

geocoder.query('575 Sutter Street, San Francisco, CA', displayMap(11));
fetchLocations(function (err, locations) {
  if (err) { return console.error(err); }
  var markers = [];
  locations.forEach(function (location) {
    geocoder.query(location.address, function (err, data) {
      if (err) { return console.error(err); }
      markers.push(dropMarker(location, data));

      // zoom in after we've geocoded all locations
      if (markers.length === locations.length) {
        setTimeout(function () {
          map.fitBounds(markers);
        }, 500);
      }

    });
  });
});

