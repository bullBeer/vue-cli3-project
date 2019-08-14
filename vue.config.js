// vue.config.js
module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: process.env.BASE_URL,
  assetsDir: 'static',
  css: {
    extract: true
  },
  configureWebpack: {
    performance: {
      hints: false
    }
  }
}