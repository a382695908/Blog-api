'use strict';

/**
 *
 * @type {*|exports|module.exports}
 */
let express = require('express');
let router = express.Router();

/**
 *
 */
router.use(function timeLog(req, res, next) {

  next();
});

/**
 * GET home page
 */
router.get('/', function(req, res, next) {
  res.json({
    name:'index',
    msg:'test express api'
  });
});

module.exports = router;
