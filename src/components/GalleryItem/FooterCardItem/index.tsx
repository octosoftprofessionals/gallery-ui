import React from 'react'

import InAuctions from './InAuctions'
import Reserve from './Reserve'
import Sold from './Sold'
import ButtonPlaylist from './ButtonPlaylist'

const FooterCardItem = ({ statesArt, price, timer }) => {
  return (
    <>
      {statesArt === 'listed' ? (
        <InAuctions price={price} timer={timer}>
          <ButtonPlaylist />
        </InAuctions>
      ) : statesArt === 'reserve' ? (
        <Reserve price={price}>
          <ButtonPlaylist />
        </Reserve>
      ) : statesArt === 'sold' ? (
        <Sold price={price}>
          <ButtonPlaylist />
        </Sold>
      ) : (
        ''
      )}
    </>
  )
}

export default FooterCardItem
