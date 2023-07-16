// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
Vue.config.productionTip = false

import store from './store'
import request from './utils/request'
Vue.prototype.$request = request

Vue.use(ElementUI)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
