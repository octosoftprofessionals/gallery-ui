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

// Helper functions

const get = async (url, queryParams = {}) => {
  return await http.get(url, { params: queryParams })
}

const post = async (url, queryParams = {}) => {
  return await http.post(url, { params: queryParams })
}

const destroy = async (url, queryParams = {}) => {
  return await http.delete(url, { params: queryParams })
}

export const createFollow = async (queryParams = {}) => {
    const url = `${ROOT}/follow`
    const res = await post(url, queryParams)
    const createdFollow = res.data ?? {}
    return createdFollow
}

export const getOneFolloweeByIdWithAllHisFollowers = async (
  followee_id: number
  ) => {
  const url = `${ROOT}/follow/${followee_id}/followers`
  const res = await get(url)
  const followeeWithFollowers = res.data ?? {}
  return followeeWithFollowers
}

export const getOneFollowerByIdWithAllHisFollowees = async (
  follower_id: number
  ) => {
  const url = `${ROOT}/follow/${follower_id}/followees`
  const res = await get(url)
  const followerWithFollowees = res.data ?? {}
  return followerWithFollowees
}

export const unFollow = async (
  follower_id: number,
  followee_id: number
  ) => {
  const url = `${ROOT}/follow/${follower_id}/${followee_id}`
  const res = await destroy(url)
  const deletedFollow = res.data ?? {}
  return deletedFollow
}
