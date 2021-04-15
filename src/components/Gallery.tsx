import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import GalleryItem from './GalleryItem'

const useStyle = makeStyles(Theme => ({
  root: {},
  containerItem: { padding: Theme.spacing(4) },
}))

const Gallery = ({ items }) => {
  const classes = useStyle()
  return (
    <>
      <Grid container direction="row" justify="space-around" wrap="wrap">
        {items.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.containerItem}
          >
            <GalleryItem key={index} {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Gallery
