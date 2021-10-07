import React from 'react'

import { Grid } from '@material-ui/core'

import CardArtwork from '../CardArtwork'
const Display = ({
  image,
  video,
  index,
}: {
  image: string
  video: string
  index: number
}) => {
  return (
    <Grid item xs={7} container justify="center">
      <CardArtwork imageUrl={image} videoUrl={video} key={index} />
    </Grid>
  )
}

export default Display
