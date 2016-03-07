"use strict";

/**
 * /api/users/
 * @description 用户相关
 * @author yingyujia
 * @time 16/3/2
 */

let express = require('express');
let router = express.Router();

/**
 * api/users/
 * get 获取用户列表
 * post 新建一个(多个?)用户
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

      res.send('新建一个用户');
    })

;

/**
 * api/users/:id
 * get 特定用户信息
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
 * api/users/login
 */
router
    .route('/login')
    .post(function (req, res, next) {

      console.log(req.body);
      res.send('登录-post');
    });


module.exports = router;