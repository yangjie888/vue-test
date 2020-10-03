import {bookApi} from '@/api/book'
import { LoginApi } from '@/api/login'
import { setToken } from '@/utils/auth'
export default {
  changUser ({ commit }) {
    return new Promise((resolve, reject) => {
      bookApi().then(({data}) => {
        commit('SET_USER', data.message)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  login ({ commit }) {
    return new Promise((resolve, reject) => {
      LoginApi().then(({data}) => {
        setToken(data.message)
        commit('SET_TOKEN', data.message)
        resolve(data.message)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
