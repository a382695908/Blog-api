"use strict";

/**
 * /admin/
 * 管理员API
 */

let express = require('express');
let jwt     = require('jsonwebtoken');

let config = require('./config');
let redis  = require('./db/redis');


let admin = express();

admin.use(function (req, res, next) {

  /**
   * 允许跨域访问
   */
  //res.setHeader('Access-Control-Allow-Origin', '*');
  //res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

  if (req.headers.authorization) {
    var parts = req.headers.authorization.split(' ');

    if (parts.length == 2) {
      var scheme      = parts[0];
      var credentials = parts[1];

      //if (/^Admin/i.test(scheme)) {
      token = credentials;

      var dtoken = jwt.decode(token, config.jwt.secret, {algorithms: ['RS256']});

      console.log(dtoken);
      //验证token
      jwt.verify(token, config.jwt.secret, {algorithms: ['HS256']}, function (err, decode) {
        if (err) {
          //报错了
          // err.name='JsonWebTokenError'
          //todo 写日志,记录ip,该ip有恶意行为   err.name   err.message

        }
        else {
          //todo 验证 访问的url path知否有权限
          console.log('decode', decode);
          //401
          next();
        }

      });
      //}
      //else {
      //  res.json({type:'credentials_bad_scheme', message: '不是指定的格式' });
      //}
    }
    else {
      res.json({
        type   : 'credentials_bad_format',
        message: 'token 格式不正确'
      });
    }
  }
  else {
    //模拟登录效果
    //todo 跳转登录
    var token = jwt.sign({foo: 'bar'}, config.jwt.secret, {algorithms: ['HS256']});
    res.setHeader('Authorization', 'Admin ' + token);


    res.send('跳转登录');
  }

});

/**
 * 如果token解析成功,检查path和权限
 * 否者传error
 */
admin.use(function (req, res, next) {
  if(err){
    next(err);
  }


  next();
});

/**
 * 身份验证错误处理
 * 无token-要求登录
 * token过期-弹框提示并重新登录
 * token 解析失败,db.save(ip,token,)
 * todo token 解析失败 一定次数,禁止访问(前后端)
 */
admin.use(function (err,req, res, next) {
  if(err){

  }

});


/**
 * 这里写路由
 */
admin.use('/users', require('./admin/users'));
admin.use('/post', require('./admin/post'));

module.exports = admin;
