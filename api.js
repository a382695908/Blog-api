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

api.use('/oauth', require('./api/oauth'));

module.exports=api;

