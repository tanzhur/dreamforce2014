var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
    mapboxMapId: process.env.MAPBOX_MAP_ID
  });
});

module.exports = router;

