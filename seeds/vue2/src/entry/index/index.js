import 'yyl-flexlayout'
import '@babel/polyfill'
import Vue from 'vue'
import { mapActions } from 'vuex'
import VueRouter from 'vue-router'

import store from '../../vuex/store.js'
import './index.scss'

const pageIndex = () => import(/* webpackChunkName: "pageIndex" */ '~@/page/p-index/p-index.vue')
const pageSub = () => import(/* webpackChunkName: "pageSub" */ '~@/page/p-sub/p-sub.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/index',
    component: pageIndex
  }, {
    path: '/sub',
    component: pageSub
  }, {
    path: '*',
    redirect: '/index'
  }]
})

new Vue({
  store,
  router,
  mounted () {
    this.addDemoLog('index.js ready')
  },
  methods: {
    ...mapActions(['addDemoLog'])
  }
}).$mount('#app')
