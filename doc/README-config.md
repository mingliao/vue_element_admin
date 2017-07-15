### 配置文档说明
1. webstorm配置
 * es6支持
   * [参考](http://www.jianshu.com/p/b4390919a5b5)
 * terminal支持
   * [配置cygwin，使用mintty](https://intellij-support.jetbrains.com/hc/en-us/community/posts/206343349-Set-terminal-shell-path-to-mintty-bash-)
     * 为什么不用*gitbash*？因为  *gitbash* ```CTRL+C```会退出。
     * 控制台会打开新窗口！！！！
2. 工程项目配置
 * 查看[package.json](./../package.json)命令

   ```"dev": "node build/dev-server.js",``` 跟踪到相应文件，具体看文件注释。
3. webpack配置
 * scss，css，stylus等预编译文件配置是在[*webpack.dev.conf.js*](./../build/webpack.de.conf.js)里面配置的，该文件关联[*util.js*](./../build/utils.js)里面包含这些预编译插件配置项。