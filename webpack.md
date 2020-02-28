webpack : 打包生成dist/bundle[hash].js文件
html-webpack-plugin : 将生成的js文件自动引入到index.html文件中
clean-webpack-plugin:打包前清空dist文件夹
style-loader css-loader less less-loader : 解析css文件
postcss-loader autoprefixer :为css添加浏览器前缀,提高兼容性
mini-css-extract-plugin : 将css文件从html中剥离出来，独立的生成文件（报错 待解决）

babel-loader @babel/preset-env @babel/core :将将 ES6/7/8语法转换为ES5语法