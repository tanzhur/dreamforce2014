var express = require('express'),
  sfdc = require('../sfdc'),
  router = express.Router();

/* GET map page. */
router.get('/map', function(req, res) {
  res.render('map', {
    mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
    mapboxMapId: process.env.MAPBOX_MAP_ID
  });
});

/* REST API for locations */
router.get('/locations', function (req, res) {
  res.json([
    {
      name: 'Port of Oakland',
      address: '530 Water Street, Oakland, CA 94607'
    },
    {
      name: 'Port of San Francisco',
      address: 'Pier 1 The Embarcadero, San Francisco, CA 94111'
    }
  ]);
});

module.exports = router;

