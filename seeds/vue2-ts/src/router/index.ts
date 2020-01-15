import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'
// import pageIndex from '~@/page/index.vue';
const pageIndex: AsyncComponent = (): any => import(/* webpackChunkName: "pageIndex" */ '~@/page/index.vue')
// import pageSub from '~@/page/sub.vue';
const pageSub: AsyncComponent = (): any => import(/* webpackChunkName: "pageSub" */ '~@/page/sub.vue');

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/index',
    component: pageIndex
  }, {
    path: '/sub',
    component: pageSub
  }, {
    path: '*',
    redirect: '/index'
  }
]

const router: Router = new Router({
  mode: 'hash',
  base: '/',
  routes
})
export default router