import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography, Hidden } from '@material-ui/core'
import { StarBorderRounded, SlideshowOutlined } from '@material-ui/icons/'

const useStyle = makeStyles(Theme => ({
  icon: {
    fontSize: Theme.spacing(12),
  },
  button: { padding: Theme.spacing(1), margin: Theme.spacing(1) },
}))

const ButtonPlaylist = () => {
  const classes = useStyle()
  return (
    <Grid container direction="row" justify="space-between">
      <Grid item xs={5}>
        <Button fullWidth className={classes.button}>
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
            <StarBorderRounded className={classes.icon} />
          </Grid>
        </Button>
      </Grid>
      <Grid item xs={5}>
        <Button fullWidth className={classes.button}>
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
            <SlideshowOutlined className={classes.icon} />
          </Grid>
        </Button>
      </Grid>
    </Grid>
  )
}

export default ButtonPlaylist
