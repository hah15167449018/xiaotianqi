import axios from 'axios'

function baseRequest(method, url, data) {
  // 发送 POST 请求
  return axios({
    method,
    url,
    data,
    params: data
  })
}

export function get(url, data) {
  return baseRequest('get', url, data)
}

export function post(url, data) {
  return baseRequest('post', url, data)
}
