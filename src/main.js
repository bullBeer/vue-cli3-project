import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.console.log('API_HOST', process.env.VUE_APP_API_HOST)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
