import React from 'react'

import { userInfo } from '../../../../types'
import { formatDecimal } from '../../../../Utils'

import ButtonsArtwork from '../ButtonsArtwork'
import TopHero from '../TopHero'
import AuctionArtwork from './AuctionArtwork'

const HeroBuyNowItem = ({
  title,
  priceEth = 'NaN',
  priceUsd = 'NaN',
  linkButton,
  linkButtonArtWork,
  userInfo,
}: {
  title: string
  priceEth?: string
  priceUsd?: string
  linkButton?: string
  linkButtonArtWork?: string
  userInfo: userInfo
}) => {
  return (
    <TopHero userInfo={userInfo} title={title}>
      <AuctionArtwork priceEth={priceEth} priceUsd={priceUsd} />
      <ButtonsArtwork
        textButton={
          isNaN(parseInt(priceEth))
            ? 'Buy Now — ETH'
            : `Buy Now ${formatDecimal(priceEth)} ETH`
        }
        linkButtonArtWork={linkButtonArtWork}
        linkButton={linkButton}
      />
    </TopHero>
  )
}

export default HeroBuyNowItem
