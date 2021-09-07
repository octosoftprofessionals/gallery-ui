import React from 'react'

import AuctionItem from './AuctionItem'
import SoldItem from './SoldItem'

const CardAuction = ({ auctionState, priceEth, priceUsd, expiration, biddingLink }) => {
  return auctionState ? (
    <AuctionItem priceEth={priceEth} priceUsd={priceUsd} expiration={expiration} link={biddingLink} />
  ) : (
    <SoldItem />
  )
}

export default CardAuction
