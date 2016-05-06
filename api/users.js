"use strict";

/**
 * /api/users/
 * @description 用户相关
 * @author yingyujia
 * @time 16/3/2
 */
let express, router,
  _result,
  db;
express = require('express');
router = express.Router();

db = require('../db/redis');
_result = require('../config').result;
/**
 * api/users/
 * get 获取用户列表
 * post 添加一个(多个?)用户
 */
router
  .route('/')
  .get(function (req, res, next) {//array

    //分页json
    //查询用户列表

    console.log(req.query);
    res.send('查询用户列表-get');

  })
  .post(function (req, res, next) {//201   422(验证错误,比如用户已存在?格式不正确)
    //新建一个用户 
    console.log(req.body);

    db.hget('user:' + req.body.userName, 'userName', function (err, obj) {
      if (err) {
        console.log(err);
        res.json(_result.error(err));
        return;
      }
      if (obj) {// && obj === req.body.userName
        res.json(_result.error('账号已经存在'));
      }
      else {
        let result = db.hmset(
          'user:' + req.body.userName,
          'userName', req.body.userName,
          'password', req.body.password);

        if (result) {
          res.json(_result.success('注册成功'));
        }
      }
    })

  });

/**
 * api/users/:id
 * get 指定用户信息
 * put 更新用户 (全部信息)
 * patch 更新用户 (部分信息)
 * delete 删除用户
 */
router
  .route('/:id')
  .get(function (req, res, next) {
    //分页json
    //查询用户
    console.log(req.params.id);
    res.send('查询特定用户-get:' + req.params.id);

  })
  .put(function (req, res, next) {//201

    res.send('更新用户(提供全部信息)');
  })
  .patch(function (req, res, next) {
    //(修改密码)

    res.send('更新用户(提供部分信息)');
  })
  .delete(function (req, res, next) {//204
    res
      //.status(204)
      .send('删除特定用户 id=' + req.params.id);
  });

/**
 * api/users/exists/:email
 * get 检查用户是否存在
 */
router
  .route('/exists/:email')
  .get((req, res, next) => {

    //读取数据库

    res.json({
      success: true,
      result: {}
    });

  });

/**
 * /api/users/requestPasswordReset
 * post 重置密码
 */
router.post('/requestPasswordReset', function (req, res, next) {
  //检查是否存在用户
  //todo 发邮件
  res.send('重置密码-post');
});

/**
 * api/users/login
 * post 登录
 */
router
  .route('/login')
  .post(function (req, res, next) {

    console.log(req.body);
    res.send('登录-post');
  });

/**
 * api/users/logout
 * post 退出登录
 */
router
  .route('/logout')
  .post(function (req, res, next) {
    //

    res.send('退出-post');
  });


module.exports = router;