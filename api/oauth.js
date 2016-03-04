"use strict";

/**
 * /api/oauth/
 * @description 联合登录
 * @author yingyujia
 * @time 16/3/3
 */

let express = require('express');
let request = require('request');

let config = require('../config');

let router = express.Router();
let _github = config.oauth.github;
//临时
_github.state = '';
//_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

/**
 * 获取第三方登录的url
 * 网页上的链接(当前页打开)
 */
router.get('/url', function (req, res, next) {
  let _par = req.query.type;
  let _url;

  switch (_par) {
    case 'coding':
      break;

    case 'qq':
      break;

    case 'github':
    default:
      //todo 这个url写到配置里面

      //todo get state
      //_url = _.template(`{{authorize}}?client_id={{client_id}}&redirect_uri={{redirect_uri}}`);

      _url = `${_github.authorize}?client_id=${_github.client_id}&redirect_uri=${_github.redirect_uri}&scope=${_github.scope}&state=${_github.state}`;

      break;
  }

  res.send(_url);
});


router
    .route('/github')
    .get(function (req, res, next) {

      //todo 错误处理
      //req.accepts('application/json');

      let _code = req.query.code;

      request.post({
        url:'http://localhost:3000/api/test' || _github.access_token,

        form: {
          client_id: _github.client_id,
          client_secret: _github.client_secret,
          code: _code,
          redirect_uri: _github.redirect_uri,
          state: _github.state
        },
        function(err, httpResponse, body){

          console.log(_code,err,httpResponse,body);

          res.send(httpResponse);

        }
      });

    });

module.exports = router;

