import React from 'react'

import BidArt from './BidArt'
import BuyNow from './BuyNow'
import OfferArt from './OfferArt'

const CardAuction = ({
  assetContractAddress,
  assetTokenId,
  status,
  ownerAddress,
  ownerImageUrl,
  ownerUsername,
  creatorAddress,
  priceEth,
  priceUsd,
  expiration,
  biddingLink,
}) => {
  return status === 'buy_now' ? (
    <BuyNow
      creatorAddress={creatorAddress}
      assetContractAddress={assetContractAddress}
      assetTokenId={assetTokenId}
      priceEth={priceEth}
      priceUsd={priceUsd}
      link={biddingLink}
      ownerAddress={ownerAddress}
      ownerImageUrl={ownerImageUrl}
      ownerUsername={ownerUsername}
    />
  ) : status === 'on_auction' ? (
    <BidArt
      assetContractAddress={assetContractAddress}
      assetTokenId={assetTokenId}
      priceEth={priceEth}
      priceUsd={priceUsd}
      link={biddingLink}
      ownerAddress={ownerAddress}
      ownerImageUrl={ownerImageUrl}
      ownerUsername={ownerUsername}
    />
  ) : status === 'none' ? (
    <OfferArt
      assetContractAddress={assetContractAddress}
      assetTokenId={assetTokenId}
      priceEth={priceEth}
      priceUsd={priceUsd}
      ownerAddress={ownerAddress}
      ownerImageUrl={ownerImageUrl}
      ownerUsername={ownerUsername}
    />
  ) : null
}

export default CardAuction
