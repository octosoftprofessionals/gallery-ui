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
  containerInfo: {
    position: 'relative',
    '@media (max-width: 576px)': {
      marginTop: '15vh',
    },
  },
}))

const HeroAuction = ({
  galleryItem = {},
  isLoading,
}: {
  galleryItem: GalleryItem
  isLoading: boolean
}) => {
  const { imageUrl, videoUrl } = galleryItem

  const classes = useStyle()

  console.log('galleryItem :>> ', galleryItem)
  return (
    <div className={classes.root}>
      {galleryItem ? (
        <Grid container justify="center" alignItems="center">
          <Grid
            item
            xs={12}
            md={9}
            container
            justify="space-around"
            alignItems="center"
          >
            <HeroDisplay imageUrl={imageUrl} videoUrl={videoUrl} />

            <HeroInfo galleryItem={galleryItem} isLoading={isLoading} />
          </Grid>
        </Grid>
      ) : null}
    </div>
  )
}

export default HeroAuction
