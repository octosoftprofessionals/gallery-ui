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
}) => {
  const classes = useStyle()
  const [isFavorite, setIsFavorite] = useState<boolean>(inFavorite)
  const [isPlaylist, setIsPlaylist] = useState<boolean>(false)

  const handleClickIsFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const handleClickIsPlaylist = () => {
    setIsPlaylist(!isPlaylist)
  }
  return (
    <Grid container direction="row" justify="space-between">
      <Grid item xs={5}>
        <form
          onSubmit={isFavorite ? handleSubmitUnFavorite : handleSubmitFavorite}
        >
          <Button
            type="submit"
            fullWidth
            className={classes.button}
            onClick={handleClickIsFavorite}
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
              {isFavorite ? (
                <GradeSharp className={classes.icon} />
              ) : (
                <StarBorderRounded className={classes.icon} />
              )}
            </Grid>
          </Button>
        </form>
      </Grid>
      <Grid item xs={5}>
        <form
          onSubmit={isPlaylist ? handleSubmitUnPlaylist : handleSubmitPlaylist}
        >
          <Button
            fullWidth
            type="submit"
            className={classes.button}
            onClick={handleClickIsPlaylist}
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
              {isPlaylist ? (
                <SlideshowTwoTone className={classes.icon} />
              ) : (
                <SlideshowOutlined className={classes.icon} />
              )}
            </Grid>
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default ButtonPlaylist
