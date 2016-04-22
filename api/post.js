/**
 * @description 博文相关
 * @author yingyujia
 * @time 16/3/2
 */

"use strict";
let express, router,
db;

express = require('express');
router = express.Router();
db= require('../db/redis');








module.exports = router;