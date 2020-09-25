import request from '@/api/request.js'

export function UserApi () {
  return request({
    url: '/singlePoetry',
    method: 'get'
  })
}
