import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

import Spinner from '../Spinner'
import CarouselPL from './CarouselPL'

import ArtworkInformation from './ArtworkInformation'
import CreatorInfo from '../GalleryItem/ArtworkItem/CreatorInfo'

import { Users } from '../../types'
import { truncateMiddleText } from '../../Utils/stringUtils'

const useStyles = makeStyles(Theme => ({
  containerDescription: { padding: Theme.spacing(9) },
}))

const index = ({
  userAccount,
  relatedArtworks,
  title,
  description,
}: {
  userAccount: Users
  relatedArtworks: any[]
  title: string
  description: string
}) => {
  const classes = useStyles()
  const [imgIndex, setImgIndex] = useState(0)
  const { username, profileImgUrl, publicAddress } = userAccount

  return (
    <Grid item xs={12} container alignItems="center" justify="center">
      <CarouselPL artworks={relatedArtworks} xs={4} setIndex={setImgIndex} />
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
              username={
                username ? username : truncateMiddleText(publicAddress, 8)
              }
              profileImageUrl={profileImgUrl}
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
            <ArtworkInformation
              arryArtwork={relatedArtworks}
              index={imgIndex}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default index
