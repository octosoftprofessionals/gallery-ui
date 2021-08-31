import React from 'react'

import InAuctions from './InAuctions'
import BuyNow from './BuyNow'
import ButtonPlaylist from './ButtonPlaylist'
import Offer from './Offer'

const FooterCardItem = ({
  statesArt,
  price,
  timer,
  handleSubmitPlaylist,
  handleSubmitFavorite,
  handleSubmitUnFavorite,
  handleSubmitUnPlaylist,
  isFavorite,
  account,
  artworkId,
  linkOffer,
}: {
  statesArt: string
  price?: string
  timer?: string
  handleSubmitPlaylist: Function
  handleSubmitFavorite: Function
  handleSubmitUnFavorite: Function
  handleSubmitUnPlaylist: Function
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
              handleSubmitPlaylist={handleSubmitPlaylist}
              handleSubmitFavorite={handleSubmitFavorite}
              handleSubmitUnFavorite={handleSubmitUnFavorite}
              handleSubmitUnPlaylist={handleSubmitUnPlaylist}
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
              handleSubmitPlaylist={handleSubmitPlaylist}
              handleSubmitFavorite={handleSubmitFavorite}
              handleSubmitUnFavorite={handleSubmitUnFavorite}
              handleSubmitUnPlaylist={handleSubmitUnPlaylist}
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
              handleSubmitPlaylist={handleSubmitPlaylist}
              handleSubmitFavorite={handleSubmitFavorite}
              handleSubmitUnFavorite={handleSubmitUnFavorite}
              handleSubmitUnPlaylist={handleSubmitUnPlaylist}
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
