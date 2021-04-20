import React from 'react'

import InAuctions from './InAuctions'
import Reserve from './Reserve'
import Sold from './Sold'
import Creators from './Creators'

const FooterCardItem = ({ price, followers, timer, statesArt, link }) => {
  return (
    <>
      {statesArt === 'auction' ? (
        <InAuctions price={price} timer={timer} />
      ) : statesArt === 'reserve' ? (
        <Reserve price={price} />
      ) : statesArt === 'sold' ? (
        <Sold price={price} />
      ) : (
        <Creators followers={followers} link={link} />
      )}
    </>
  )
}

export default FooterCardItem
