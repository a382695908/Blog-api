"use strict";

/**
 * @description 返回这个blog信息
 * + api的所有路径 列表
 * @author yingyujia
 * @time 16/3/2
 */

let express, router,
  db;
express = require('express');
router = express.Router();
db = require('../db/redis');


router.route('/')
  .get(function (req, res, next) {
    //读取数据库中我的公开信息
    res.json({
      name: 'blog',
      author: 'ying yujia',
      qq: '602988068',
      email: '602988068@qq.com,yyjazsf@live.cn',
      age: new Date().getFullYear() - new Date('1991-04-21').getFullYear()
      //
    });
  });

module.exports = router;

