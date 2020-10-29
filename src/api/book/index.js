import request from '@/api/request.js'

export function bookApi () {
  return request({
    url: '/getJoke',
    method: 'get'
  })
}
