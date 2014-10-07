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

module.exports = router;

