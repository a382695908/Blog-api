"use strict";

/**
 *
 */

let express = require('express');
let api   = express();


/**
 * 路由文件
 * @type {router|exports|module.exports}
 */
let routes = require('./routes/index');
let users  = require('./routes/users');


/**
 * 配置路由
 * 使用 express.Router的写法
 */
api.use('/', routes);
api.use('/users', users);




/**
 * catch 404 and forward to error handler
 * 到达后面的都是未处理的路由
 * todo 写日志
 */
api.use(function (req, res, next) {
  console.log(req);
  let err    = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports=api;

