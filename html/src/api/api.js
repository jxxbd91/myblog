import axios from 'axios'
import { apiMap } from '../env/config'
import { apiUrl } from '../env/env'
axios.defaults.proxy = {
  host: 'loclhost',
  port: 7890,
}

export const loginApi = parmas => axios.post(`${apiMap.user}/login`, parmas)