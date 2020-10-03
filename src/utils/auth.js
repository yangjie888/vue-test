import Cookies from 'js-cookie'
// token操作
export function getToken () {
  return Cookies.get('token')
}

export function setToken (token) {
  Cookies.set('token', token)
}

export function removeToken () {
  Cookies.remove('token')
}
