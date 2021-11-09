import getSeaport from './getseaport'
import { OrderSide, WyvernSchemaName } from 'opensea-js/lib/types'
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
  const seaport = await getSeaport()
  console.log('ABOUT CREATE BUY ORDER', {
    tokenId: assetTokenId,
    tokenAddress: assetContractAddress,
    schemaName: WyvernSchemaName.ERC1155,
    startAmount: priceEth,
    endAmount: priceEth,
    accountAddress: accountAddress,
  })
  const createOrder = await seaport.createSellOrder({
    tokenAddress: assetContractAddress,
    tokenId: assetTokenId,
    schemaName: WyvernSchemaName.ERC1155,
    startAmount: priceEth,
    endAmount: priceEth,
    accountAddress: accountAddress,
  })
  console.log('CREATED BUY ORDER', createOrder)
  console.log('ABOUT GET ORDER', {
    asset_contract_address: assetContractAddress,
    token_id: assetTokenId,
    side: OrderSide.Sell,
  })
  const Order = await seaport.api.getOrder({
    asset_contract_address: assetContractAddress,
    token_id: assetTokenId,
    side: OrderSide.Sell,
  })
  console.log('HERE ORDER', Order)
  const transaction = await seaport.fulfillOrder({
    order: Order,
    accountAddress,
  })
  console.log('HERE TRANSACTION', transaction)

  const tokenAddress = Order.asset.tokenAddress
  const tokenId = Order.asset.tokenId

  eventListener(tokenAddress, tokenId)
  return transaction
}

export default buyNow
