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
  console.log('ABOUT CREATE OFFER ORDER', {
    asset: {
      tokenId: assetTokenId,
      tokenAddress: assetContractAddress,
      schemaName: WyvernSchemaName.ERC1155,
    },
    accountAddress: accountAddress,
    startAmount: valueBid,
  })
  const offer = await seaport.createBuyOrder({
    asset: {
      tokenId: assetTokenId,
      tokenAddress: assetContractAddress,
      schemaName: WyvernSchemaName.ERC1155,
    },
    accountAddress: accountAddress,
    startAmount: valueBid,
  })
  console.log('CREATED OFFER', offer)
  const tokenAddress = offer.asset.tokenAddress
  const tokenId = offer.asset.tokenId

  console.log('tokenAddress :>> ', tokenAddress)
  console.log('tokenId :>> ', tokenId)

  eventListener(tokenAddress, tokenId)
}

export default makeAnOffer
