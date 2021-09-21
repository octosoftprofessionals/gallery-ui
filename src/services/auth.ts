import { ethers } from 'ethers'
import { get, post } from './http'
import provider from './provider'

export const login = async () => {
  try {
    const signer = provider.getSigner()
    const public_address = (await signer.getAddress()).toLocaleLowerCase()

    const resUser = await get('/users', { public_address })
    let users = resUser.data ?? []
    if (!users.length) {
      const resCreate = await post('/users', { public_address })
      users = resCreate.data ?? []
    }
    if (!users.length) {
      throw `No users created for public address: ${public_address}`
    }
    const user = users[0]

    const signature = await signer.signMessage(
      `I am signing my one-time nonce: ${user.nonce}`
    )

    const resAuth = await post('/auth', { public_address, signature })

    if (resAuth.status === 200) {
      return user
    }
  } catch (e) {
    console.log(e)
  }
  return undefined
}
