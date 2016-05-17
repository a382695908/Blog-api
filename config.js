'use strict';
/**
 * 全局配置文件
 * todo 除了数据库连接的,其他写进数据库
 */

var path = require('path');
var config = {

  //调试
  debug: true,

  //网站信息
  name: '雨夹雪', // 站点名称
  description: '一个迷惘的二货',
  keywords: '博客,雨夹雪,应雨加,yyj,前端工程师,全栈工程师',

  //icon 地址
  site_icon: '',

  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名

  //域名
  host: 'yingyj.com',

  //google 统计
  google_tracker_id: 'UA-63391508-1',

  //cnzz统计
  cnzz_tracker_id: '',

  // mongodb 配置
  db: 'mongodb://127.0.0.1:27017/node_club_dev',

  // redis 配置，默认是本地
  // redis_host: '127.0.0.1',
  // redis_port: 9999,
  // redis_db: 0,
  // redis_pass: '2%skf9pD@B5t@wy2',

  redis: {
    host: '127.0.0.1',
    port: 9999,
    //auth_pass: '2%skf9pD@B5t@wy2',
    connect_timeout: 10000
  },

  //session加密
  session_secret: '77#Qr$eEb^b37s!',
  auth_cookie_name: 'blog_yyj',

  // 程序运行的端口
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // RSS配置
  rss: {
    title: '雨夹雪',
    link: 'https://yingyj.com/',
    language: 'zh-cn',
    description: '一个前端工程师的博客',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  jwt: {
    secret: 'shhhhh'
  },
  email: {
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    name: 'QQ',
    logger: true,
    auth: {
      user: '825601551@qq.com',
      pass: 'vzyjtcqblpmjbdjh'
    }
  },

  //weibo app key
  weibo_key: '',
  weibo_id: '',

  // admin 可删除话题，编辑标签。把 user_login_name 换成你的登录名
  admins: { yyjazsf: true },

  // github 登陆的配置
  GITHUB_OAUTH: {
    clientID: '',
    clientSecret: '',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },

  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: true,

  // oneapm 是个用来监控网站性能的服务
  oneapm_key: '',

  // 下面两个配置都是文件上传的配置
  // 7牛的access信息，用于文件上传
  qn_access: {
    accessKey: '',
    secretKey: '',
    bucket: 'blog',
    origin: '',
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: '',
  },

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  file_limit: '1MB',

  create_post_per_day: 1000, // 每个用户一天可以发的主题数
  create_reply_per_day: 1000, // 每个用户一天可以发的评论数
  visit_per_day: 1000, // 每个 ip 每天能访问的次数

  result: { //全局返回结果配置
    success: function (data) {
      let json = {
        success: true,
        result: data
      }
      // if (arguments[1] !== undefined) {

      // }

      return json;
    },
    error: function (data) {
      return {
        success: false,
        //errNo:
        result: data
      };
    }
  }
}

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://127.0.0.1/blog_test';
}

module.exports = config;