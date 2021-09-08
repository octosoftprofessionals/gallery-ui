import React from 'react'

import BidArt from './BidArt'
import BuyNow from './BuyNow'

const CardAuction = ({
  status,
  ownerAddress,
  ownerImageUrl,
  ownerUsername,
  priceEth,
  priceUsd,
  expiration,
  biddingLink,
}) => {
  return status === 'buy_now' ? (
    <BuyNow
      priceEth={priceEth}
      priceUsd={priceUsd}
      link={biddingLink}
      ownerAddress={ownerAddress}
      ownerImageUrl={ownerImageUrl}
      ownerUsername={ownerUsername}
    />
  ) : status === 'bid' ? (
    <BidArt
      priceEth={priceEth}
      priceUsd={priceUsd}
      link={biddingLink}
      ownerAddress={ownerAddress}
      ownerImageUrl={ownerImageUrl}
      ownerUsername={ownerUsername}
    />
  ) : null
}

export default CardAuction