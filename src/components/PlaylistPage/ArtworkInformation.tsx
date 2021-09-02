import React from 'react'

import { Button, Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import CardArtwork from './CardArtwork'
import { formatDecimal } from '../../Utils'
import { artworkPathFrom } from '../../config/routes'

import { GalleryItem } from '../../types'

const useStyle = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(9, 12),
    marginTop: Theme.spacing(9),
    backgroundColor: Theme.palette.background.paper,
    '&:hover': {
      borderShadow: 'none',
      transform: 'none',
      translate: 'none',
      border: 'none',
    },
  },
  containerTitle: { paddingBottom: Theme.spacing(4) },
  text: { marginRight: '1rem' },
  button: {
    margin: Theme.spacing(4),
    fontSize: Theme.typography.fontSize[3],
    borderRadius: Theme.spacing(7),
    textTransform: 'none',
    backgroundColor: Theme.palette.buttons.selected,
    '@media (max-width: 576px)': {
      margin: Theme.spacing(3, 0),
      padding: Theme.spacing(3),
    },
  },
  textBtn: {
    color: Theme.palette.primary.contrastText,
  },
  orderText: {
    color: Theme.palette.primary.dark,
  },
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
    <Paper className={classes.root}>
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
          direction="column"
          justify="center"
          alignContent="center"
          className={classes.containerTitle}
        >
          <Typography align="center" color="primary" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="primary"
            className={classes.orderText}
            align="center"
          >{`${index + 1} - ${arryArtwork.length}`}</Typography>
        </Grid>
        <Grid item xs={12} container alignItems="flex-start" direction="column">
          <Grid container direction="row" justify="flex-start">
            <Typography variant="h6" color="primary" className={classes.text}>
              Artist:
            </Typography>
            <Typography variant="caption">{`@${creatorUsername}`}</Typography>
          </Grid>
          <Grid container direction="row" justify="flex-start">
            <Typography color="primary" variant="h6" className={classes.text}>
              Current Owner:
            </Typography>
            <Typography variant="caption">{`@${ownerUsername}`}</Typography>
          </Grid>
          <Grid container direction="row" justify="flex-start">
            <Typography color="primary" variant="h6" className={classes.text}>
              Last Price:
            </Typography>
            <Typography variant="caption">
              {isNaN(parseInt(priceEth))
                ? '\t —'
                : `\t${formatDecimal(priceEth)} ETH`}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container justify="center">
          <Button
            variant="outlined"
            href={artworkPath}
            className={classes.button}
          >
            <Typography className={classes.textBtn} variant="button">
              More
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ArtworkInformation
