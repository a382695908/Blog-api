"use strict";

/**
 * @description 用户相关
 * @author yingyujia
 * @time 16/3/2
 */

let express = require('express');
let router  = express.Router();

/**
 * /login
 */
router.route('/')
    .get(function (req, res, next) {

      console.log(req.query);
      res.send('登录-get');

    })
    .post(function (req, res, next) {

      console.log(req.body);
      res.send('登录-post');

    });

router.route('/login')
    .get(function (req, res, next) {
      //需要post
    })
    .post();


module.exports = router;