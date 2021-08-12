import { postWithMultiPart, get } from './http'
import { Users } from '../types'

export const getUser = async (queryParams = {}): Promise<Users> => {
  const url = `/users`
  const res = await get(url, queryParams)
  const user = res.data ?? {}
  return user[0]
}

export const updateUser = async ( public_address , queryParams = {} ) => {
  const url = `/users/update/${public_address}`
  const res = await postWithMultiPart(url, queryParams)
  const updatedUser = res.data ?? {}
  return updatedUser
}
