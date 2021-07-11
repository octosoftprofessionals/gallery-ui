import React, { useState } from 'react'
import queryString from 'query-string'

import ArtworkShow from '../../components/ArtworkShow'
import Layout from '../../components/Layout'
import { useQuery } from 'react-query'
import { getArtwork } from '../../services/autionsService'

import { colors } from '../../components/Styles/Colors'

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

const historyInfo = [
  {
    action: 'Bid placed',
    date: 'May 10, 2021 at 1:50pm',
    name: 'name',
    imgUrl:
      'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
    price: '3.025',
    money: '24.005',
    link: 'https://etherscan.io/',
  },
  {
    action: 'Listed',
    date: 'May 10, 2021 at 1:50pm',
    name: 'name',
    imgUrl:
      'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
    price: '3.025',
    money: '24.005',
    link: 'https://etherscan.io/',
  },
  {
    action: 'Minted',
    date: 'May 10, 2021 at 1:50pm',
    name: 'name',
    imgUrl:
      'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
    price: '',
    money: '',
    link: 'https://etherscan.io/',
  },
]

//const linkProfile = `http://localhost:8000/${artist}` // creatorButtom param

const ShowArtwork = () => {
  const { contractAddress, tokenId } = useQueryParams()
  const { data: galleryItem, status } = useQuery('artworkQuery', () =>
    galleryItemQuery({
      assetContractAddress: contractAddress,
      assetTokenId: tokenId,
    })
  )
  const isLoading = status === 'loading'
  console.log('ShowArtwork loading:', isLoading)

  const [displayReportModal, setDisplayReportModal] = useState(false)

  return (
    <Layout
      backgroundColor={colors.WhiteSmoke}
      padding="0"
      marginBottom="0"
      marginTop="24px"
    >
      {galleryItem && !isLoading ? (
        <ArtworkShow
          galleryItem={galleryItem}
          artworkLinks={artworkLinks}
          creatorDescription={creatorDescription}
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
