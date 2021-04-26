import React from 'react'
import AuctionItem from './AuctionItem'
import SoldItem from './SoldItem'

const CardAuction = ({ auctionState, price, money, endingIn, link }) => {
  return auctionState ? (
    <AuctionItem price={price} money={money} endingIn={endingIn} link={link} />
  ) : (
    <SoldItem />
  )
}

export default CardAuction
