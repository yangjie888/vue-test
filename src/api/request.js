import axios from 'axios'
import store from '@/store'
// 创建axios实例
const service = axios.create({
  // baseURL: process.env.NODE_ENV === 'development' ? '/api' : process.env.API_ROOT,
  baseURL: '/api',
  timeout: 15000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [(data) => {
    if (data) {
      data = JSON.stringify(data)
    }
    return data
  }],
  transformResponse: [response => {
    typeof response === 'string' && (response = JSON.parse(response))
    return (response)
  }],
  maxContentLength: 300000 // 定义允许的http响应内容的最大大小
})
// http request 请求拦截器，有token值则配置上token值
service.interceptors.request.use(
  config => {
    if (store.state.token) {
    //   config.headers.Authorization = store.state.token
      config.headers.Authorization = '12345'
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })
// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          // localStorage.removeItem('token')
          // router.push({'name': 'login', 'query': {'redirect': router.currentRoute.fullPath}})
      }
    }
    return Promise.reject(error.response.data)
  })
export default service
