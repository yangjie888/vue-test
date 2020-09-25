import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  base: '/admin/',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'one'
    },
    {
      path: '/one',
      name: 'one',
      component: () => import('@/page/one')
    },
    {
      path: '/two',
      name: 'two',
      component: () => import('@/page/two')
    },
    {path: '/404', name: 'WrongPage', component: () => import('@/page/404')},
    {path: '*', redirect: '/404'}
  ]
})
