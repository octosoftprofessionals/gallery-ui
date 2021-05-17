import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import GalleryItem from '../../GalleryItem'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
}))

const GalleryArtworks = ({ artworksQuery, itemType, statesArt }) => {
  const { artworks } = artworksQuery ? artworksQuery : []
  const classes = useStyle()
  return (
    <Grid container direction="row" justify="space-between" wrap="wrap">
      {artworks
        ? artworks.map((artwork, index) => {
            if (artwork.assetStatus === statesArt) {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  className={classes.containerItem}
                >
                  <GalleryItem
                    key={index}
                    itemType={itemType}
                    artwork={artwork}
                    link={`/artwork?id=${artwork.id}`}
                  />
                </Grid>
              )
            }
          })
        : ''}
    </Grid>
  )
}

export default GalleryArtworks
