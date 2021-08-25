import BigNumber from 'bignumber.js'

type BigNumberish = string | number | BigNumber

export const quoteEthUsd = (
  ethQuote: BigNumberish,
  usdQuote: BigNumberish
): BigNumber => new BigNumber(ethQuote).div(new BigNumber(usdQuote))

export const quoteUsdFromEthUsd = (
  ethQuote: BigNumberish,
  usdQuote: BigNumberish,
  ethAmount: BigNumberish
): BigNumber => new BigNumber(ethAmount).div(quoteEthUsd(ethQuote, usdQuote))
