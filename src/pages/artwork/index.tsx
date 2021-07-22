import React, { useState } from 'react'

import ArtworkShow from '../../components/ArtworkShow'
import Layout from '../../components/Layout'
import { useQuery } from 'react-query'

import { galleryItemQuery } from '../../services/gallery'
import useQueryParams from '../../hooks/useQueryParams'
import Spinner from '../../components/Spinner'

// ArtworkView params:
const artworkLinks = [
  {
    link: 'https://etherscan.io/',
    text: 'View on Etherscan',
    icon: 'iconEtherscan',
  },
  {
    link: 'https://ipfs.io/',
    text: 'View on IPFS',
    icon: 'iconView',
  },
  { link: 'https://ipfs.io/', text: 'View IPFS Metadata', icon: 'iconBlock' },
]

const linkShareTwitter = () => {
  const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''

  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

// ArtworkCreator Param:
const creatorDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '

//const linkProfile = `http://localhost:8000/${artist}` // creatorButtom param

const ShowArtwork = () => {
  const { contractAddress, tokenId } = useQueryParams()
  const { data: galleryItem, status } = useQuery('artworkQuery', () =>
    galleryItemQuery(contractAddress, tokenId)
  )
  const isLoading = status === 'loading'

  const [displayReportModal, setDisplayReportModal] = useState(false)

  return (
    <Layout padding="0" marginBottom="0" marginTop="24px">
      {galleryItem && !isLoading ? (
        <ArtworkShow
          galleryItem={galleryItem}
          artworkLinks={artworkLinks}
          linkTwitter={linkShareTwitter()}
          setDisplayReportModal={setDisplayReportModal}
        />
      ) : (
        <Spinner height="60vh" />
      )}
    </Layout>
  )
}

export default ShowArtwork
