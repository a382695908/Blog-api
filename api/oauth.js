"use strict";

/**
 * /api/oauth/
 * @description 联合登录
 * @author yingyujia
 * @time 16/3/3
 */

let express = require('express');
let router  = express.Router();
let config = require('../config');

let _github=config.oauth.github;

router
    .route('/github')
    .get(function (req, res, next) {

      console.log(1);
      next();

    });

router
    .route('/github')
    .get(function (req, res, next) {

      console.log(2);
      res.send('oauth');

    });


module.exports = router;

