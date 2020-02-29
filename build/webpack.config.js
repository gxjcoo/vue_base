/*********************webpack基础配置******************
入口，出口文件
[hash].js文件引入到html文件中

解析.vue文件
将css文件从html中剥离出来，独立的生成文件（报错 待解决）
*******************************************************/
const Webpack = require('webpack')
const path = require("path");
//将打包后的[hash].js文件引入到html文件中
const HtmlWebpackPlugin = require("html-webpack-plugin");

//配合postcss-loader为css添加浏览器前缀
const autoprefixer = require("autoprefixer");
//解析.vue文件
const vueLoaderPlugin = require('vue-loader/lib/plugin')
//将css文件从html中剥离出来，独立的生成文件（报错 待解决）
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//多进程loader处理
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({size:os.cpus().length})

//增强代码压缩
const ParalleUglifyPlugin = require('webpack-parallel-uglify-plugin')
//拷贝功能
const CopyWebpackPlugin = require('copy-webpack-plugin')
//直观树状图
const webpackBundleAnalyzerPlubin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const devMode = process.argv.indexOf('--mode=production') === -1;
module.exports = {
  entry:{
    main:path.resolve(__dirname,'../src/main.js')
  },
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'js/[name].[hash:8].js',
    chunkFilename:'js/[name].[hash:8].js'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:['cache-loader',{
          loader :'happypack/loader?id=happyBabel'
        }],
        exclude:/node_modules/
      },
      {
        test:/\.vue$/,
        use:['cache-loader',{
          loader:'vue-loader',
          options:{
            compilerOptions:{
              preserveWhitespace:false
            },
          }

        }],
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:[{
          loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          options:{
            publicPath:"../dist/css/",
            hmr:devMode
          }
        },'css-loader',{
          loader:'postcss-loader',
          options:{
            plugins:[autoprefixer]
          }
        }],
        exclude:/node_modules/
      },
      {
        test:/\.less$/,
        use:[{
          loader:devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          options:{
            publicPath:"../dist/css/",
            hmr:devMode
          }
        },'css-loader','less-loader',{
          loader:'postcss-loader',
          options:{
            plugins:[autoprefixer]
          }
        }],
        exclude:/node_modules/
      },
      {
        test:/\.(jep?g|png|gif)$/,
        use:{
          loader:'url-loader',
          options:{
            limit:10240,
            fallback:{
              loader:'file-loader',
              options:{
                name:'img/[name].[hash:8].[ext]'
              }
            }
          }
        },
        exclude:/node_modules/
      },
      {
        test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use:{
          loader:'url-loader',
          options:{
            limit:10240,
            fallback:{
              loader:'file-loader',
              options:{
                name:'media/[name].[hash:8].[ext]'
              }
            }
          }
        },
        exclude:/node_modules/
      },
      {
        test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use:{
          loader:'url-loader',
          options:{
            limit:10240,
            fallback:{
              loader:'file-loader',
              options:{
                name:'media/[name].[hash:8].[ext]'
              }
            }
          }
        },
        exclude:/node_modules/
      }
    ]
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.runtime.esm.js',
      ' @':path.resolve(__dirname,'../src')
    },
    extensions:['*','.js','.json','.vue']
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../public/index.html')
    }),
    new vueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new HappyPack({
      id:'happyBabel',
      loaders:[
        {
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env',{modules:false}]
          },
          cacheDirectory:true
        }
      ],
      threadPool:happyThreadPool //进程池数量
    }),
//将dll打包后的文件集合到dist目录下
    new Webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendor-manifest.json')
    }),
    new CopyWebpackPlugin([ // 拷贝生成的文件到dist目录 这样每次不必手动去cv
      {from: path.resolve(__dirname,'static/js/vendor.dll.js')  ,
       to:path.resolve(__dirname,'../dist/js')}
    ]),
    new webpackBundleAnalyzerPlubin({
      analyzerHost:'127.0.0.1',
      analyzerPort:8090
    })
  ],
  optimization:{
    minimizer:[
      new ParalleUglifyPlugin({
        cacheDir:'./build/cache',
        uglifyJs:{
          output:{
            comments:false,
            beautify:false
          },
          compress:{
            drop_console:true,
            collapse_vars:true,
            reduce_vars:true
          }
        }
      })
    ]
  }
}
