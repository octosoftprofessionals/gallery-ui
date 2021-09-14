import React from 'react'

import { Grid, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ArrowDownward } from '@material-ui/icons'

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
  link: {
    textDecoration: 'none',
    width: 'fit-content',
    '&:hover': { textDecoration: 'none' },
  },
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
      <Typography color="primary" variant="h4">
        {title}
      </Typography>
      <Link href="#desciption" className={classes.link}>
        <Typography color="primary" variant="body1" className={classes.text}>
          <ArrowDownward className={classes.icon} /> Artwork information
        </Typography>
      </Link>
      <div id="desciption">
        <Typography
          variant="subtitle1"
          color="primary"
          className={classes.title}
        >
          Description
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          className={classes.desciptionText}
        >
          {description && description.length !== 0 && description !== ' '
            ? description
            : '—'}
        </Typography>
      </div>

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
