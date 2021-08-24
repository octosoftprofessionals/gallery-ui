import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography, Paper } from '@material-ui/core'

import CardArtwork from './CardArtwork'
import { formatDecimal } from '../../Utils'

const useStyles = makeStyles(Theme => ({
  img: {
    backgroundImage: ({ imageUrl }: { imageUrl: string }) => `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '100%',
    width: '100%',
  },
  link: { textDecoration: 'none' },
  containerVideo: { position: 'relative', paddingBottom: '100%' },
  inVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    display: 'flex',
  },
  video: {
    display: 'block',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
}))

const ArtworkInformation = ({ arryArtwork, index }) => {
  const { imagePreviewUrl, videoUrl, title, priceEth } = arryArtwork[index]
  const classes = useStyles({ imageUrl: imagePreviewUrl })
  console.log('object :>> ', arryArtwork[index])
  return (
    <Paper>
      <Grid container alignContent="center" justify="center">
        <Grid container justify="center">
          <CardArtwork
            imageUrl={imagePreviewUrl}
            videoUrl={videoUrl}
            key={index}
          />
        </Grid>

        <Grid item xs={12} container justify="center">
          <Typography>{title}</Typography>
        </Grid>
        <Grid item xs={5} container alignItems="flex-start" direction="column">
          <Grid container direction="row" justify="space-between">
            <Typography>Artist:</Typography>
            <Typography variant="caption">@GraviTea</Typography>
          </Grid>
          <Grid container direction="row" justify="space-between">
            <Typography>Current Owner:</Typography>
            <Typography variant="caption">@Roger</Typography>
          </Grid>
          <Grid container direction="row" justify="space-between">
            <Typography>Last Price:</Typography>
            <Typography variant="caption">
              {isNaN(priceEth) ? '—' : `${formatDecimal(priceEth)} ETH`}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={9} container justify="flex-end">
          <Button variant="outlined">
            <Typography variant="caption">More</Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ArtworkInformation
