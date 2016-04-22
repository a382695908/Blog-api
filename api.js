"use strict";

/**
 *
 */
const express = require('express');
const busboy = require('connect-busboy'); //express4 需要第三方支持,文件上传功能

const api   = express();

/**
 * 验证授权(如果需要的话)
 */
api.use(require('./api/auth'));
api.use(busboy());//{ immediate: true }


/**
 * 配置路由
 * 使用 express.Router的写法
 */
api.use('/', require('./api/index'));//todo 显示所有api
api.use('/oauth', require('./api/oauth'));
api.use('/users', require('./api/users'));
api.use('/post', require('./api/post'));
api.use('/roles', require('./api/roles'));
api.use('/files', require('./api/files'));
api.use('/settings', require('./api/settings'));
api.use('/search', require('./api/search'));


//api.use(busboy({
//  highWaterMark: 2 * 1024 * 1024,
//  limits: {
//    fileSize: 10 * 1024 * 1024
//  }
//}));

module.exports=api;

