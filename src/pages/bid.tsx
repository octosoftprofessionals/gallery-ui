import React from 'react'
import { useQuery } from 'react-query'

import Layout from '../components/Layout'
import Bid from '../components/Bid'

import useQueryParams from '../hooks/useQueryParams'
import { galleryItemQuery } from '../services/gallery'
import { useAccountStore } from '../hooks/useAccountStore'

const BidPage = () => {
  const { contractAddress, tokenId } = useQueryParams()
  const { data: galleryItem } = useQuery('artworkQuery', () =>
    galleryItemQuery({
      assetContractAddress: contractAddress,
      assetTokenId: tokenId,
    })
  )

  //getting metamask account from the storage
  const metamaskStorage = useAccountStore()

  return (
    <Layout publicKey={metamaskStorage}>
      <Bid galleryItem={galleryItem} />
    </Layout>
  )
}

export default BidPage
