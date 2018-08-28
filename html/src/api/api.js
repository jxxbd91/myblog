import axios from 'axios'

axios.defaults.proxy = {
  host: 'loclhost',
  port: 7890,
}
export const loginApi = parmas => axios.post('http://localhost:3000/user/login', parmas)