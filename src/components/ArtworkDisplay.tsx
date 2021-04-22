import React, { useState } from 'react'
import { Grid, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import {
  VolumeMute,
  VolumeUp,
  Fullscreen,
  FullscreenExit,
} from '@material-ui/icons'

import { boxShadow } from '../components/Styles/Colors'

const useStyle = makeStyles(Theme => ({
  video: { maxWidth: '45vh', filter: boxShadow.boxShadow2, cursor: 'zoom-in' },
  icon: { fontSize: Theme.spacing(8) },
  iconButtom: {
    margin: Theme.spacing(2),
    backgroundColor: Theme.palette.primary.dark,
    '&:hover': { backgroundColor: Theme.palette.primary.dark },
  },
}))

const ArtworkDisplay = ({ imgUrl, videoUrl }) => {
  const [volume, setVolume] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const classes = useStyle()
  return (
    <Grid item container justify="center" direction="column">
      <Grid item container justify="center">
        <video
          poster={imgUrl}
          src={videoUrl}
          autoPlay={true}
          loop={true}
          className={classes.video}
        >
          <source src={videoUrl} type="video/mp4" />
          <img src={imgUrl} />
        </video>
      </Grid>
      <Grid item container justify="flex-end">
        <IconButton
          onClick={() => setFullscreen(!fullscreen)}
          className={classes.iconButtom}
        >
          {fullscreen ? (
            <Fullscreen color="secondary" className={classes.icon} />
          ) : (
            <FullscreenExit color="secondary" className={classes.icon} />
          )}
        </IconButton>
        <IconButton
          onClick={() => setVolume(!volume)}
          className={classes.iconButtom}
        >
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

//   max-width: 100%;
//   object-fit: contain;
// `

// const AssetImg = styled.img`
//   max-width: 100%;
//   object-fit: contain;
// `
