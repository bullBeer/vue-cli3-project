// vue.config.js
module.exports = {
  transpileDependencies: ['ansi-regex', 'strip-ansi'],
  productionSourceMap: process.env.VUE_APP_MODE !== 'production',
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
  },
  chainWebpack: config => {

  }
}