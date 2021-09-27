import Web3 from 'web3'
import { ethers } from 'ethers'

const MAINNET_INFURA_URL =
  'https://mainnet.infura.io/v3/655cfb5bb2bb42b2bc96f812738a29f8'
// const ROPSTEN_INFURA_URL =
//   'https://ropsten.infura.io/v3/655cfb5bb2bb42b2bc96f812738a29f8'

const httpProvider = new ethers.providers.Web3Provider(window.ethereum)

export default httpProvider
