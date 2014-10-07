L.mapbox.accessToken = window.mapboxAccessToken;
// Replace 'examples.map-i87786ca' with your map id.
var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/' + window.mapboxMapId + '/{z}/{x}/{y}.png', {
    attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
});

var map = L.map('map')
    .addLayer(mapboxTiles)
    .setView([42.3610, -71.0587], 15);

