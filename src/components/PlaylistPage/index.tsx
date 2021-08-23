import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

import Spinner from '../Spinner'
import CarouselPL from './CarouselPL'

import ArtworkInformation from './ArtworkInformation'
import CreatorInfo from '../GalleryItem/ArtworkItem/CreatorInfo'

const useStyles = makeStyles(Theme => ({
  containerDescription: { padding: Theme.spacing(9) },
}))

const index = ({ Itemss, title, description }) => {
  const classes = useStyles()
  const [imgIndex, setImgIndex] = useState(0)

  return (
    <Grid item xs={12} container alignItems="center" justify="center">
      <CarouselPL artworks={Itemss} xs={4} setIndex={setImgIndex} />
      <Grid
        item
        xs={12}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid container justify="space-around">
          <Grid item xs={5} container direction="column">
            <Typography variant="h4">{title}</Typography>
            <CreatorInfo
              username="RogerBC"
              imageUrl={
                'https://f8n-production.imgix.net/creators/profile/c8gley51s-nyan-cat-large-gif-gif-mbf1sa.gif'
              }
            />
          </Grid>
          <Grid item xs={4}>
            <Button>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
              >
                <EditIcon />
                <Typography variant="caption">Edit your playlist</Typography>
              </Grid>
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="space-around" direction="row">
          <Grid item xs={5}>
            <Typography variant="h5"> Description</Typography>
            <Paper className={classes.containerDescription}>
              {description}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">Artwork Information</Typography>
            <ArtworkInformation arryArtwork={Itemss} index={imgIndex} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default index
