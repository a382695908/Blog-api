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
const crypto = require('crypto');//文件秒传  md5+文件字节数(双验证)
const path = require('path');
const fs = require('fs');

let router = express.Router();

let file_save = path.join(__dirname, '/../public/upload');//+  /public/upload/type/id.extName

/**
 * /api/files
 * get 获取文件列表(有必要?)
 * post 上传文件(返回id,图片类的返回url)
 * todo 保存原始文件名,按需要显示到客户端
 */
router
    .route('/')
    .get(function (req, res, next) {
      fs.readdir(file_save, function (err, files) {

        if (err) {

          res.send(err);
        }
        res.json(files); // return all files in JSON format
      });
    })
    .post(function (req, res, next) {
      let md5 = crypto.createHash('md5');
      let fstream,
          tempUrl;

      req.pipe(req.busboy);
      //
      req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {

        tempUrl = path.join(file_save, '/temp/', filename);

        fstream = fs.createWriteStream(tempUrl);//放临时文件夹

        file.pipe(fstream);

        fstream.on('close', function () {
          //上传完毕,读取MD5,并重命名MD5_FileSize.extName

          let s = fs.ReadStream(tempUrl);
          s.on('data', function (d) {
            md5.update(d);
          });
          s.on('end', function () {
            let d = md5.digest('hex');
            let fileName;
            fs.stat(tempUrl, (err, stats)=> {
              fileName = d + '_' + stats.size + path.extname(filename);
              fs.rename(tempUrl, path.join(file_save, '/img/', fileName), (err)=> {
                if (err) {
                  next(err);
                  return;
                }
                console.log(s);
                res.send('上传成功:' + d);

              });

            });
          });

        });
      });

      //req.busboy.on('field', function(key, value, keyTruncated, valueTruncated) {
      //  // ...
      //});

    });

/**
 * /api/files/exists/:fileName
 * 检查文件一致性
 * @param fileName md5_size.extName
 * get
 */
router
    .route('/exists/:fileName')
    .get((req, res, next)=> {
      let fileName = req.params.md5Size;
      fs.exists(path.join(file_save, '/img/', fileName), (exists)=> {
        res.json({
          success:true,
          result: exists
        });
      });
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
router.use((err, req, res, next)=> {

  if (err) {
    res.json({
      success: false,
      msg: err.message
    });
  }
  else {
    next();
  }

});


module.exports = router;