import getSeaport from './getseaport'
import { OrderSide } from 'opensea-js/lib/types'
import { eventListener } from './eventListener'

const MAINNET_WETH_TOKEN_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

const WETH_TOKEN_ADDRESS = MAINNET_WETH_TOKEN_ADDRESS

const buyNow = async ({
  priceEth,
  creatorAddress,
  accountAddress,
  assetContractAddress,
  assetTokenId,
  ownerAddress,
}) => {
  try {
    const seaport = await getSeaport()
    const Order = await seaport.api.getOrder({
      asset_contract_address: assetContractAddress,
      token_id: assetTokenId,
      side: OrderSide.Sell,
    })
    console.log('HERE ORDER:>>', Order)

    const transaction = await seaport.fulfillOrder({
      order: Order,
      accountAddress: accountAddress,
    })
    console.log('HERE TRANSACTION:>>', transaction)

    const tokenAddress = Order.asset.tokenAddress
    const tokenId = Order.asset.tokenId

    console.log('tokenAddress :>> ', tokenAddress)
    console.log('tokenId :>> ', tokenId)

    eventListener(tokenAddress, tokenId)
    return transaction
  } catch (e) {
    console.error(e)
    return e
  }
}

export default buyNow
