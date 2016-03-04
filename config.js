'use strict';
/**
 * 全局配置文件
 * todo 除了数据库连接的,其他写进数据库
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

      authorize:'https://github.com/login/oauth/authorize',//get
      access_token:'https://github.com/login/oauth/access_token',
      api:'https://api.github.com/user?access_token=',
      scope       : 'user:email',

      client_id:'444e32d4b0046821de79',
      redirect_uri:'https://yingyj.com/api/oauth/github',
      client_secret:'7215422a1f287be1b613018e4d6aae181de3de7f'

    }
  }

};