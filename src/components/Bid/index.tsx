import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import GalleryItem from '../GalleryItem'
import Bids from './Bids'

const useStyle = makeStyles(Theme => ({
  root: {},
}))

const Bid = ({ CardArtwork }) => {
  const classes = useStyle()
  const { artwork } = CardArtwork ? CardArtwork : ''

  return (
    <Grid container justify="center">
      <Grid
        item
        xs={12}
        sm={8}
        container
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12} sm={4}>
          {artwork ? <GalleryItem itemType="artworks" artwork={artwork} /> : ''}
        </Grid>
        <Grid item xs={12} sm={5}>
          {artwork ? (
            <Bids price={artwork.price} money={'23,234.54'} balance={'0'} />
          ) : (
            ''
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Bid
