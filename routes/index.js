var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { access_token: process.env.ACCESS_TOKEN });
});

module.exports = router;
