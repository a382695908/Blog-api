"use strict";

/**
 * @description
 * @author yingyujia
 * @time 16/3/2
 */
let express, router, jwt,
  config,
  db;

express = require('express');
router = express.Router();
jwt = require('jsonwebtoken');

config = require('../config');
db = require('../db/redis');

//
router.use(function (req, res, next) {

  /**
   * 允许跨域访问
   */
  //res.setHeader('Access-Control-Allow-Origin', '*');
  //res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

  if (req.headers.authorization) { //有登陆
    var parts = req.headers.authorization.split(' ');

    if (parts.length == 2) {

      var scheme = parts[0];//Admin
      var token = parts[1];

      //if (/^Admin/i.test(scheme)) {

      //var dtoken = jwt.decode(token, config.jwt.secret);

      //验证token
      jwt.verify(token, config.jwt.secret, function (err, decode) {
        if (err) {
          //报错了
          // err.name='JsonWebTokenError'
          //todo 写日志,记录ip,该ip有恶意行为   err.name   err.message
          next({});
        }
        else {
          //todo 验证 访问的url path知否有权限
          //console.log('decode', decode);
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
      next({
        log: true,
        message: 'credentials_bad_format'
      });
    }
  }
  else {//没登陆

    //模拟登录效果
    var token = jwt.sign({ foo: 'bar' }, config.jwt.secret);
    res.setHeader('Authorization', 'token ' + token);//参考github的oauth接口

    next({});
  }

});

/**
 * 如果token解析成功,检查path和权限
 * 否者传error
 */
router.use(function (err, req, res, next) {

  /**
   * 根据 req.originalUrl 校验权限
   * 401没有权限(令牌、用户名、密码错误)
   * 403 Forbidden(登录了,但是没权限)
   *
   */
  //console.log(req.originalUrl);

  //屏蔽身份校验
  err = undefined;
  next(err);
});

/**
 * 身份验证错误处理
 * 无token-要求登录
 * token过期-弹框提示并重新登录
 * token 解析失败,db.save(ip,token,)
 * todo token 解析失败 一定次数,禁止访问(前后端)
 */
router.use(function (err, req, res, next) {

  if (err) {
    //401  认证授权失败。（包括密钥信息不正确；数字签名错误；授权已超时）

    //前台根据不同错误弹框
    //如果有错误消息,前台弹框显示,否则直接跳转登录页
    res
      .status(401)
      .json({
        success: false,
        msg: err.msg || false
      });
  }
  else {
    //
    res.setHeader('Authorization', req.headers.authorization);
    next();
  }

});

module.exports = router;


