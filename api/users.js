"use strict";

/**
 * /api/users/
 * @description 用户相关
 * @author yingyujia
 * @time 16/3/2
 */

let express = require('express');
let router  = express.Router();

/**
 * api/users/
 */
router
    .route('/')
    .get(function (req, res, next) {

      //查询用户
      console.log(req.query);
      //如果有参数,就返回特定用户,否则就是分页json

      res.send('查询用户-get');

    })
    .post(function (req, res, next) {
      //
      console.log(req.body);
      res.send('登录-post');

    });

/**
 * api/users/login
 */
router
    .route('/login')
    .post(function (req, res, next) {

      console.log(req.body);
      res.send('登录-post');


    });


module.exports = router;