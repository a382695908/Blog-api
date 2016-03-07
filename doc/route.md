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








