import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { colors } from '../../Styles/Colors'

import PlaylistItem from './PlaylistItem'

const useStyles = makeStyles(Theme => ({
  button: {
    margin: Theme.spacing(3, 9),
    backgroundColor: 'transparent',
    border: `${Theme.spacing(1)}px solid ${colors.Gray}`,
    borderRadius: Theme.shape.borderRadius[2],
    padding: `${Theme.spacing(2) / 2}vw ${Theme.spacing(2)}vw`,
    paddingBottom: `${Theme.spacing(1)}vw`,
  },
  textButton: {
    fontSize: Theme.typography.fontSize[4],
  },
  icon: { fontSize: Theme.spacing(13), color: colors.Gray },
}))

const items = [
  {
    imageUrl:
      'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
    titlePlaylist: 'Officia culpa deserunt',
  },
  {
    imageUrl:
      'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
    titlePlaylist: 'Officia culpa deserunt Officia culpa deserunt',
  },
  {
    imageUrl:
      'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
    titlePlaylist:
      'Officia culpa deserunt Officia culpa deserunt Officia culpa deserunt',
  },
]

const Playlist = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container justify="center" direction="row" wrap="wrap">
        {items.map((item, index) => (
          <Grid item xs={12} sm={5} container justify="center" key={index}>
            <PlaylistItem
              imageUrl={item.imageUrl}
              titlePlaylist={item.titlePlaylist}
            />
          </Grid>
        ))}
        <Grid item xs={12} sm={5} container>
          <Button className={classes.button} fullWidth>
            <Grid container alignItems="center" direction="column">
              <Add className={classes.icon} />
              <Typography variant="caption" className={classes.textButton}>
                Create a new playlist
              </Typography>
            </Grid>
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Playlist
