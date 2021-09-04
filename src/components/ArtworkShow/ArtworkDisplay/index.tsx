import React, { useEffect, useState, useRef } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { boxShadow } from '../../Styles/Colors'
import ButtonZoomMute from './ButtonZoomMute'

const useStyle = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(11, 0),
    backgroundColor: Theme.palette.secondary.light,
    '@media (max-width: 585px)': {
      padding: Theme.spacing(0, 9, 14),
    },
  },
  video: {
    maxWidth: `${Theme.spacing(14)}vh`,
    maxHeight: `${Theme.spacing(14)}vh`,
    padding: Theme.spacing(0, 14),
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
    padding: Theme.spacing(0, 14),
    height: '90vh',
  },
  fullScreen: {
    backgroundColor: Theme.palette.secondary.light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalScreen: {
    display: 'flex',
    justifyContent: 'center',
    background: 'transparent',
  },
  conteiner: { position: 'relative', width: 'fit-content' },
}))

const ArtworkDisplay = ({ imageUrl, videoUrl }) => {
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
        <Grid item className={classes.conteiner}>
          <video
            poster={imageUrl}
            src={videoUrl}
            autoPlay={true}
            loop={true}
            onClick={() => toggleFullScreen()}
            className={fullscreen ? classes.fullScreenVideo : classes.video}
            ref={videoRef}
          >
            <source src={videoUrl} />
            <img src={imageUrl} />
          </video>
          <ButtonZoomMute
            isFullscreen={fullscreen}
            isMute={volume}
            handelFullScreen={toggleFullScreen}
            handelMute={toggleMute}
          />
        </Grid>
      </FullScreen>
    </Grid>
  )
}

export default ArtworkDisplay
