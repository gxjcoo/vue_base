const path = require("path");
//将打包后的[hash].js文件引入到html文件中
const HtmlWebpackPlugin = require("html-webpack-plugin");
//打包前清空dist文件夹
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//配合postcss-loader为css添加浏览器前缀
const autoprefixer = require("autoprefixer");
//将css文件从html中剥离出来，独立的生成文件
module.exports = {
  mode: "development",
  entry:["@babel/polyfill",path.resolve(__dirname, "../src/main.js")], 
  output: {
    filename: "bundle.[hash:8].js",
    path: path.resolve(__dirname, "../dist")
  },

  module: {
    rules: [
      //css文件处理
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader"] // 从右向左解析原则
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer]
            }
          },
          "less-loader"
        ] // 从右向左解析原则
      },
      //图片、字体、媒体、等文件处理
      {
        test: /\.(jpe?g|png|gif)$/i, //图片文件
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "img/[name].[hash:8].[ext]"
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "media/[name].[hash:8].[ext]"
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "fonts/[name].[hash:8].[ext]"
                }
              }
            }
          }
        ]
      },

      //js高版本语法解析为低版本
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        },
        exclude:/node_modules/
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new CleanWebpackPlugin(),

  ]
};
