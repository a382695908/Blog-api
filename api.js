"use strict";

/**
 *
 */

let express = require('express');
let api   = express();


/**
 * 验证授权(如果需要的话)
 */
api.use(require('./api/auth'));


/**
 * 配置路由
 * 使用 express.Router的写法
 */
api.use('/', require('./api/index'));
api.use('/users', require('./api/users'));
api.use('/post', require('./api/post'));

/**
 * catch 404 and forward to error handler
 * 到达后面的都是未处理的路由
 * todo 写日志
 */
//api.use(function (req, res, next) {
//  console.log(req);
//  let err    = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});


module.exports=api;

