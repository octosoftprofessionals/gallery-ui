import React from 'react'

import InAuctions from './InAuctions'
import Reserve from './Reserve'
import Sold from './Sold'
import Creators from './Creators'

const FooterCardItem = ({ statesArt, price, timer }) => {
  return (
    <>
      {statesArt === 'listed' ? (
        <InAuctions price={price} timer={timer} />
      ) : statesArt === 'reserve' ? (
        <Reserve price={price} />
      ) : statesArt === 'sold' ? (
        <Sold price={price} />
      ) : ''}
    </>
  )
}

export default FooterCardItem
