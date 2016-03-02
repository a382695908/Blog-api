route
============
/api/

## 自动加载路由
```js

var configs=require('../router/index');
for( let path in configs){
  if(configs.hasOwnProperty(path)){
    router.use(path,require('./'+configs[path]))
  }
}
module.exports=router;
```


## users
表格好麻烦..

| route | http verb |Description|
|-------|-----------|-----------|
|users/ | get       |获取分页的用户列表|







