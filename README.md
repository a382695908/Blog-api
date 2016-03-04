blog-api
===============
blog的后端(API形式)

## 分支
* 使用nginx+qiniu
* 使用nginx+redis(数据库+缓存)/或者数据库用mongodb

## 技术使用
* http2(节省流量,不需要合并文件等优化了)
* https(http2的前置条件)
* nginx
* redis(分支2)
* [qiniu](https://portal.qiniu.com/signup?code=3lbnx1x2ub1hu)
* jwt

## 一些设定
* [状态码](http://developer.qiniu.com/docs/v6/api/reference/codes.html)
* 身份验证机制 使用josn web token,Authorization: \[Admin\] [token]
* get 查询类方法,有参数就返回特定对象,否则就是分页json
* [api参考](https://leancloud.cn/docs/rest_api.html#用户)
* 权限  path method uid

### 使用的 node 模块
* [express](https://github.com/expressjs/express) Fast, unopinionated, minimalist web framework for node
* [morgan](https://github.com/expressjs/morgan) HTTP request logger middleware for node.js
* [mocha](https://github.com/mochajs/mocha) 测试mocha - simple, flexible, fun javascript test framework for node.js & the browser.
* [redis](https://github.com/NodeRedis/node_redis)
* [jwt](https://github.com/auth0/node-jsonwebtoken) json web token
* [nodemailer](https://github.com/nodemailer/nodemailer) 邮件
* [lodash](https://lodash.com/docs#template) 优先使用ES6

### express 相关中间件
* [body-parser](https://github.com/expressjs/body-parser) Node.js body parsing middleware.

### (备份)我就看看
* [co-body](https://github.com/cojs/co-body) Parse request bodies with co

