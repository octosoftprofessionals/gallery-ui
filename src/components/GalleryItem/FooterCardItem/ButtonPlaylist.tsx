import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography, Hidden } from '@material-ui/core'
import { StarBorderRounded, SlideshowOutlined } from '@material-ui/icons/'

const useStyle = makeStyles(Theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: Theme.spacing(0),
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: Theme.spacing(12),
  },
  button: { padding: 0 },
}))

const ButtonPlaylist = ({}) => {
  const classes = useStyle()
  return (
    <Grid container direction="row" justify="space-around">
      <Grid item xs={5}>
        <Button fullWidth className={classes.button}>
          <div className={classes.root}>
            <Hidden only="xs">
              <Typography variant="overline" color="textSecondary">
                Add to Favorites
              </Typography>
            </Hidden>
            <StarBorderRounded className={classes.icon} />
          </div>
        </Button>
      </Grid>
      <Grid item xs={5}>
        <Button fullWidth className={classes.button}>
          <div className={classes.root}>
            <Hidden only="xs">
              <Typography variant="overline" color="textSecondary">
                Add to Playlist
              </Typography>
            </Hidden>
            <SlideshowOutlined className={classes.icon} />
          </div>
        </Button>
      </Grid>
    </Grid>
  )
}

export default ButtonPlaylist
