import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

/* 项目全局State */
const state = {
  user: 'yangjie',
  token: 'token'
}

/* Store实例 */
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
