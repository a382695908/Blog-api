"use strict";

/**
 * /api/roles/
 * @description 角色
 * @author yingyujia
 * @time 16/3/8
 */
let express, router;
express = require('express');
router = express.Router();

db = require('../db/redis');
/**
 * /api/roles
 * get 角色分页列表
 * post 添加角色
 */
router
  .route('/')
  .get((req, res, next) => {

    res.send('角色列表');
  })
  .post(function (req, res, next) {

    res.send('添加角色');
  });

/**
 * /api/roles/:id
 * get 检索角色
 * put 更新角色
 * delete 删除角色
 */
router
  .route('/:id')
  .get(function (req, res, next) {

    res.send('检索角色');
  })
  .post((req, res, next) => {

    res.send('更新角色');
  })
  .put(function (req, res, next) {

    res.send('更新角色');

  })
  .delete(function (req, res, next) {

    res.send('删除角色');

  });





module.exports = router;
