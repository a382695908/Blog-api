Redis 经验
====================
* [原文](https://segmentfault.com/a/1190000005007692)
* [新浪经验](http://history.programmer.com.cn/14577/)
* [简书搜索结果](http://www.jianshu.com/search?q=redis&type=notes)

## 认识误区
* 用get/set方式使用Redis
* 单台Redis的存放数据必须比物理内存小 

作为一个key value存在，很多开发者自然的使用set/get方式来使用Redis
实际上这并不是最优化的使用方法。尤其在未启用VM情况下，Redis全部数据需要放入内存节约内存尤其重要。

假如一个key-value单元需要最小占用512字节，即使只存一个字节也占了512字节。
这时候就有一个设计模式，可以把key复用，几个key-value放入一个key中，value再作为一个set存入
这样同样512字节就会存放10-100倍的容量。

这就是为了节约内存，建议使用*hashset*而不是set/get的方式来使用Redis

## 工具命令
* redis-server：Redis 服务器的 daemon 启动程序
* redis-cli：Redis 命令行操作工具。当然，你也可以用 telnet 根据其纯文本协议来操作 
* redis-benchmark：Redis 性能测试工具，测试 Redis 在你的系统及你的配置下的读写性能
$redis-benchmark -n 100000 –c 50
* redis-check-aof：更新日志检查
* redis-check-dump：本地数据库检查

## 管理命令
* dbsize 返回当前数据库 key 的数量。
* info 返回当前 redis 服务器状态和一些统计信息。
* monitor 实时监听并返回redis服务器接收到的所有请求信息。 
* shutdown 把数据同步保存到磁盘上，并关闭redis服务。
* config get parameter 获取一个 redis 配置参数信息。（个别参数可能无法获取）
* config set parameter value 设置一个 redis 配置参数信息。（个别参数可能无法获取）
* config resetstat 重置 info 命令的统计信息。（重置包括：keyspace 命中数、 keyspace 错误数、 处理命令数，接收连接数、过期 key 数）
* debug object key 获取一个 key 的调试信息。
* debug segfault 制造一次服务器当机。
* flushdb 删除当前数据库中所有 key,此方法不会失败。小心慎用
* flushall 删除全部数据库中所有 key，此方法不会失败。小心慎用

* pkill redis  重启redis
* 

## 持久化
* 快照方式：（默认持久化方式）

这种方式就是将内存中数据以快照的方式写入到二进制文件中，默认的文件名为dump.rdb  
客户端也可以使用 save 或者 bgsave 命令通知 redis 做一次快照持久化  

每次快照持久化都是将内存数据完整写入到磁盘一次，并不是增量的只同步增量数据  
如果数据量大的话，写操作会比较多，必然会引起大量的磁盘 IO 操作，可能会严重影响性能  

每隔一段时间写快照，如果redis意外宕机，最后一个写入快照后所有的更新，数据丢失

* 日志追加方式

redis 会将每一个收到的写命令都通过 write 函数追加到文件中(默认appendonly.aof),  
当 redis 重启时会通过重新执行文件中保存的写命令来在内存中重建整个数据库的内容。  
弊端：持久化文件会变的越来越大 bgrewriteaof 命令 用于压缩持久化文件  

```
//启用日志追加持久化方式
appendonly yes
//每秒钟强制写入磁盘一次， 在性能和持久化方面做了很好的折
appendfsync everysec
//完全依赖操作系统，性能最好,持久化没保证
appendfsync no
//每次收到写命令就立即强制写入磁盘， 最慢的， 但是保证完全的持久化，不推荐使用
appendfsync always
```

## 主从同步(这里基本用不到)
[原文](https://segmentfault.com/a/1190000005007692)

## 事务
* 基础事务性(multi exec discard)
* Redis事务乐观锁 (watch multi exec)

## 发布订阅消息
在Redis中，一旦一个client发出了SUBSCRIBE命令，它就处于监听的模式  
此时除了SUBSCRIBE， PSUBSCRIBE，UNSUBSCRIBE，PUNSUBSCRIBE这4条命令之外  
的所有其它命令都不能用。  




