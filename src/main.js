import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ajax from './utils/ajax.js'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
