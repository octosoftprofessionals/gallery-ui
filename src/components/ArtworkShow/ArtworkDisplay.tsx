import React, { useEffect, useState, useRef } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { Grid, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import {
  VolumeMute,
  VolumeUp,
  Fullscreen,
  FullscreenExit,
} from '@material-ui/icons'

import { boxShadow } from '../Styles/Colors'

const useStyle = makeStyles(Theme => ({
  root: {
    position: 'relative',
    backgroundColor: Theme.palette.secondary.dark,
    padding: Theme.spacing(9),
    '@media (max-width: 585px)': {
      padding: Theme.spacing(0, 9, 14),
    },
  },
  video: {
    maxWidth: `${Theme.spacing(14)}vh`,
    filter:
      Theme.palette.type == 'light'
        ? boxShadow.boxShadow2
        : boxShadow.boxShadow9,
    cursor: 'zoom-in',
    '@media (max-width: 585px)': {
      maxWidth: `${Theme.spacing(14)}vw`,
    },
  },
  fullScreenVideo: {
    display: 'flex',
    width: '90vw',
    height: '90vh',
  },
  fullScreen: {
    backgroundColor: Theme.palette.secondary.main,
    display: 'flex',
  },
  normalScreen: {
    display: 'block',
    backgroundColor: Theme.palette.secondary.dark,
  },
  icon: { fontSize: Theme.spacing(8) },
  iconButton: {
    margin: Theme.spacing(2),
    backgroundColor: Theme.palette.primary.dark,
    '&:hover': { backgroundColor: Theme.palette.primary.dark },
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingBottom: Theme.spacing(9),
    '@media (max-width: 585px)': {
      flexDirection: 'column',
      right: Theme.spacing(9),
      left: 'auto',
    },
  },
}))

const ArtworkDisplay = ({ imageUrl, videoUrl, mimeType }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [volume, setVolume] = useState<boolean>(true)
  const [fullscreen, setFullscreen] = useState<boolean>(false)
  const classes = useStyle()
  const handle = useFullScreenHandle()
  const toggleFullScreen = () => {
    setFullscreen(!fullscreen)
    if (fullscreen) {
      handle.exit()
    } else {
      handle.enter()
    }
  }

  const toggleMute = () => {
    setVolume(!volume)
    videoRef.current.muted = volume
  }
  useEffect(() => {
    toggleMute()
  }, [])

  return (
    <Grid
      container
      justify="center"
      direction="column"
      className={classes.root}
    >
      <FullScreen
        handle={handle}
        className={fullscreen ? classes.fullScreen : classes.normalScreen}
      >
        <Grid container justify="center" alignItems="center">
          <video
            poster={imageUrl}
            src={videoUrl}
            autoPlay={true}
            loop={true}
            onClick={() => toggleFullScreen()}
            className={fullscreen ? classes.fullScreenVideo : classes.video}
            ref={videoRef}
          >
            <source src={videoUrl} type={mimeType} />
            <img src={imageUrl} />
          </video>
        </Grid>
        <Grid
          item
          xs={1}
          md={12}
          container
          justify="flex-end"
          className={classes.buttons}
        >
          <IconButton
            onClick={() => toggleFullScreen()}
            className={classes.iconButton}
          >
            {fullscreen ? (
              <Fullscreen color="secondary" className={classes.icon} />
            ) : (
              <FullscreenExit color="secondary" className={classes.icon} />
            )}
          </IconButton>

          <IconButton
            onClick={() => toggleMute()}
            className={classes.iconButton}
          >
            {volume ? (
              <VolumeUp color="secondary" className={classes.icon} />
            ) : (
              <VolumeMute color="secondary" className={classes.icon} />
            )}
          </IconButton>
        </Grid>
      </FullScreen>
    </Grid>
  )
}

export default ArtworkDisplay
