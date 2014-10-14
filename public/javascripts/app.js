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
  var template = '<h2>' + location.name + '</h2>' +
                 '<p><strong>Billing Address</strong>:<br>' + location.billingaddress.street + '</p>' +
                 '<p><strong>Website</strong>:<br>' +
                    '<a href="' + location.website + '" target="_blank">' + location.website + '</a></p>';

  L.marker(data.latlng).bindPopup(template).addTo(map);
  return data.latlng;
}

function fetchLocations(cb) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      cb(null, JSON.parse(request.responseText));
    } else if (request.readyState === 4) {
      // didn't receive a 200 response
      cb({readyState: request.readyState, status: request.status});
    }
  };
  request.open('GET', '/locations', true);
  request.send();
}

geocoder.query('575 Sutter Street, San Francisco, CA', displayMap(11));

fetchLocations(function (err, locations) {
  if (err) { return console.error(err); }
  var markers = [];
  locations.forEach(function (location) {
    geocoder.query(location.address, function (err, data) {
      if (err) { return console.error(err); }
      if (data.latlng) {
        markers.push(dropMarker(location, data));
      } else {
        console.log('no coordinates found for address: ' + location.address);
        markers.push(null);
      }

      // zoom in after we've geocoded all locations
      if (markers.length === locations.length) {
        setTimeout(function () {
          map.fitBounds(markers);
        }, 500);
      }

    });
  });
});
