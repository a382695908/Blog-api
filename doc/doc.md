项目文档
=================

## 全局规范

* 响应数据格式

**正确**
```json
{
  "success":true,
  "result":"结果"
}
```
**出错**
```json
{
  "success":false,
  "result":"错误信息"
}
```




## 身份验证机制
用户登录时,后台请求 状态服务器(这里暂时写进后台,以后再考虑独立),获取对应的token,返回给用户.
用户操作时,如果需要权限,就用token获取敏感信息,这样当某一个web服务器宕机,另一台服务器能立即接手

**Angular内部$http实现了每次请求头都带上 X-XSRF-TOKEN,其值是cookie XSRF-TOKEN的值**




