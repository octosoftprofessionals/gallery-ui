import React, { useEffect, useState, useRef } from 'react'
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
    backgroundColor: Theme.palette.secondary.light,
    padding: Theme.spacing(9),
  },
  video: { maxWidth: '50vh', filter: boxShadow.boxShadow2, cursor: 'zoom-in' },
  fullScreen: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: Theme.palette.secondary.main,
  },
  fullScreenVideo: { width: '90vw', height: '90vh' },
  icon: { fontSize: Theme.spacing(8) },
  iconButton: {
    margin: Theme.spacing(2),
    backgroundColor: Theme.palette.primary.dark,
    '&:hover': { backgroundColor: Theme.palette.primary.dark },
  },
  buttons: { position: 'absolute', bottom: 0, right: 0, left: 0 },
}))

const ArtworkDisplay = ({ imgUrl, videoUrl, mimeType }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [volume, setVolume] = useState<boolean>(true)
  const [fullscreen, setFullscreen] = useState<boolean>(false)
  const classes = useStyle()

  const toggleFullScreen = () => {
    setFullscreen(!fullscreen)
    if (fullscreen) {
      if (document.body.requestFullscreen) {
        document.body.requestFullscreen()
      }
    } else {
      if (document.body.webkitRequestFullScreen) {
        document.body.webkitRequestFullScreen()
      }
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
      className={fullscreen ? classes.fullScreen : classes.root}
    >
      <Grid item container justify="center">
        <video
          poster={imgUrl}
          src={videoUrl}
          autoPlay={true}
          loop={true}
          onClick={() => toggleFullScreen()}
          className={fullscreen ? classes.fullScreenVideo : classes.video}
          ref={videoRef}
        >
          <source
            src={
              'https://fnd.fleek.co/fnd-prod/QmeKXDYWUvL42en8vH8rz9UYyvLDY71N1ZbRYhK9MHgUDA/nft.mp4'
            }
            type={mimeType}
          />
          <img src={imgUrl} />
        </video>
      </Grid>
      <Grid item container justify="flex-end" className={classes.buttons}>
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

        <IconButton onClick={() => toggleMute()} className={classes.iconButton}>
          {volume ? (
            <VolumeUp color="secondary" className={classes.icon} />
          ) : (
            <VolumeMute color="secondary" className={classes.icon} />
          )}
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default ArtworkDisplay
