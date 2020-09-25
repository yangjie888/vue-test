// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import App from './App'
import router from '@/router'
import '@/utils/permission'
import qs from 'qs'
import store from '@/store'
import components from '@/components'
import myPlugin from 'prouidd'
Vue.use(myPlugin)
Vue.use(ElementUI)
Vue.use(components)
Vue.prototype.$qs = qs// 全局使用qs this.$qs.parse(obj)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
