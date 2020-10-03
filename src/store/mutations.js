import { SET_USER, SET_TOKEN } from './mutation-types'
export default {
  [SET_USER] (state, user) {
    state.user = user
  },
  [SET_TOKEN] (state, token) {
    state.token = token
  }
}
