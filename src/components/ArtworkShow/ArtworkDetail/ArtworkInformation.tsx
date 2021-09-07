import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ArrowDownward } from '@material-ui/icons'

import { biddingPathFrom, profilePathFromAddress } from '../../../config/routes'
import { ArtworkLinks } from '../../../types'

import ArtworkView from './ArtworkLinks'

const useStyle = makeStyles(Theme => ({
  root: {
    position: 'relative',
    backgroundColor: Theme.palette.secondary.dark,
    padding: Theme.spacing(9),
  },
  icon: { fontSize: `${Theme.typography.fontSize[0]}em` },
  text: {
    display: 'flex',
    alignItems: 'center',
    margin: Theme.spacing(3, 0, 9),
  },

  desciptionText: {
    margin: Theme.spacing(0, 0, 5),
    lineBreak: 'auto',
    whiteSpace: 'pre-line',
  },
  name: { margin: Theme.spacing(0, 0, 5) },
  title: { margin: 0 },
  creator: { fontSize: Theme.typography.fontSize[8] },
  buttonsContainer: {
    position: 'absolute',
    top: Theme.spacing(1),
    height: Theme.spacing(10),
  },
  history: {
    marginTop: Theme.spacing(3),
  },
  titleArtwork: { marginTop: Theme.spacing(9) },
}))

const ArtworkInformation = ({
  title,
  description,
  linksArtworkView,
}: {
  title: string
  description: string
  linksArtworkView: ArtworkLinks[]
}) => {
  const classes = useStyle()

  return (
    <Grid container direction="column">
      <Typography className={classes.titleArtwork} color="primary" variant="h4">
        {title}
      </Typography>
      <Typography color="primary" variant="body1" className={classes.text}>
        <ArrowDownward className={classes.icon} /> Artwork information
      </Typography>
      <Typography variant="subtitle1" color="primary" className={classes.title}>
        Description
      </Typography>
      <Typography
        variant="body2"
        color="primary"
        className={classes.desciptionText}
      >
        {description.length !== 0 && description !== ' ' ? description : '—'}
      </Typography>

      <Typography variant="subtitle1" color="primary" className={classes.title}>
        Edition of
      </Typography>
      <Typography variant="h4" color="initial">
        {/* {number ? number : '1'} */}
      </Typography>
      <ArtworkView artworkLinks={linksArtworkView} />
    </Grid>
  )
}

export default ArtworkInformation
