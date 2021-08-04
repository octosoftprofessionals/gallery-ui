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
  handleSubmitUnFavorite,
  handleSubmitUnPlaylist,
  isFavorite,
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
              handleSubmitUnFavorite={handleSubmitUnFavorite}
              handleSubmitUnPlaylist={handleSubmitUnPlaylist}
              inFavorite={isFavorite}
            />
          ) : null}
        </InAuctions>
      ) : statesArt === 'reserve' ? (
        <Reserve price={price}>
          {account ? (
            <ButtonPlaylist
              handleSubmitPlaylist={handleSubmitPlaylist}
              handleSubmitFavorite={handleSubmitFavorite}
              handleSubmitUnFavorite={handleSubmitUnFavorite}
              handleSubmitUnPlaylist={handleSubmitUnPlaylist}
              inFavorite={isFavorite}
            />
          ) : null}
        </Reserve>
      ) : statesArt === 'sold' ? (
        <Sold price={price}>
          {account ? (
            <ButtonPlaylist
              handleSubmitPlaylist={handleSubmitPlaylist}
              handleSubmitFavorite={handleSubmitFavorite}
              handleSubmitUnFavorite={handleSubmitUnFavorite}
              handleSubmitUnPlaylist={handleSubmitUnPlaylist}
              inFavorite={isFavorite}
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
