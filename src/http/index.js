'use strict'
import axios from 'axios'
import _ from 'lodash'

let config = {
  baseURL: '/api',
  timeout: 40000 //超时时长

  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control 跨域请求时是否需要使用凭证
}
const http = axios.create(config)

http.defaults.headers.common['Content-Type'] = 'application/json'
//添加请求拦截器
http.interceptors.request.use(
  config => {},
  err => {}
)

//响应拦截器
http.interceptors.response.use(
  response => {},
  error => {}
)

export default http
