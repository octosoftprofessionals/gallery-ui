import React, { useState } from 'react'

import ArtworkShow from '../../components/ArtworkShow'
import Layout from '../../components/Layout'
import { useQuery } from 'react-query'

import { galleryItemQuery } from '../../services/gallery'
import useQueryParams from '../../hooks/useQueryParams'
import Spinner from '../../components/Spinner'

const linkShareTwitter = () => {
  const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''

  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

const ShowArtwork = () => {
  const { contractAddress, tokenId } = useQueryParams()
  const { data: galleryItem, isLoading } = useQuery('artworkQuery', () =>
    galleryItemQuery(contractAddress, tokenId)
  )

  const [displayReportModal, setDisplayReportModal] = useState<boolean>(false)

  return (
    <Layout padding="0" marginBottom="0" marginTop="24px">
      {isLoading ? (
        <Spinner height="60vh" />
      ) : (
        <ArtworkShow
          galleryItem={galleryItem}
          linkTwitter={linkShareTwitter()}
          setDisplayReportModal={setDisplayReportModal}
        />
      )}
    </Layout>
  )
}

export default ShowArtwork
