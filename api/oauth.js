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

let _postData =

//todo error process
///api/oauth/**
//router.all('/**',fun)

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

/**
 * 使用access_token获取数据
 * @param data
 * @returns {Promise}
 */
let getData = (data, form)=> {
  return new Promise(function (resolve, reject) {
    request({
          //默认 get
          url: _github.api,
          json: true,
          headers: {
            'Authorization': 'token ' + data.access_token,
            'User-Agent': 'yyjazsf'
          }
        },
        function (err, httpResponse, body) {
          if (err) {
            reject(err);
          }
          else {
            resolve(body);
          }
          //console.log(1);
          ////todo error process
          //return body;
        });
  });

};

/**
 * 请求access_token
 */
router
    .route('/github')
    .get(function (req, res, next) {
      console.log(0);
      let _code = req.query.code;

      request
          .post({
                url: _github.access_token,
                json: true,
                form: {
                  client_id: _github.client_id,
                  client_secret: _github.client_secret,
                  code: _code,
                  redirect_uri: _github.redirect_uri,
                  state: _github.state
                }
              },
              function (err, httpResponse, body) {
                console.log(body.access_token);

                //{
                //  access_token: "884abd89f537c7cb8d13d46525331858175d409a",
                //  token_type: "bearer",
                //  scope: "user:email"
                //}
                //todo error process
                getData(body).then(function (data) {
                  //todo 读取数据库

                  res.json(data);

                }, function (error) {
                  res.send(JSON.stringify(error));
                });

              });

    });


module.exports = router;

