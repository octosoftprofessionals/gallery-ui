import React from 'react'

import InAuctions from './InAuctions'
import Reserve from './Reserve'
import Sold from './Sold'

const FooterCardItem = ({ price, timer, statesArt }) => {
  return (
    <>
      {statesArt === 'auction' ? (
        <InAuctions price={price} timer={timer} />
      ) : statesArt === 'reserve' ? (
        <Reserve price={price} />
      ) : (
        <Sold price={price} />
      )}
    </>
  )
}

export default FooterCardItem
