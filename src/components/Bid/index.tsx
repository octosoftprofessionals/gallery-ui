import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import GalleryItem from '../GalleryItem'
import Bids from './Bids'

const useStyle = makeStyles(Theme => ({
  root: {},
}))

const Bid = ({ galleryItem }) => {
  const classes = useStyle()

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
          {galleryItem ? <GalleryItem itemType="artworks" data={galleryItem} /> : ''}
        </Grid>
        <Grid item xs={12} sm={5}>
          {galleryItem ? (
            <Bids priceEth={galleryItem.priceEth} priceUsd={galleryItem.priceUsd} balance={'0'} />
          ) : (
            ''
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Bid
