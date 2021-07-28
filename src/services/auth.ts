import { ethers } from 'ethers'
import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'
import config from '../config'

const ROOT = config.API_URL || 'http://localhost:3000/v1'

const http = axiosRateLimit(axios.create({ withCredentials: true }), {
  maxRequests: 5,
  perMilliseconds: 1000,
})

const post = async (url, queryParams = {}) => {
  return await http.post(url, { params: queryParams })
}

const get = async (url, queryParams = {}) => {
  return await http.get(url, { params: queryParams })
}

export const login = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const public_address = (await signer.getAddress()).toLocaleLowerCase()
    const urlUser = `${ROOT}/users?public_address=${public_address}`
    const resUser = await get(urlUser)
    let users = resUser.data ?? []
    if (!users.length) {
      const urlCreate = `${ROOT}/users`
      const resCreate = await post(urlCreate, { public_address })
      users = resCreate.data ?? []
    }
    if (!users.length) {
      throw `No users created for public address: ${public_address}`
    }
    const user = users[0]

    const signature = await signer.signMessage(
      `I am signing my one-time nonce: ${user.nonce}`
    )

    const urlAuth = `${ROOT}/auth`
    const resAuth = await post(urlAuth, { public_address, signature })

    if (resAuth.status === 200) {
      return user
    }
  } catch (e) {
    console.log(e)
  }
  return undefined
}
