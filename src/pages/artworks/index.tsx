import React from 'react'
import { Grid } from '@material-ui/core'

import Layout from '../../components/Layout'
import GridArtworks from '../../components/Artworks'

const ArtworksPage = () => {
  return (
    <Layout padding="20px" marginTop="0">
      <Grid item xs={11} md={12}>
        <GridArtworks />
      </Grid>
    </Layout>
  )
}

export default ArtworksPage
