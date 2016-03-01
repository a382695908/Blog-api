"use strict";

/**
 * redis
 * todo 记录每个事件 (时间 事件)
 */
let config=require('../config');


const redis  = require("redis");
const client = redis.createClient(config.redis);

/**
 *
 */
client.ready = function () {
  console.log('client.ready');
};

/**
 *
 */
client.connect = function () {
  console.log('client.connect');
};

/**
 *
 */
client.reconnecting = function () {
  console.log('client.reconnecting');
};

/**
 * redis 出错
 */
client.error = function () {
  console.log('client.error');
};

/**
 *
 */
client.end = function () {
  console.log('client.end');
};

module.exports = client;

