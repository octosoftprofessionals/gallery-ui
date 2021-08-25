import React from 'react'

import InAuctions from './InAuctions'
import Reserve from './Reserve'
import Sold from './Sold'
import ButtonPlaylist from './ButtonPlaylist'
import { ArrayPlaylist } from '../../../types'

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
  playlists,
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
  playlists: ArrayPlaylist
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
              account={account}
              playlists={playlists}
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
              account={account}
              playlists={playlists}
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
              account={account}
              playlists={playlists}
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
