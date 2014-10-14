var util = require('util'),
  express = require('express'),
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
router.get('/locations', function (req, res, next) {
  sfdc.query({
    query: 'SELECT Id, Name, BillingAddress, Website FROM Account',
    oauth: req.session
  }, function (err, result) {
    if (err) { return next(err); }
    res.json(result.records.map(function (record) {
      var json = record.toJSON();

      if (json.billingaddress.postalCode) {
        if (json.billingaddress.state) {
          json.address = util.format('%s, %s, %s %s',
                                     json.billingaddress.street,
                                     json.billingaddress.city,
                                     json.billingaddress.state,
                                     json.billingaddress.postalCode);
        } else {
          json.address = util.format('%s, %s, %s',
                                     json.billingaddress.street,
                                     json.billingaddress.city,
                                     json.billingaddress.postalCode);
        }
      } else {
        json.address = json.billingaddress.street.replace(/\n/g, ' ');
      }

      return json;
    }));
  });
});

module.exports = router;
