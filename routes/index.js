var express = require('express'),
  sfdc = require('../sfdc'),
  router = express.Router();

router.get('/', function (req, res) {
  res.render('login', {
    authUri: sfdc.getAuthUri()
  });
});

router.get('/oauth/_callback', function (req, res, next) {
  sfdc.authenticate({code: req.query.code}, function (err, oauth) {
    if (err) { return next(err); }
    req.session = oauth;
    res.redirect('/map');
  });
});

// only authenticated users beyond this point
router.use(function (req, res, next) {
  if (req.session && req.session.access_token) {
    next();
  } else {
    res.redirect('/');
  }
});

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

