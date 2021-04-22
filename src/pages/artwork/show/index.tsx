import React from 'react'
import { Grid } from '@material-ui/core'

import ArtworkDisplay from '../../../components/ArtworkDisplay'
import Layout from '../../../components/Layout/Layout'
import MoreItems from '../../../components/MoreItems'
import SmartDescription from '../../../components/SmartDescription'

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

// params: { imgUrl, videoUrl, title, artist, descriptionParagraphs, value }
const ShowArtwork = () => {
  return (
    <Layout>
      <ArtworkDisplay imgUrl={imgUrl} videoUrl={videoUrl} />
    </Layout>
  )
}

export default ShowArtwork
