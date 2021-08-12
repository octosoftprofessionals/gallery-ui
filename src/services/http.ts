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

export const httpWithCredentialsAndHeaders = axiosRateLimit(
  axios.create({ withCredentials: true, baseURL: ROOT }),
  {
    maxRequests: 5,
    perMilliseconds: 1000,
  }
)

httpWithCredentialsAndHeaders.interceptors.request.use((config) => {
  config.headers['Accept'] = 'application/json'
  config.headers["Content-Type"] = "multipart/form-data"
  return config;
})

export const postWithMultiPart = async (url, queryParams = {}) => {
  return await httpWithCredentialsAndHeaders.post(url, (queryParams = {}))
}

export const get = async (url, queryParams = {}) => {
  return await httpWithCredentials.get(url, { params: queryParams })
}

export const post = async (url, queryParams = {}) => {
  return await httpWithCredentials.post(url, { params: queryParams })
}

export const update = async (url, queryParams = {}) => {
  return await httpWithCredentials.put(url, { params: queryParams })
}

export const destroy = async (url, queryParams = {}) => {
  return await httpWithCredentials.delete(url, { params: queryParams })
}
