import React from 'react'
import { Grid } from '@material-ui/core'
import GridArtworks from './GridArtworks'

const Artworks = () => {
  return (
    <Grid item xs={11} md={12}>
      <GridArtworks />
    </Grid>
  )
}

export default Artworks
