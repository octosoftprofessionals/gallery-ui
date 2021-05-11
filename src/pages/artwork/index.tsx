import React from 'react'

import ArtworkShow from '../../components/ArtworkShow'
import Layout from '../../components/Layout/Layout'
import { useQuery } from 'react-query'
import { getArtwork } from '../../services/autionsService'

import { colors } from '../../components/Styles/Colors'

import iconEtherscan from '../../assets/etherscan-logo-circle.png'
import iconView from '../../assets/view.png'
import iconBlock from '../../assets/block.png'

const imgUrl =
  'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg'
const title = 'unnamed'
const artist = 'jandali'
const descriptionParagraphs = [
  'This is the real deal.',
  'Created by fire and light, it showcases the power of all unknown mysteries witheld.',
  'The night is come, but not too soon;\nAnd sinking silently,\nAll silently, the little moon\nDrops down behind the sky.\nThere is no light in earth or heaven\nBut the cold light of stars;\nAnd the first watch of night is given\nTo the red planet Mars.',
]
const value = '50.00 ETH'
const valueMoney = '$5,345.585'

const endingInArt = [
  '2021/06/19 11:43:00 AM',
  '2021/04/17 11:43:00 PM',
  '2021/08/18 01:13:30 PM',
  '2021/07/26 11:39:50 AM',
]

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

// ArtworkCreator Param:
const descriptionCreator =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '

const randEndingInArt = () => {
  const endingIn = endingInArt[Math.floor(Math.random() * endingInArt.length)]
  return new Date(endingIn)
}

//const linkProfile = `http://localhost:8000/${artist}` // creatorButtom param

const ShowArtwork = () => {
  const IdArtwork = new URLSearchParams(location.search)
  const { data: artworkQuery } = useQuery('artworkQuery', () =>
    getArtwork(IdArtwork.values().next().value)
  )

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
        />
      ) : (
        ''
      )}
    </Layout>
  )
}

export default ShowArtwork
