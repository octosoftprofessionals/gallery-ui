import getSeaport from './getseaport'
import { OrderSide, WyvernSchemaName } from 'opensea-js/lib/types'
import { eventListener } from './eventListener'

const MAINNET_WETH_TOKEN_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

const WETH_TOKEN_ADDRESS = MAINNET_WETH_TOKEN_ADDRESS

const makeAnOffer = async ({
  priceEth,
  ownerAddress,
  accountAddress,
  assetContractAddress,
  assetTokenId,
  valueBid,
}) => {
  const seaport = await getSeaport()
  const offer = await seaport.createBuyOrder({
    asset: {
      tokenId: assetTokenId,
      tokenAddress: assetContractAddress,
      schemaName: WyvernSchemaName.ERC1155,
    },
    accountAddress: accountAddress,
    startAmount: valueBid,
  })
  const tokenAddress = offer.asset.tokenAddress
  const tokenId = offer.asset.tokenId


  eventListener(tokenAddress, tokenId)
}

export default makeAnOffer
