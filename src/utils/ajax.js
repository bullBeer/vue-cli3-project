// ajax.js

let API_HOST // http api请求地址
switch(process.env.VUE_APP_MODE) {
  // 生产环境
  case 'production': 
    API_HOST = '//192.168.0.1/prod/api'
    break
  // 开发环境
  case 'development':
    API_HOST = '//192.168.0.1/dev/api'
    break
  // 测试环境
  case 'testing':
    API_HOST = '//192.168.0.1/test/api'
    break
  default:
    API_HOST = '//192.168.0.1/dev/api'
}

console.log('API_HOST: ', API_HOST)