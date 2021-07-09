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
    color: Theme.palette.primary.contrastText,
    '&:hover': { color: Theme.palette.primary.contrastText },
  },
  button: { padding: 'none', width: '100%' },
}))

const ButtonPlaylist = ({}) => {
  const classes = useStyle()
  return (
    <>
      <Grid item xs={12} className={classes.container}>
        <Grid item xs={6}>
          <Button className={classes.button}>
            <div className={classes.root}>
              <Hidden only="xs">
                <Typography variant="overline" color="secondary">
                  Add to Favorites
                </Typography>
              </Hidden>
              <StarBorderRounded className={classes.icon} />
            </div>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button className={classes.button}>
            <div className={classes.root}>
              <Hidden only="xs">
                <Typography variant="overline" color="secondary">
                  Add to Playlist
                </Typography>
              </Hidden>
              <SlideshowOutlined className={classes.icon} />
            </div>
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default ButtonPlaylist
