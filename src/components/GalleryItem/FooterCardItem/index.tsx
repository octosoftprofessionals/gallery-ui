import React from 'react'

import InAuctions from './InAuctions'
import Reserve from './Reserve'
import Sold from './Sold'
import ButtonPlaylist from './ButtonPlaylist'

const FooterCardItem = ({
  statesArt,
  price,
  timer,
  handleSubmitPlaylist,
  handleSubmitFavorite,
  account,
}) => {
  return (
    <>
      {statesArt === 'listed' ? (
        <InAuctions price={price} timer={timer}>
          {account ? (
            <ButtonPlaylist
              handleSubmitPlaylist={handleSubmitPlaylist}
              handleSubmitFavorite={handleSubmitFavorite}
            />
          ) : null}
        </InAuctions>
      ) : statesArt === 'reserve' ? (
        <Reserve price={price}>
          {account ? (
            <ButtonPlaylist
              handleSubmitPlaylist={handleSubmitPlaylist}
              handleSubmitFavorite={handleSubmitFavorite}
            />
          ) : null}
        </Reserve>
      ) : statesArt === 'sold' ? (
        <Sold price={price}>
          {account ? (
            <ButtonPlaylist
              handleSubmitPlaylist={handleSubmitPlaylist}
              handleSubmitFavorite={handleSubmitFavorite}
            />
          ) : null}
        </Sold>
      ) : (
        ''
      )}
    </>
  )
}

export default FooterCardItem
