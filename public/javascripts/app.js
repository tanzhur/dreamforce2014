L.mapbox.accessToken = window.mapboxAccessToken;

var map = L.map('map')
    .addLayer(L.tileLayer('https://{s}.tiles.mapbox.com/v3/' + window.mapboxMapId + '/{z}/{x}/{y}.png'))
    .setView([37.789178, -122.409690], 14);

