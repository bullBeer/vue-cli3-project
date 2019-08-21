import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api/'

Vue.config.productionTip = false
Vue.prototype.$api = api


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
