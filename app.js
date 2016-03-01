'use strict';

let express = require('express');
let path    = require('path');
let favicon = require('serve-favicon');
let logger  = require('morgan');
//let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let jwt        = require('jsonwebtoken');

let redis  = require('./db/redis');
/**
 * 路由文件
 * @type {router|exports|module.exports}
 */
let routes = require('./routes/index');
let users  = require('./routes/users');

let app     = express()
    , api   = express()
    , admin = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));

/**
 * configure app to use bodyParser()
 * this will let us get the data from a POST
 */
//parse application/json
app.use(bodyParser.json());

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//app.use(cookieParser());

//静态文件
//app.use(express.static(path.join(__dirname, 'public')));

/**
 * 配置路由
 * 使用 express.Router的写法
 */
api.use('/', routes);
api.use('/users', users);


/**
 * catch 404 and forward to error handler
 * todo 写日志
 */
api.use(function (req, res, next) {
  console.log(req);
  let err    = new Error('Not Found');
  err.status = 404;
  next(err);
});

admin.use(function (req, res, next) {
  console.log(req);
  /**
   * 允许跨域访问
   */
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');


  //if (!req.header('auth') && jwt.verify()) {
  //  res.json({
  //    state: 'error',
  //    msg  : '校验失败'
  //  });
  //  console.log('未登录');
  //  //res.redirect('/');
  //}
  next();
});

// error handlers
/**
 * development error handler
 * will print stacktrace
 */
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res
        .status(err.status || 500)
        .send('sever error,code:500');
  });
}

/**
 * production error handler
 * no stacktraces leaked to user
 */
app.use(function (err, req, res, next) {
  res
      .status(err.status || 500)
      .send('sever error,code:500');
});

app.use('/api', api);
app.use('/admin', admin);

module.exports = app;