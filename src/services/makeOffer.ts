import { OpenSeaPort, Network } from 'opensea-js'
import { OrderSide, Order, WyvernSchemaName } from 'opensea-js/lib/types'
import BigNumber from 'bignumber.js'
import provider from './provider'

const getSeaport = async () => {
  const seaport = new OpenSeaPort(provider, {
    networkName: Network.Main,
  })

  return seaport
}

const MAINNET_WETH_TOKEN_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

const WETH_TOKEN_ADDRESS = MAINNET_WETH_TOKEN_ADDRESS
