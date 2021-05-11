import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import GalleryItem from '../../GalleryItem'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
}))

const Gallery = ({ artworksQuery, itemType }) => {
  const { artworks } = artworksQuery ? artworksQuery : []
  const classes = useStyle()
  return (
    <Grid container direction="row" justify="space-between" wrap="wrap">
      {artworks
        ? artworks.map((artwork, index) => (
            <Grid item xs={12} sm={6} md={5} className={classes.containerItem}>
              <GalleryItem
                key={index}
                itemType={itemType}
                artwork={artwork}
                link={`/artwork?id=${artwork.id}`}
              />
            </Grid>
          ))
        : ''}
    </Grid>
  )
}

export default Gallery
