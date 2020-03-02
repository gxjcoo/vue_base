/*********************webpack dev配置******************
热更新
soucemap
*******************************************************/
const Webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
module.exports = WebpackMerge(webpackConfig,{
  mode:'development',
  devtool:'cheap-module-eval-source-map',

  devServer:{
    port:8080,
    hot:true,
    contentBase:'../bundle',
    proxy: {
      '/api': {
        target: 'http://localhost:3030',
        changeOrigin: true,
        // 路径重写： 下面的意思是重写访问路径中的  '/api' 为 '' ，如果没有重写, /api 代表 http://127.0.0.1:3030/api
        pathRewrite: {
          '^/api': ''
        }
    }
  }
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            use: ['babel-loader', 'eslint-loader'],
            exclude:/node_modules/
        }
    ]
},
  plugins:[
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
})
