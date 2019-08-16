// vue.config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  lintOnSave: false,
  transpileDependencies: [],
  productionSourceMap: process.env.NODE_ENV === 'development',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: process.env.BASE_URL,
  assetsDir: 'static',
  css: {
    extract: true
  },
  configureWebpack: {
    performance: {
      hints: false
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true,// console
              drop_debugger: false,
              pure_funcs: ['console.log']// 移除console
            }
          }
        })
      ]
    }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  }
}