modngodb
=========================

## install
* brew install mongodb
* 修改配置文件
* 启动（此处应该有脚本）

*mongodb.conf*
```
systemLog:
  destination: file
  path: "/Volumes/data/db/mongodb/log/mongo.log"
  logAppend: true
storage:
  dbPath: "/Volumes/data/db/mongodb/data"
  journal:
    enabled: true 
net:
   bindIp: 127.0.0.1,0.0.0.0
   port: 27017
setParameter:
   enableLocalhostAuthBypass: false
security: 
   authorization: enabled
```

## [auth](https://docs.mongodb.com/manual/tutorial/enable-authentication/)
添加超级管理员用户
```
use admin
db.createUser(
  {
    user: "yyj",
    pwd: "123456",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
```

## 




