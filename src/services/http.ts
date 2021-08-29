import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'

import config from '../config'

const ROOT = config.API_URL || 'http://localhost:3000/v1'

export const httpWithCredentials = axiosRateLimit(
  axios.create({ withCredentials: true, baseURL: ROOT }),
  {
    maxRequests: 25,
    perMilliseconds: 1000,
  }
)

export const httpWithCredentialsAndHeaders = axiosRateLimit(
  axios.create({
    withCredentials: true,
    baseURL: ROOT,
    headers: {
      'content-type': 'multipart/form-data',
    },
  }),
  {
    maxRequests: 25,
    perMilliseconds: 1000,
  }
)

export const postWithMultiPart = async (url, formData) => {
  return await httpWithCredentialsAndHeaders.post(url, formData)
}

export const get = async (url, queryParams = {}) => {
  return await httpWithCredentials.get(url, { params: queryParams })
}

export const post = async (url, queryParams = {}) => {
  return await httpWithCredentials.post(url, queryParams)
}

export const update = async (url, queryParams = {}) => {
  return await httpWithCredentials.put(url, queryParams)
}

export const destroy = async (url, queryParams = {}) => {
  return await httpWithCredentials.delete(url, queryParams)
}
