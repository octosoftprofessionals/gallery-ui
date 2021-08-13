import { post, get, postWithMultiPart } from './http'
import { Users } from '../types'

export const getUser = async (queryParams = {}): Promise<Users> => {
  const url = `/users`
  const res = await get(url, queryParams)
  const user = res.data ?? {}
  return user[0]
}

export const updateUserWithFiles = async (public_address, queryParams = {}) => {
  const url = `/users/update/${public_address}`
  const res = (await postWithMultiPart(url, queryParams)) as any
  const updatedUser = res.data ?? {}
  return updatedUser
}

export const updateUserWithoutFiles = async (
  public_address,
  queryParams = {}
) => {
  const url = `/users/update/${public_address}`
  const res = (await post(url, queryParams)) as any
  const updatedUser = res.data ?? {}
  return updatedUser
}
