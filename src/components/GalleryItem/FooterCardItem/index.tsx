import React from 'react'

import InAuctions from './InAuctions'
import BuyNow from './BuyNow'
import ButtonPlaylist from './ButtonPlaylist'
import Offer from './Offer'

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
}) => {
  return (
    <>
      {statesArt === 'on_auction' ? (
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
      ) : statesArt === 'buy_now' ? (
        <BuyNow price={price}>
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
      ) : statesArt === 'none' ? (
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
      ) : (
        ''
      )}
    </>
  )
}

export default FooterCardItem
