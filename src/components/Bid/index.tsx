import React from 'react'

import { Grid } from '@material-ui/core'

import GalleryItem from '../GalleryItem'
import Bids from './Bids'

const Bid = ({ galleryItem }) => {
  const { priceEth } = galleryItem ?? {}

  return (
    <Grid container justify="center">
      <Grid
        item
        xs={8}
        sm={8}
        md={8}
        container
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12} sm={8} md={5}>
          {galleryItem ? (
            <GalleryItem itemType="artworks" data={galleryItem} />
          ) : (
            ''
          )}
        </Grid>
        <Grid item xs={12} sm={8} md={5} style={{ marginTop: 40 }}>
          {galleryItem ? (
            <Bids
              assetContractAddress={galleryItem?.assetContractAddress}
              assetTokenId={galleryItem?.assetTokenId}
              priceEth={galleryItem.priceEth}
              priceUsd={galleryItem.priceUsd}
              currentMaxBid={priceEth}
            />
          ) : (
            ''
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Bid
