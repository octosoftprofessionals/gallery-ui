import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'

import config from '../config'

const ROOT = config.API_URL || 'http://localhost:3000/v1'

export const httpWithCredentials = axiosRateLimit(
  axios.create({ withCredentials: true, baseURL: ROOT }),
  {
    maxRequests: 5,
    perMilliseconds: 1000,
  }
)

export const get = async (url, queryParams = {}) => {
  return await httpWithCredentials.get(url, { params: queryParams })
}

export const post = async (url, queryParams = {}, config) => {
  config
    ? await httpWithCredentials.post(url, { params: queryParams }, config)
    : await httpWithCredentials.post(url, { params: queryParams })
}

export const update = async (url, queryParams = {}, config) => {
  config
    ? await httpWithCredentials.put(url, { params: queryParams }, config)
    : await httpWithCredentials.put(url, { params: queryParams })
}

export const destroy = async (url, queryParams = {}) => {
  return await httpWithCredentials.delete(url, { params: queryParams })
}
