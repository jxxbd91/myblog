/**
 * 对 axios 的封装
 */
import axios from 'axios'

// 响应拦截
axios.interceptors.response.use(response => {
  console.log(response)
  let { data: {resultCode} } = response
  if (resultCode !== '200') {
    return Promise.reject(response)
  } else {
    return response
  }
}, error => {
  console.log(JSON.stringify(error))
  let { response: { status, data }, config: { url } } = error
  if (status === 401) {
    if (!url.includes('/api/user/')) {
      console.log('尚未登录')
      window.location.href = 'http://localhost:3000/'
    }
  } else {
    return Promise.reject(error)
  }
})

export default axios