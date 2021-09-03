import { postWithMultiPart, get } from './http'
import { Users } from '../types'

export const getUser = async (queryParams: any = {}): Promise<Users> => {
  const url = `/users`
  const res = await get(url, queryParams)
  const users = res.data ?? {}
  let user = []
  if (users.length > 0 && queryParams.public_address !== null) {
    user = users.find(user => user.publicAddress === queryParams.public_address)
    return user
  } else {
    return {}
  }
}

export const getUsers = async (queryParams: any = {}): Promise<Users> => {
  const url = `/users`
  const res = await get(url, queryParams)
  const users = res.data ?? {}
  const usernameList: Array<string> = []
  users.forEach(user => usernameList.push(user.username))
  return usernameList
}

export const updateUser = async (public_address, queryParams = {}) => {
  const url = `/users/update/${public_address}`
  const res = await postWithMultiPart(url, queryParams)
  const updatedUser = res.data ?? {}
  return updatedUser
}

export const mailAvailability = async (email: string) => {
  const url = `/users/${email}`
  const res = await get(url)
  const mailAvailability = res.data ?? {}
  return mailAvailability
}
