import { update, get } from './http'
import { Users } from '../types'

export const getUser = async (queryParams = {}): Promise<Users> => {
  const url = `/users`
  const res = await get(url, queryParams)
  const user = res.data ?? {}
  return user[0]
}

export const updateUser = async (queryParams = {}) => {
  const url = `/users`
  const res = await update(url, queryParams)
  const updatedUser = res.data ?? {}
  return updatedUser
}
