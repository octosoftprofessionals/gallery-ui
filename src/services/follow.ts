import { get, post, destroy } from './http'

export type FollowData = {
  id: number
  user_name: string
  artist_name: string
  artist_id: number
}

export const createFollow = async (queryParams = {}) => {
  const url = `/follow`
  const res = await post(url, queryParams)
  const createdFollow = res.data ?? {}
  return createdFollow
}

export const getOneFolloweeByIdWithAllHisFollowers = async (
  address: string
) => {
  const url = `/follow/${address}/followers`
  const res = await get(url)
  const followeeWithFollowers = res.data ?? {}
  return followeeWithFollowers
}

export const getOneFollowerByIdWithAllHisFollowees = async (
  address: string
) => {
  const url = `/follow/${address}/followees`
  const res = await get(url)
  const followerWithFollowees = res.data ?? {}
  return followerWithFollowees
}

export const unFollow = async (follower_id: number, followee_id: number) => {
  const url = `/follow/${follower_id}/${followee_id}`
  const res = await destroy(url)
  const deletedFollow = res.data ?? {}
  return deletedFollow
}
