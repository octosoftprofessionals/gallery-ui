import React from 'react'
import { useQuery } from 'react-query'

import Layout from '../components/Layout'
import Bid from '../components/Bid'

import useQueryParams from '../hooks/useQueryParams'
import { galleryItemQuery } from '../services/gallery'
import { useMetamaskAccount } from '../atom'
import { getInfoStorage } from '../Utils/getStorage'
import { truncateString } from '../Utils/stringUtils'

const BidPage = () => {
  const { contractAddress, tokenId } = useQueryParams()
  const { data: galleryItem } = useQuery('artworkQuery', () =>
    galleryItemQuery({
      assetContractAddress: contractAddress,
      assetTokenId: tokenId,
    })
  )

  //getting metamask account from the storage
  const metamaskStorage = getInfoStorage('metamask-account')

  const accountAddress = useMetamaskAccount()

  return (
    <Layout
      publicKey={accountAddress}
      name={truncateString(metamaskStorage.acount, 10)}
    >
      <Bid galleryItem={galleryItem} />
    </Layout>
  )
}

export default BidPage
