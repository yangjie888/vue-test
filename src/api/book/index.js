import request from '@/api/request.js'

export function bookApi (data) {
  return request({
    url: '/getJoke',
    method: 'get',
    params: data
  })
}
