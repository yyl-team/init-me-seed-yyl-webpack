import 'yyl-flexlayout'
import '@babel/polyfill'

import Vue from 'vue'
import App from './index.vue'
import router from '@/router'
import store from '@/store'

// tslint:disable-next-line: no-unused-expression
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
