"use strict";

/**
 * @description 发邮件
 * @author yingyujia
 * @time 16/3/3
 */

let nodemailer = require('nodemailer');
let _          = require('lodash');
let config     = require('../config');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://');

/**
 * 发送邮件
 * {to,subject,text,html}
 * @param options object
 * @param cb function 回调函数
 */
var sendEmail = function (options,cb) {
  // setup e-mail data with unicode symbols
  var mailOptions = _.extend({
    from: config.email.realName + ' <' + config.email.emailAddress + '>', // sender address
  },options);

// send mail with defined transport object
  transporter.sendMail(mailOptions, cb);

};


module.exports = sendEmail;
