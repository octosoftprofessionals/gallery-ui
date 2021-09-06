import React from 'react'

import { Grid, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  VolumeMute,
  VolumeUp,
  Fullscreen,
  FullscreenExit,
} from '@material-ui/icons'

const useStyle = makeStyles(Theme => ({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 'fit-content',
    '@media (max-width: 585px)': {
      flexDirection: 'column',
      right: Theme.spacing(9),
      left: 'auto',
    },
  },
  icon: { fontSize: Theme.spacing(8) },
  iconButton: {
    margin: Theme.spacing(2),
    backgroundColor: Theme.palette.primary.dark,
    '&:hover': { backgroundColor: Theme.palette.primary.dark },
  },
}))

const ButtonZoomMute = ({
  isFullscreen,
  isMute,
  handelFullScreen,
  handelMute,
}: {
  isFullscreen: boolean
  isMute: boolean
  handelFullScreen: Function
  handelMute: Function
}) => {
  const classes = useStyle()
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item xs={1}>
        <IconButton
          onClick={() => handelFullScreen()}
          className={classes.iconButton}
        >
          {isFullscreen ? (
            <FullscreenExit color="secondary" className={classes.icon} />
          ) : (
            <Fullscreen color="secondary" className={classes.icon} />
          )}
        </IconButton>
      </Grid>

      <Grid item xs={1}>
        <IconButton onClick={() => handelMute()} className={classes.iconButton}>
          {isMute ? (
            <VolumeUp color="secondary" className={classes.icon} />
          ) : (
            <VolumeMute color="secondary" className={classes.icon} />
          )}
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default ButtonZoomMute
