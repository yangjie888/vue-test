import request from '@/api/request.js'

export function LoginApi () {
  return request({
    url: '/singlePoetry',
    method: 'get'
  })
}
