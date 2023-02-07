import axios from "axios"
import apiCreate from './api.js'

const icode = '86442FE9D0FE50CE'

const imooc = axios.create({
  baseURL: 'http://apis.imooc.com/api',
  timeout: 1000 * 2
})

imooc.interceptors.request.use((config) => {
  // get请求放url
  config.params = { ...config.params, icode }
  // 上传文件则放到FormData中
  if (config.data instanceof FormData) config.data.append('icode', )
  // post请求放body
  else config.data = { ...config.data, icode }
  return config
}, (error) => {
  return Promise.reject(error)
})

imooc.interceptors.response.use(({ data = {} }) => {
  return data
}, (error) => {
  return Promise.reject(error)
})

export default apiCreate(imooc)