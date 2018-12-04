// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/bootstrap.min.css'
import '../static/css/font-awesome.min.css'
import '../static/css/ie9.css'
import '../static/css/main.css'
import axios from './axios.js'

Vue.config.productionTip = false
Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
