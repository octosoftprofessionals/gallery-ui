import Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'
import { OrderSide, Order, WyvernSchemaName } from 'opensea-js/lib/types'
import BigNumber from 'bignumber.js'
import provider from './provider'

const getSeaport = async () => {
  // const windowEthereum = window.ethereum

  // console.log('windowEthereum')
  // console.log(windowEthereum)

  // const provider = new ethers.providers.JsonRpcProvider(window.ethereum)
  // const detectedProvider = await detectEthereumProvider()

  // console.log('provider')
  // console.log(provider)
  // console.log('detectedProvider')
  // console.log(detectedProvider)

  const seaport = new OpenSeaPort(provider, {
    networkName: Network.Main,
  })

  return seaport
}

const MAINNET_WETH_TOKEN_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
// const ROPSTEN_WETH_TOKEN_ADDRESS = '0xc778417e063141139fce010982780140aa0cd5ab'

const WETH_TOKEN_ADDRESS = MAINNET_WETH_TOKEN_ADDRESS

export const getBalanceWETH = async (
  accountAddress: string | null | undefined
) =>
  accountAddress == null
    ? new BigNumber(0)
    : await (await getSeaport()).getTokenBalance({
        accountAddress, // string
        tokenAddress: WETH_TOKEN_ADDRESS,
      })

export const createBuyOrder = async ({
  accountAddress,
  assetContractAddress,
  assetTokenId,
  schemaName = WyvernSchemaName.ERC1155,
  amountEth,
}): Promise<Order | Error> => {
  try {
    const seaport = await getSeaport()
    console.log('About to create buy order', {
      accountAddress,
      asset: {
        tokenAddress: assetContractAddress,
        tokenId: assetTokenId,
        schemaName,
      },
      // Value of the offer, in units of the payment token (or wrapped ETH if none is specified):
      startAmount: amountEth,
      paymentTokenAddress: WETH_TOKEN_ADDRESS,
    })
    const buyOrder = await seaport.createBuyOrder({
      accountAddress,
      asset: {
        tokenAddress: assetContractAddress,
        tokenId: assetTokenId,
        schemaName,
      },
      // Value of the offer, in units of the payment token (or wrapped ETH if none is specified):
      startAmount: amountEth,
      paymentTokenAddress: WETH_TOKEN_ADDRESS,
    })
    console.log('buyOrder:')
    console.log(buyOrder)
  } catch (e) {
    console.error(e)
    return e
  }
}

// export const fulfillOrder = async ({
//   accountAddress,
//   assetContractAddress,
//   assetTokenId,
// }) => {
//   const order = await (await getSeaport()).api.getOrder({
//     asset_contract_address: assetContractAddress,
//     token_id: assetTokenId,
//     side: OrderSide.Sell,
//   })
//   const transactionHash = await (await getSeaport()).fulfillOrder({
//     order,
//     accountAddress,
//   })
//   return transactionHash
// }
