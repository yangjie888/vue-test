import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/Layout'
import homeCom from '@/components/homeCom'
Vue.use(Router)

export default new Router({
  base: '/admin/',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/layout'
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
    {
      path: '/login',
      name: 'login',
      component: () => import('@/page/login')
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      redirect: '/layout/home/menu1',
      children: [
        {
          path: 'home',
          name: 'home',
          component: homeCom,
          children: [
            {
              path: 'menu1',
              name: 'menu1',
              component: () => import('@/page/modelOne')
            },
            {
              path: 'menu2',
              name: 'menu2',
              component: () => import('@/page/modelTwo')
            }
          ]
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('@/page/setting')
        }
      ]
    },
    {path: '/404', name: 'WrongPage', component: () => import('@/page/404')},
    {path: '*', redirect: '/404'}
  ]
})
