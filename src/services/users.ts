import { post, update, get } from './http'
import { Users } from '../types'

export const getUser = async (queryParams = {}): Promise<Users> => {
  const url = `/users`
  const res = await get(url, queryParams)
  const user = res.data ?? {}
  return user[0]
}

export const updateUser = async (metamaskAccount, queryParams = {}) => {
  // const url = `/users/update/${metamaskAccount}` //para cuando se deploye a heroku
  const url = '/users' //--> obsoleto
  const config = {
    headers: {
      Accept: 'multipart/form-data',
      'Content-Type': 'multipart/form-data',
    },
  }
  // const res = (await post(url, queryParams, config)) as any  //-->  para cuando se deploye a heroku
  const res = (await update(url, queryParams, config)) as any
  const updatedUser = res.data ?? {}
  return updatedUser
}
