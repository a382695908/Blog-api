'use strict';
/**
 * 全局配置文件
 */

module.exports = {
  host   : 'yingyj.com',
  redis  : {
    host           : 'yingyj.com',
    port           : 9999,
    auth_pass      : '2%skf9pD@B5t@wy2',
    connect_timeout: 10000
  },
  mongodb: {},
  jwt    : {
    secret: 'shhhhh'
  },
  email:{
    realName:'雨夹雪 ✔',
    emailAddress:'@qq.com',
    account:'',
    pwd:'dmqrnzmhnrmubfib'
  },
  oauth:{
    github:{
      clientId:'444e32d4b0046821de79',
      redirectUri:'https://yingyj.com/api/oauth/github',
      clientSecret:'7215422a1f287be1b613018e4d6aae181de3de7f'
    }
  }

};