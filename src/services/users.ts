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

export const getUsersDataField = async (dataField, queryParams: any = {}): Promise<Users> => {
  const url = `/users`
  const res = await get(url, queryParams)
  const users = res.data ?? {}
  const userDataFieldList: Array<string> = []
  users.forEach((user) => {
    for(let prop in user){
      if(prop == dataField){
        userDataFieldList.push(user[prop])
      }
    }
  })
  return userDataFieldList
}


export const updateUser = async (public_address, queryParams = {}) => {
  const url = `/users/update/${public_address}`
  const res = await postWithMultiPart(url, queryParams)
  const updatedUser = res.data ?? {}
  return updatedUser
}
