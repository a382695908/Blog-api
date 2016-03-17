"use strict";

/**
 * /api/notifications/
 * 通知
 * @description 看起来是个大坑,最后做
 * @author yingyujia
 * @time 16/3/17
 */


let express = require('express');
let router = express.Router();

/**
 * /api/notifications/
 * get 用户获取收到的通知(评论,关注,喜欢都会被添加到通知列表)
 * post 添加推送通知
 */
router
    .route('/')
    .get((req, res, next)=>{

    })
    .post((req, res, next)=>{

    });








module.exports = router;
