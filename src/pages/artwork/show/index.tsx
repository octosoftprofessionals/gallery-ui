import React from 'react'

import ArtworkShow from '../../../components/ArtworkShow'
import Layout from '../../../components/Layout/Layout'

import { colors } from '../../../components/Styles/Colors'

import iconEtherscan from '../../../assets/etherscan-logo-circle.png'
import iconView from '../../../assets/view.png'
import iconBlock from '../../../assets/block.png'

const imgUrl =
  'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg'
const videoUrl = 'http://localhost:8000/float.mp4'
const title = 'unnamed'
const artist = '@jandali'
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
  {link:'https://etherscan.io/', text:'View on Etherscan', icon:iconEtherscan},
  {link:'https://ipfs.io/', text:'View on IPFS', icon: iconView},
  {link:'https://ipfs.io/', text:'View IPFS Metadata', icon: iconBlock},
]

const randEndingInArt = () => {
  const endingIn = endingInArt[Math.floor(Math.random() * endingInArt.length)]
  return new Date(endingIn)
}

// params: { imgUrl, videoUrl, title, artist, descriptionParagraphs, value }
const ShowArtwork = () => {
  return (
    <Layout
      backgroundColor={colors.WhiteSmoke}
      padding="0"
      marginBottom="0"
      marginTop="0"
    >
      <ArtworkShow
        imgUrl={imgUrl}
        videoUrl={videoUrl}
        titleArt={title}
        description={descriptionParagraphs}
        namber={'1'}
        price={value}
        money={valueMoney}
        endingIn={randEndingInArt()}
        artworkLinks={artworkLinks}
      />
    </Layout>
  )
}

export default ShowArtwork
