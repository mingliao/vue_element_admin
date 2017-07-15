# vue
### 配置项
1. 全局组件
   1.  对比：vs全局插件
    *  实例如```IconSvg``````ElementUI```等
    *  文件路径：```src/main.js```
    *  ```vue.component(xx,xx)```vs```vue.use(xxxx)```
   2. IconSvg全局组件
    *  在源文件里面
    ```
    <use :xlink:href="iconName"></use>
    ```
    该配置```:xlink:href```因为在[svg标签](http://www.runoob.com/svg/svg-reference.html)的使用中
    > xlink:href="URI引用克隆元素"
    ```xlink:href```是一个整体属性。***分开写会报错***

