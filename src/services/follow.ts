import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'
import config from '../config'

export type FollowData = {
    id: number,
    user_name: string,
    artist_name: string,
    artist_id: number
}

const ROOT = config.API_URL || 'http://localhost:3000/v1' 

const http = axiosRateLimit(axios.create(), {
  maxRequests: 5,
  perMilliseconds: 1000,
})

const post = async (url, queryParams = {}) => {
  return await http.post(url, { params: queryParams })
}

export const createFollow = async (queryParams = {}) => {
    const url = `${ROOT}/follow`
    const res = await post(url, queryParams)
    const follow = res.data ?? {}
    console.log("Follow created: ", follow)
    return follow
}
