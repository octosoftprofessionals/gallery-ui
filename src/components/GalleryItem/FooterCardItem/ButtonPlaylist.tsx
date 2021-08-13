import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography, Hidden } from '@material-ui/core'
import {
  StarBorderRounded,
  SlideshowOutlined,
  GradeSharp,
  SlideshowTwoTone,
} from '@material-ui/icons/'

const useStyle = makeStyles(Theme => ({
  icon: {
    fontSize: Theme.spacing(12),
    fill: Theme.palette.primary.light,
  },
  button: { padding: Theme.spacing(1), margin: Theme.spacing(1) },
}))

const ButtonPlaylist = ({
  handleSubmitFavorite,
  handleSubmitUnFavorite,
  handleSubmitPlaylist,
  handleSubmitUnPlaylist,
  inFavorite,
  inPlaylist,
}) => {
  const classes = useStyle()

  return (
    <Grid container direction="row" justify="space-between">
      <Grid item xs={5}>
        <Button
          fullWidth
          className={classes.button}
          onClick={inFavorite ? handleSubmitUnFavorite : handleSubmitFavorite}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Hidden only="xs">
              <Typography variant="overline" color="textSecondary">
                Add to Favorites
              </Typography>
            </Hidden>
            {inFavorite ? (
              <GradeSharp className={classes.icon} />
            ) : (
              <StarBorderRounded className={classes.icon} />
            )}
          </Grid>
        </Button>
      </Grid>
      <Grid item xs={5}>
        <Button
          fullWidth
          className={classes.button}
          onClick={inPlaylist ? handleSubmitUnPlaylist : handleSubmitPlaylist}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Hidden only="xs">
              <Typography variant="overline" color="textSecondary">
                Add to Playlist
              </Typography>
            </Hidden>
            {inPlaylist ? (
              <SlideshowTwoTone className={classes.icon} />
            ) : (
              <SlideshowOutlined className={classes.icon} />
            )}
          </Grid>
        </Button>
      </Grid>
    </Grid>
  )
}

export default ButtonPlaylist
