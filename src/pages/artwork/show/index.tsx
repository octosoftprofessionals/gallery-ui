import React, { useState } from 'react'

import ArtworkShow from '../../../components/ArtworkShow'
import Layout from '../../../components/Layout/Layout'
import { useQuery } from 'react-query'
import { getArtwork } from '../../../services/autionsService'

import { colors } from '../../../components/Styles/Colors'

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

const linkShareTwitter = () => {
  const SITE_URL = window.location.href
  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

const randEndingInArt = () => {
  const endingIn = endingInArt[Math.floor(Math.random() * endingInArt.length)]
  return new Date(endingIn)
}

//const linkProfile = `http://localhost:8000/${artist}` // creatorButtom param

const ShowArtwork = () => {
  const artworkQuery = useQuery('artwork', () =>
    getArtwork('use_id_from_navigation')
  )
  const [displayReportModal, setDisplayReportModal] = useState(false)
  return (
    <Layout backgroundColor={colors.WhiteSmoke} padding="0" marginBottom="0">
      <ArtworkShow
        imgUrl={imgUrl}
        name={artist}
        titleArt={title}
        description={descriptionParagraphs}
        namber={'1'}
        price={value}
        money={valueMoney}
        linkProfile={'/'}
        endingIn={randEndingInArt()}
        linkTwitter={linkShareTwitter()}
        setDisplayReportModal={setDisplayReportModal}
      />
    </Layout>
  )
}

export default ShowArtwork