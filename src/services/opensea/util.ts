import BigNumber from 'bignumber.js'

import { TokenType } from '../../types'

type priceFromPriceDataProps = {
  price?: number
  token?: TokenType
}
export const priceFromPriceData = ({
  price,
  token,
}: priceFromPriceDataProps = {}) => {
  if (price == null || token == null) {
    return null
  }
  const { decimals, eth_price, usd_price } = token ?? {}
  const price_dust = BigNumber.isBigNumber(price) ? price : new BigNumber(price)
  const price_token = price_dust.div(Math.pow(10, decimals))
  const price_eth = price_token.times(eth_price).toString()
  const price_usd = price_token.times(usd_price).toString()
  return { price_eth, price_usd }
}
