/*********************webpack prod配置******************
拷贝静态资源
压缩css
压缩js
打包前清空dist文件夹
*******************************************************/
const path = require('path')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//直观树状图
const webpackBundleAnalyzerPlubin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = WebpackMerge(webpackConfig,{
  mode:'production',
  devtool:'cheap-module-source-map',
  plugins:[
    new CopyWebpackPlugin([{
      from:path.resolve(__dirname,'../public'),
      to:path.resolve(__dirname,'../dist')
    }]),
  ],

  
  optimization:{
    minimizer:[
      new webpackBundleAnalyzerPlubin({
        analyzerHost:'127.0.0.1',
        analyzerPort:8090
      }),
      //压缩js
     new UglifyJsPlugin({
        cache:true,
        parallel:true,
        sourceMap:true
   }),
    //压缩css
    new OptimizeCssAssetsPlugin({})
    ],
    splitChunks:{
      chunks:'all',
      cacheGroups:{
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial" // 只打包初始时依赖的第三方
        }
      }
    }
  }
})
