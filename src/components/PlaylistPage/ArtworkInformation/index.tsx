import React from 'react'
import { Link } from 'gatsby'

import { Box, Button, Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { artworkPathFrom } from '../../../config/routes'
import { GalleryItem } from '../../../types'

import EmptyAccount from '../../Creator/GridCreator/EmptyAccount'

import Display from './Display'
import Description from './Description'
import Title from './Title'

const useStyle = makeStyles(Theme => ({
  root: {
    minHeight: `${Theme.spacing(9)}vh`,
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
}))

const ArtworkInformation = ({
  arryArtwork = [],
  index = 0,
  emptyMessageProps,
}: {
  arryArtwork: any[]
  index: number
  emptyMessageProps?: string
}) => {
  const classes = useStyle()

  if (arryArtwork.length === 0) {
    return (
      <Paper className={classes.root}>
        <Box style={{ padding: 48, width: '100%' }}>
          <EmptyAccount />
        </Box>
      </Paper>
    )
  }

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
  const artworkPath = artworkPathFrom(assetContractAddress, assetTokenId)

  return (
    <Paper className={classes.root}>
      <Grid container alignContent="center" justify="center">
        <Display image={imagePreviewUrl} video={videoUrl} index={index} />
        <Title title={title} index={index} length={arryArtwork.length} />
        <Description
          creatorUsername={creatorUsername}
          ownerUsername={ownerUsername ? ownerUsername : '-'}
          priceEth={priceEth}
        />
        <Grid item xs={12} container justify="center">
          <Link to={artworkPath}>
            <Button variant="outlined" className={classes.button}>
              <Typography className={classes.textBtn} variant="button">
                More
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ArtworkInformation
