import React from 'react'

import { userInfo } from '../../../../types'

import ButtonsArtwork from '../ButtonsArtwork'
import TopHero from '../TopHero'
import AuctionArtwork from './AuctionArtwork'

const HeroOfferItem = ({
  title,
  priceEth,
  priceUsd,
  expiration,
  linkButton,
  linkButtonArtWork,
  userInfo,
}: {
  title: string
  priceEth?: string
  priceUsd?: string
  expiration?: string
  linkButton?: string
  linkButtonArtWork?: string
  userInfo: userInfo
}) => {
  return (
    <TopHero userInfo={userInfo} title={title}>
      <AuctionArtwork
        priceEth={priceEth}
        priceUsd={priceUsd}
        expiration={expiration}
      />
      <ButtonsArtwork
        textButton={'Make an offer'}
        linkButtonArtWork={linkButtonArtWork}
        linkButton={linkButton}
      />
    </TopHero>
  )
}

export default HeroOfferItem
