"use strict";

/**
 * /api/files
 * @description 文件操作
 * todo 单独做个文件服务期,+MD5秒传
 * todo 断点续传
 * @author yingyujia
 * @time 16/3/8
 */

const express = require('express');
const md5 = require('crypto').createHash('md5');//文件秒传  md5+文件字节数(双验证)
const fs = require('fs');

let router = express.Router();

let file_save = __dirname +'/../public/upload';//+  /public/upload/type/id.extName

/**
 * /api/files
 * get 获取文件列表(有必要?)
 * post 上传文件(返回id,图片类的返回url)
 */
router
    .route('/')
    .get(function (req, res, next) {
      fs.readdir( file_save, function(err, files) {

        if (err) {

          res.send(err);
        }
        res.json(files); // return all files in JSON format
      });
    })
    .post(function (req, res, next) {

      let fstream,
          md5_code;

      req.pipe(req.busboy);
      //
      req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {

        fstream = fs.createWriteStream(file_save + '/img/' + filename);//放临时文件夹

        file.pipe(fstream);

        console.log(fstream);

        //fstream.on('data',()=>{
        //  md5.update();
        //});

        fstream.on('close', function () {
          //todo 把文件从临时文件夹,移到最终,
          //md5_code=md5.digest('hex');
          console.log(`Upload Finished of ${md5_code}`);
          res.json([fieldname, file, filename, encoding, mimetype]);
        });
      });

      //req.busboy.on('field', function(key, value, keyTruncated, valueTruncated) {
      //  // ...
      //});

    });

/**
 * /api/files/:id
 * get 下载文件
 * delete 删除文件
 */
router
    .route('/:id')
    .get(function (req, res, next) {//图片类的上传完毕就传url存库

      res.send('下载文件');
    })
    .delete(function (req, res, next) {

      res.send('删除文件');
    });

//错误统一显示


module.exports = router;