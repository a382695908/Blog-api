"use strict";

/**
 * /api/blog
 * @description 博客文章
 * @author yingyujia
 * @time 16/3/18
 */
let express, router,
  db;
express = require('express');
router  = express.Router();
db = require('../db/redis');
/**
 *  /api/blog
 *  get 获取博客分页列表
 *  post 添加博文
 */
router
    .route('/')
    .get((req, res, next)=>{

    })
    .post((req, res, next)=>{

    });

/**
 *  /api/blog/:id
 *  get 获取博客详情
 *  put 更新博文
 *  post 更新博文
 *  delete 删除文章
 */
router
    .route('/:id')
    .get((req, res, next)=>{

    })
    .put((req, res, next)=>{

    })
    .post((req, res, next)=>{

    })
    .delete((req, res, next)=>{

    });

module.exports = router;
