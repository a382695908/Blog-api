'use strict';
var express = require('express');
var router = express.Router();

/**
 *
 */
router.use(function timeLog(req, res, next) {

  next();
});


/**
 * GET users listing
 */
router.get('/', function(req, res, next) {

  res.json({});
});



router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
