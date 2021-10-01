import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import { GalleryItem } from '../../types'

import HeroDisplay from './HeroDisplay'
import HeroInfo from './HeroInfo'

const useStyle = makeStyles(Theme => ({
  root: {
    flex: 1,
    margin: Theme.spacing(11, 0),
    '@media (max-width: 576px)': {
      marginTop: '0px',
    },
  },
}))

const HeroArtwork = ({ galleryItem }: { galleryItem: GalleryItem }) => {
  const { imageUrl, videoUrl } = galleryItem

  const classes = useStyle()

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} md={9} container justify="space-around">
          <HeroDisplay imageUrl={imageUrl} videoUrl={videoUrl} />
          <HeroInfo galleryItem={galleryItem} />
        </Grid>
      </Grid>
    </div>
  )
}

export default HeroArtwork
