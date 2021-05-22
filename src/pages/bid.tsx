import React from 'react'
import { useQuery } from 'react-query'

import Layout from '../components/Layout'
import Bid from '../components/Bid'

import { getHeroArtwork } from '../services/autionsService'

const BidPage = () => {
  const {
    data: auctionArtworkQuery,
    status: statusAuctionArtworkQuery,
  } = useQuery('AuctionArtworkQuery', getHeroArtwork)

  return (
    <Layout
      cois="0.2222"
      publicKey="0x834fas75fsha87hf38kuk4758"
      profileImageUrl="https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png"
      name="Roger"
    >
      <Bid CardArtwork={auctionArtworkQuery} />
    </Layout>
  )
}

export default BidPage