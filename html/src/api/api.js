import axios from './server'
import { apiMap } from '../env/config'
// import { apiUrl } from '../env/env'

export const loginApi = parmas => axios.post(`${apiMap.user}/login`, parmas)
export const registerApi = parmas => axios.post(`${apiMap.user}/register`, parmas)
export const homeInitApi = parmas => axios.post(`${apiMap.home}/index`, parmas)
export const publishApi = parmas => axios.post(`${apiMap.home}/publish`, parmas)