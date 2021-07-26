import Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'
import { OrderSide, Order } from 'opensea-js/lib/types'
import BigNumber from 'bignumber.js'

const provider = new Web3.providers.HttpProvider(
  'https://ropsten.infura.io/v3/655cfb5bb2bb42b2bc96f812738a29f8'
)

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main,
})

const MAINNET_WETH_TOKEN_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
const ROPSTEN_WETH_TOKEN_ADDRESS = '0xc778417e063141139fce010982780140aa0cd5ab'

const WETH_TOKEN_ADDRESS = ROPSTEN_WETH_TOKEN_ADDRESS

export const getBalanceWETH = async (
  accountAddress: string | null | undefined
) =>
  accountAddress == null
    ? new BigNumber(0)
    : await seaport.getTokenBalance({
        accountAddress, // string
        tokenAddress: WETH_TOKEN_ADDRESS,
      })

export const createBuyOrder = async ({
  accountAddress,
  assetContractAddress,
  assetTokenId,
  schemaName = null,
  amountEth,
}): Promise<Order | Error> => {
  try {
    await seaport.createBuyOrder({
      accountAddress,
      asset: {
        tokenAddress: assetContractAddress,
        tokenId: assetTokenId,
        schemaName, // WyvernSchemaName. If omitted, defaults to 'ERC721'. Other options include 'ERC20' and 'ERC1155'
      },
      // Value of the offer, in units of the payment token (or wrapped ETH if none is specified):
      startAmount: amountEth,
      paymentTokenAddress: WETH_TOKEN_ADDRESS,
    })
  } catch (e) {
    console.error(e)
    return e
  }
}

export const fulfillOrder = async ({
  accountAddress,
  assetContractAddress,
  assetTokenId,
}) => {
  const order = await seaport.api.getOrder({
    asset_contract_address: assetContractAddress,
    token_id: assetTokenId,
    side: OrderSide.Sell,
  })
  const transactionHash = await seaport.fulfillOrder({ order, accountAddress })
  return transactionHash
}
