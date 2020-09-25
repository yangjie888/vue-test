import {bookApi} from '@/api/book'
export default {
  changUser ({ commit }) {
    return new Promise((resolve, reject) => {
      bookApi().then(({data}) => {
        commit('SET_USER', data.message)
        resolve(data.message)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
