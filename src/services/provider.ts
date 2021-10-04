import Web3 from 'web3'
import { ethers } from 'ethers'

import { detectMob } from '../Utils/stringUtils'

const MAINNET_INFURA_URL =
  'https://mainnet.infura.io/v3/655cfb5bb2bb42b2bc96f812738a29f8'
// const ROPSTEN_INFURA_URL =
//   'https://ropsten.infura.io/v3/655cfb5bb2bb42b2bc96f812738a29f8'

const detectProvider = () => {
  if (typeof window !== 'undefined') {
    if (detectMob()) {
      return (
        new Web3.providers.HttpProvider(MAINNET_INFURA_URL) ||
        window.web3.currentProvider
      )
    } else {
      return new ethers.providers.Web3Provider(window.ethereum)
    }
  }
}

const httpProvider = detectProvider()
console.log(`httpProvider :>`, httpProvider)
// ? window.web3.currentProvider
// : new Web3.providers.HttpProvider(MAINNET_INFURA_URL)

export default httpProvider
