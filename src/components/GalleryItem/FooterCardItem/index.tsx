import React from 'react'

import { STATUS_VALUES } from '../../../Utils'

import InAuctions from './InAuctions'
import BuyNow from './BuyNow'
import ButtonPlaylist from './ButtonPlaylist'
import Offer from './Offer'
import Exhibition from './Exhibition'

const FooterCardItem = ({
  statesArt,
  price,
  timer,
  handleSubmitFavorite,
  handleSubmitUnFavorite,
  isFavorite,
  account,
  artworkId,
  linkOffer,
  linkBuyNow,
  linkExhibition,
}: {
  statesArt: string
  price?: string
  timer?: string
  handleSubmitFavorite: Function
  handleSubmitUnFavorite: Function
  isFavorite?: boolean
  account: any
  artworkId: number
  linkOffer?: string
  linkBuyNow?: string
  linkExhibition?: string
}) => {
  return (
    <>
      {statesArt === STATUS_VALUES.onAuction ? (
        <InAuctions price={price} timer={timer}>
          {account ? (
            <ButtonPlaylist
              handleSubmitFavorite={handleSubmitFavorite}
              handleSubmitUnFavorite={handleSubmitUnFavorite}
              inFavorite={isFavorite}
              account={account}
              artworkId={artworkId}
            />
          ) : null}
        </InAuctions>
      ) : statesArt === STATUS_VALUES.buyNow ? (
        <BuyNow price={price} link={linkBuyNow}>
          {account ? (
            <ButtonPlaylist
              handleSubmitFavorite={handleSubmitFavorite}
              handleSubmitUnFavorite={handleSubmitUnFavorite}
              inFavorite={isFavorite}
              account={account}
              artworkId={artworkId}
            />
          ) : null}
        </BuyNow>
      ) : statesArt === STATUS_VALUES.none ? (
        <Offer link={linkOffer}>
          {account ? (
            <ButtonPlaylist
              handleSubmitFavorite={handleSubmitFavorite}
              handleSubmitUnFavorite={handleSubmitUnFavorite}
              inFavorite={isFavorite}
              account={account}
              artworkId={artworkId}
            />
          ) : null}
        </Offer>
      ) : statesArt !== 'creator' ? (
        <Exhibition link={linkExhibition} />
      ) : null}
    </>
  )
}

export default FooterCardItem
