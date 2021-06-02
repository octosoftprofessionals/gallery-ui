import React, { useState } from 'react'

import ArtworkShow from '../../components/ArtworkShow'
import Layout from '../../components/Layout'
import { useQuery } from 'react-query'
import { getArtwork } from '../../services/autionsService'

import { colors } from '../../components/Styles/Colors'

import iconEtherscan from '../../assets/etherscan-logo-circle.png'
import iconView from '../../assets/view.png'
import iconBlock from '../../assets/block.png'

// ArtworkView params:
const artworkLinks = [
  {
    link: 'https://etherscan.io/',
    text: 'View on Etherscan',
    icon: iconEtherscan,
  },
  { link: 'https://ipfs.io/', text: 'View on IPFS', icon: iconView },
  { link: 'https://ipfs.io/', text: 'View IPFS Metadata', icon: iconBlock },
]

const linkShareTwitter = () => {
  const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''

  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

// ArtworkCreator Param:
const descriptionCreator =
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
  const search = typeof window !== 'undefined' ? window.location.search : ''
  const IdArtwork = new URLSearchParams(search)
  const { data: artworkQuery } = useQuery('artworkQuery', () =>
    getArtwork(IdArtwork.values().next().value)
  )

  const [displayReportModal, setDisplayReportModal] = useState(false)

  return (
    <Layout
      backgroundColor={colors.WhiteSmoke}
      padding="0"
      marginBottom="0"
      marginTop="24px"
    >
      {artworkQuery ? (
        <ArtworkShow
          artwork={artworkQuery.artwork}
          artworkLinks={artworkLinks}
          descriptionCreator={descriptionCreator}
          linkTwitter={linkShareTwitter()}
          setDisplayReportModal={setDisplayReportModal}
          historyInfo={historyInfo}
        />
      ) : (
        ''
      )}
    </Layout>
  )
}

export default ShowArtwork
