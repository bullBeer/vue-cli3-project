// vue.config.js
module.exports = {
  productionSourceMap: false,
  outputDir: process.env.BASE_URL,
  assetsDir: 'static',
  css: {
    extract: true
  }
}