import React from 'react'
import { useQuery } from 'react-query'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ArtworkItem from '../../../components/GalleryItem/ArtworkItem'
import { GalleryItem } from '../../../services/gallery'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
}))

const Gallery = ({ type, queryName, queryFunction }: { type: string, queryName: string, queryFunction: () => Promise<GalleryItem[]> }) => {
  const { data: galleryItems = [] } = useQuery(queryName, queryFunction)
  const classes = useStyle()
  return (
    <Grid container direction="row" justify="space-between" wrap="wrap">
      {galleryItems
        ? galleryItems.map((galleryItem, index) => (
            <Grid item xs={12} sm={6} md={5} className={classes.containerItem}>
              <ArtworkItem
                key={index}
                galleryItem={galleryItem}
              />
            </Grid>
          ))
        : ''}
    </Grid>
  )
}

export default Gallery
