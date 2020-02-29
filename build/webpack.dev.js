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
    port:3000,
    hot:true,
    contentBase:'../bundle'
  },
  plugins:[
    new Webpack.HotModuleReplacementPlugin()
  ]
})
