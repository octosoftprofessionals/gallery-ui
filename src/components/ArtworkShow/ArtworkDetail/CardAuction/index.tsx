import React from 'react'

import BuyNow from './BuyNow'

const CardAuction = ({
  status,
  priceEth,
  priceUsd,
  expiration,
  biddingLink,
  ownerAddress,
  ownerImageUrl,
  ownerUsername,
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
  ) : null
}

export default CardAuction
