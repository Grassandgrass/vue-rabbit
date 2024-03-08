// axios基础的封装
import axios from 'axios'

const httpInstance = axios.create({
  baseURL: 'https://apifox.com/apidoc/shared-fa9274ac-362e-4905-806b-6135df6aa90e/api-24945669',
  timeout: 5000
})

// 拦截器

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

export default httpInstance;
