import React, { useState } from 'react'

import ArtworkShow from '../../components/ArtworkShow'
import Layout from '../../components/Layout/Layout'
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
  const SITE_URL = window.location.href
  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

// ArtworkCreator Param:
const descriptionCreator =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '

const ShowArtwork = () => {
  const IdArtwork = new URLSearchParams(location.search)
  const { data: artworkQuery } = useQuery('artworkQuery', () =>
    getArtwork(IdArtwork.values().next().value)
  )

  const [displayReportModal, setDisplayReportModal] = useState(false)

  return (
    <Layout
      backgroundColor={colors.WhiteSmoke}
      padding="0"
      marginBottom="0"
      marginTop="0"
    >
      {artworkQuery ? (
        <ArtworkShow
          artwork={artworkQuery.artwork}
          artworkLinks={artworkLinks}
          descriptionCreator={descriptionCreator}
          linkTwitter={linkShareTwitter()}
          setDisplayReportModal={setDisplayReportModal}
        />
      ) : (
        ''
      )}
    </Layout>
  )
}

export default ShowArtwork
