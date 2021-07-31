import { update } from './http'

export const updateUser = async (queryParams = {}) => {
  console.log('data:', queryParams)
  const url = `/users`
  const res = await update(url, queryParams)
  const updatedUser = res.data ?? {}
  return updatedUser
}
