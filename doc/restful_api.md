restful api
===============

[原文点这里](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)


## url设定
```
形如 https://api.example.com/version/
示例:https://api.yingyj.com/v1/
```

## 路径
在RESTful架构中，每个网址代表一种资源（resource），所以网址中不能有动词，只能有名词，而且所用的名词往往与数据库的表格名对应.

## HTTP动词
除了post,其他炒作都是幂等的(无论执行多少次都是同一个结果)
* GET（select）：从服务器取出资源（一项或多项）。
* POST（create）：在服务器新建一个资源。
* PUT（update）：在服务器更新资源（客户端提供改变后的完整资源）。
* PATCH（update）：在服务器更新资源（客户端提供改变的属性）。
* DELETE（delete）：从服务器删除资源。

## 参数
* ?page=1&rows=20：指定第几页，以及每页的记录数  参考easyui

## http status code
* 200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。
* 201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。
* 202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）
* 204 NO CONTENT - [DELETE]：用户删除数据成功。
* 400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。
* 401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。
* 403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。
* 404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。
* 406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
* 409 发生冲突(锁)
* 410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。
* 422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
* 423 资源被锁定,不能操作
* 429 请求次数过多
* 500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。
* 501 指定的方法未实现

## 错误处理
```json
{
 "success":true,
 "code":"status code",
 "msg":""
}
```

## 返回结果
* GET /collection：返回资源对象的列表 array
* GET /collection/resource：返回单个资源对象 json
* POST /collection：返回新生成的资源对象 json
* PUT /collection/resource：返回完整的资源对象 json
* PATCH /collection/resource：返回完整的资源对象 json
* DELETE /collection/resource：返回一个空文档

## Hypermedia API
返回结果中提供链接，连向其他API方法，使得用户不查文档，也知道下一步应该做什么。
```json
{
  "link": {
    "rel": "collection https://www.example.com/zoos",
    "href": "https://api.example.com/zoos",
    "title": "List of zoos",
    "type": "application/vnd.yourformat+json"
  }
}
```
* 文档中有一个link属性，用户读取这个属性就知道下一步该调用什么API了
* rel表示这个API与当前网址的关系（collection关系，并给出该collection的网址）
* href表示API的路径
* title表示API的标题
* type表示返回类型

[比如github的这个](https://api.github.com/)


