import { Order, WyvernSchemaName } from 'opensea-js/lib/types'
import BigNumber from 'bignumber.js'
import * as Web3 from 'web3'
import getSeaport from './getseaport'
import { eventListener } from './eventListener'

const MAINNET_WETH_TOKEN_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

const WETH_TOKEN_ADDRESS = MAINNET_WETH_TOKEN_ADDRESS

export const getBalanceWETH = async (
  accountAddress: string | null | undefined
) =>
  accountAddress == null
    ? new BigNumber(0)
    : await (
        await getSeaport()
      ).getTokenBalance({
        accountAddress, // string
        tokenAddress: WETH_TOKEN_ADDRESS,
      })

export const createBuyOrder = async ({
  accountAddress,
  assetContractAddress,
  assetTokenId,
  schemaName = WyvernSchemaName.ERC721,
  amountEth,
  ownerUsername,
}): Promise<Order | Error> => {
  try {
    const seaport = await getSeaport()
    console.log('HERE SEAPORT :>>', seaport)
    const buyOrder = await seaport.createBuyOrder({
      asset: {
        tokenId: assetTokenId,
        tokenAddress: assetContractAddress,
        schemaName: schemaName,
      },
      accountAddress: accountAddress,
      startAmount: amountEth,
      paymentTokenAddress: WETH_TOKEN_ADDRESS,
    })
    console.log('Here buyOrder :>>', buyOrder)
    const tokenAddress = buyOrder.asset.tokenAddress
    const tokenId = buyOrder.asset.tokenId

    eventListener(tokenAddress, tokenId)
    return buyOrder
  } catch (e) {
    console.error(e)
    return e
  }
}
