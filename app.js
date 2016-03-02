'use strict';

/**
 * app主程序
 */

let express = require('express');
let path    = require('path');
let favicon = require('serve-favicon');
let logger  = require('morgan');
//let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

/**
 *
 */
let app   = express();
let api   = require('./api');
let admin = require('./admin');


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


app.use('/api', api);
app.use('/admin', admin);


/**
 * catch 404 and forward to error handler
 * 到达后面的都是未处理的路由
 * todo 写日志
 */
app.use(function (req, res, next) {
  let err    = new Error('Not Found');
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
    res.status(404).json({
      code: 404,
      msg : '没有这个接口'
    });
  }
  else {
    res
        .status(500)
        .send('sever error,code:' + (err.status || 500));
  }

});

module.exports = app;