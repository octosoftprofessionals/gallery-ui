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
  artworkId,
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
  playlists: ArrayPlaylist[]
  artworkId: number
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
              playlists={playlists}
              artworkId={artworkId}
            />
          ) : null}
        </InAuctions>
      ) : statesArt === 'buy_now' ? (
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
              artworkId={artworkId}
            />
          ) : null}
        </Reserve>
      ) : statesArt === 'none' ? (
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
              artworkId={artworkId}
            />
          ) : null}
        </InAuctions>
      ) : (
        ''
      )}
    </>
  )
}

export default FooterCardItem
