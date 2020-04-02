import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/res/border.css'
import './assets/res/reset.css'
import './assets/styles/globalSettings.styl'

import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
