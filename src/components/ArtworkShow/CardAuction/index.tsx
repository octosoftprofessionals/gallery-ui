import React from 'react'
import AuctionItem from './AuctionItem'
import SoldItem from './SoldItem'

const CardAuction = ({ auctionState, price, money, endingIn }) => {
  return auctionState ? (
    <AuctionItem price={price} money={money} endingIn={endingIn} />
  ) : (
    <SoldItem />
  )
}

export default CardAuction
