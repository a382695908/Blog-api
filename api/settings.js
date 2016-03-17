"use strict";

/**
 * /api/settings/
 * @description 设置
 * @author yingyujia
 * @time 16/3/17
 */

let express = require('express');
let router = express.Router();

/**
 * /api/settings
 * get 获取当前用户设置
 * put 更新设置
 * post 更新设置
 */
router
    .route('/')
    .get((req, res, next)=>{

    })
    .put((req, res, next)=>{

    })
    .post((req, res, next)=>{

    });




module.exports = router;
