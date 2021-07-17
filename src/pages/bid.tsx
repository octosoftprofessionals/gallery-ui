import React from 'react'
import { useQuery } from 'react-query'

import Layout from '../components/Layout'
import Bid from '../components/Bid'

import useQueryParams from '../hooks/useQueryParams'
import { galleryItemQuery } from '../services/gallery'
import { useMetamaskAccount } from '../atom'

const BidPage = () => {
  const { contractAddress, tokenId } = useQueryParams()
  const { data: galleryItem } = useQuery('artworkQuery', () =>
    galleryItemQuery({
      assetContractAddress: contractAddress,
      assetTokenId: tokenId,
    })
  )
  const accountAddress = useMetamaskAccount()

  return (
    <Layout
      publicKey={accountAddress}
      profileImageUrl="https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png"
      name="Roger"
    >
      <Bid galleryItem={galleryItem} />
    </Layout>
  )
}

export default BidPage
