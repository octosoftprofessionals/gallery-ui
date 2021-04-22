import React from 'react'
import AuctionItem from './AuctionItem'
import SoldItem from './SoldItem'

const CardAuction = ({ auctionState }) => {
  return auctionState ? <AuctionItem /> : <SoldItem />
}

export default CardAuction
