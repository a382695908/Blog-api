"use strict";

/**
 * @description 返回这个blog信息
 * @author yingyujia
 * @time 16/3/2
 */

let express = require('express');
let router  = express.Router();

router.route('/')
    .get(function (req, res, next) {
      res.json({
        //读取数据库
      });
    });

module.exports = router;

