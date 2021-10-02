import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { boxShadow } from '../Styles/Colors'

const useStyle = makeStyles(Theme => ({
  containerAsset: {
    position: 'relative',
    paddingBottom: '100%',
    filter: boxShadow.boxShadow3,
    '@media (max-width: 768px)': {
      paddingBottom: '60%',
    },
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
}))

const HeroDisplay = ({
  imagePreviewUrl,
  imageUrl,
  videoUrl,
}: {
  imagePreviewUrl?: string
  imageUrl: string
  videoUrl: string
}) => {
  const classes = useStyle()
  return (
    <Grid item xs={12} sm={5} md={5}>
      <div className={classes.containerAsset}>
        <video
          poster={imagePreviewUrl ?? imageUrl}
          src={videoUrl}
          autoPlay={true}
          loop={true}
          className={classes.video}
          muted={true}
        >
          <img src={imagePreviewUrl ?? imageUrl} />
        </video>
      </div>
    </Grid>
  )
}

export default HeroDisplay
