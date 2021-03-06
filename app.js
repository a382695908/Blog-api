'use strict';

/**
 * app主程序
 */
let config,
  path,
  process,
  express,
  session,
  
  passport,
  GitHubStrategy,
  githubStrategyMiddleware,
  
  favicon,
  logger,
  bodyParser,
  app;
  
config = require('./config');
path = require('path');
process = require('process');
express = require('express');
session = require('express-session');
passport = require('passport');
GitHubStrategy = require('passport-github').Strategy;
githubStrategyMiddleware = require('./middlewares/github_strategy');

favicon = require('serve-favicon');
logger = require('morgan');
//let cookieParser = require('cookie-parser');
bodyParser = require('body-parser');

// process.on('uncaughtException', function (error) {
//   console.error('未捕获的错误', error);
// });

app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
//# region
//# endRegion

/**
 * configure app to use bodyParser()
 * this will let us get the data from a POST
 */
//parse application/json
app.use(bodyParser.json());

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(cookieParser());

//静态文件
app.use(express.static(path.join(__dirname, 'public')));

//静态资源
app.use(express.static(path.join(__dirname, 'views')));

app.use('/api', require('./api'));

/**
 * catch 404 and forward to error handler
 * 到达后面的都是未处理的路由
 * todo 写日志
 */
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

/**
 * production error handler
 * no stacktraces leaked to user
 */
app.use(function (err, req, res, next) {
  if (err.status = 404) {
    res
      .status(404)
      .json({
        code: 404,
        msg: '没有这个接口'
      });
  }
  else {
    res
      .status(500)
      .send('sever error,code:' + (err.status || 500));
  }

});

module.exports = app;