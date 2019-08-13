// vue.config.js
const path = require('path')
module.exports = {
  productionSourceMap: false,
  outputDir: 'dist',
  assetsDir: 'static',
  css: {
    extract: true
  },
  chainWebpack: config => {
    // 指定环境打包js路径
    config.output.filename(path.posix.join('static', `js/[name]${'.[hash:8]'}.js`))
  }
}