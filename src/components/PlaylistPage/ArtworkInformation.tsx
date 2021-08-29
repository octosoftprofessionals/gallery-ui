import React from 'react'

import { Button, Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import CardArtwork from './CardArtwork'
import { formatDecimal } from '../../Utils'
import { artworkPathFrom } from '../../config/routes'

import { GalleryItem } from '../../types'

const useStyle = makeStyles(Theme => ({
  containerTitle: { paddingBottom: Theme.spacing(4) },
  text: { marginRight: '1rem' },
  button: { margin: Theme.spacing(4) },
}))

const ArtworkInformation = ({
  arryArtwork,
  index,
}: {
  arryArtwork: GalleryItem[]
  index: number
}) => {
  const {
    assetTokenId,
    assetContractAddress,
    imagePreviewUrl,
    ownerUsername,
    creatorUsername,
    videoUrl,
    title,
    priceEth,
  } = arryArtwork[index]
  const classes = useStyle()
  const artworkPath = artworkPathFrom(assetContractAddress, assetTokenId)

  return (
    <Paper>
      <Grid container alignContent="center" justify="center">
        <Grid item xs={7} container justify="center">
          <CardArtwork
            imageUrl={imagePreviewUrl}
            videoUrl={videoUrl}
            key={index}
          />
        </Grid>

        <Grid
          item
          xs={12}
          container
          justify="center"
          className={classes.containerTitle}
        >
          <Typography>{`${title} [${index + 1} - ${
            arryArtwork.length
          }]`}</Typography>
        </Grid>
        <Grid item xs={7} container alignItems="flex-start" direction="column">
          <Grid container direction="row" justify="flex-start">
            <Typography className={classes.text}>Artist:</Typography>
            <Typography variant="caption">{`@${creatorUsername}`}</Typography>
          </Grid>
          <Grid container direction="row" justify="flex-start">
            <Typography className={classes.text}>Current Owner:</Typography>
            <Typography variant="caption">{`@${ownerUsername}`}</Typography>
          </Grid>
          <Grid container direction="row" justify="flex-start">
            <Typography className={classes.text}>Last Price:</Typography>
            <Typography variant="caption">
              {isNaN(parseInt(priceEth))
                ? '\t —'
                : `\t${formatDecimal(priceEth)} ETH`}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={9} container justify="flex-end">
          <Button
            variant="outlined"
            href={artworkPath}
            className={classes.button}
          >
            <Typography variant="caption">More</Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ArtworkInformation
