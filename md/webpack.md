(指导教程)[https://juejin.im/post/5de87444518825124c50cd36#heading-27]
# 基础
webpack : 打包生成dist/bundle[hash].js文件
html-webpack-plugin : 将生成的js文件自动引入到index.html文件中
clean-webpack-plugin:打包前清空dist文件夹
style-loader css-loader less less-loader : 解析css文件
file-loader url-loader 解析图片,视频文件，base64转换
img-loader配合plugin 或者 image-webpack-loader:压缩图片
postcss-loader autoprefixer :为css添加浏览器前缀,提高兼容性
mini-css-extract-plugin : 将css文件从html中剥离出来，独立的生成文件

babel-loader @babel/preset-env @babel/core :将将 ES6/7/8语法转换为ES5语法

babel-polyfill:将新api进行转换 例如(promise、Generator、Set、Maps、Proxy等)

# vue相关
vue-loader vue-style-loader .vue文件解析loader
 vue-template-compiler 用于编译模板


# 打包线上版本的优化
 webpack-merge 合并配置
copy-webpack-plugin 拷贝静态资源
optimize-css-assets-webpack-plugin 压缩css
uglifyjs-webpack-plugin 压缩js(有bug注释掉了,有替代品可用 自行百度)


# 整体优化打包速度
## 优化配置
* alias: 当我们代码中出现 import 'vue'时， webpack会采用向上递归搜索的方式去node_modules 目录下找。为了减少搜索范围我们可以直接告诉webpack去哪个路径下查找。也就是别名(alias)的配置。
* include exclude 同样配置include exclude也可以减少webpack loader的搜索转换时间。
* noParse  当我们代码中使用到import jq from 'jquery'时，webpack会去解析jq这个库是否有依赖其他的包。但是我们对类似jquery这类依赖库，一般会认为不会引用其他的包(特殊除外,自行判断)。增加noParse属性,告诉webpack不必解析，以此增加打包速度。
* extensions webpack会根据extensions定义的后缀查找文件(频率较高的文件类型优先写在前面)

## 优化插件
* happypack 启用多个子进程进行loader的文件处理
* webpack-parallel-uglify-plugin 增强代码压缩

* webpack.dll.config: 将不会变动的第三方包，打包为静态文件。后续打包就只需要处理业务代码，防止每次重复打包
* cache-loader :再次构建会先比较一下，如果文件较之前的没有发生变化则会直接使用缓存。