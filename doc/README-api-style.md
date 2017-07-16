# style
### 特殊用法
1. ```input:-webkit-autofill```
   * 文件路径：```src/views/login/index.vue```
   * 作用：覆盖浏览器默认样式， [参考](http://www.cnblogs.com/garfieldzhong/p/4759690.html)
2. ```-webkit-appearance```
   * 文件路径:```src/views/login/index.vue```
   * 作用：覆盖浏览器默认表现形式：比如p---》button [参考](http://www.css88.com/archives/5402)
3. 居中定位
    * div块元素绝对定位水平居中
    * 文件路径：```src/views/login/index.vue```
    ```
    .login-form {
                position: absolute;
                left:0;
                right: 0;
                width: 400px;
                padding:35px 35px 15px 35px;
                margin: 120px auto;
            }
    ```
4. 样式重置方案
    * 使用```normalize.css/normalize.css```
    * 文件使用路径：在```src/main.js```  import进来的时候就使用了。

