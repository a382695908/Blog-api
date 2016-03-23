"use strict";

/**
 * /api/search
 * @description 搜索
 * @author yingyujia
 * @time 16/3/18
 */

let express = require('express');
let router = express.Router();

/**
 * /api/search
 * 搜索
 * @param type
 * req.query.xx
 */
router
    .route('/')
    .get((req, res, next)=> {


      console.log(req.test);
      console.log(req.body);

      res.json(req.query);
    });

/**
 *  /api/blog/:id
 *  get 获取博客详情
 *  put 更新博文
 *  post 更新博文
 *  delete 删除文章
 */
router
    .route('/:')
    .get((req, res, next)=> {

    });

module.exports = router;
