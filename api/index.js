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
      //读取数据库中管理员公开信息
      res.json({
        name:'blog',
        author:'ying yujia',
        qq:'602988068',
        email:'602988068@qq.com,yyjazsf@live.cn',
        age:new Date().getFullYear()-new Date('1991-04-21').getFullYear()
        //
      });
    });

module.exports = router;

