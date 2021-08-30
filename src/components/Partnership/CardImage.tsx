import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(Theme => ({
  img: {
    backgroundImage: ({ imageUrl }: { imageUrl: string }) => `url(${imageUrl})`,
    backgroundPosition: 'center',
    borderRadius: Theme.spacing(11, 11, 0, 0),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '100%',
    width: '100%',
  },
  link: { textDecoration: 'none' },
  containerVideo: { position: 'relative', paddingBottom: '100%' },
  inVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    display: 'flex',
  },
  video: {
    display: 'block',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
}))

const CardArtwork = ({
  imageUrl,
  videoUrl,
  ...props
}: {
  imageUrl: string
  videoUrl?: string
}) => {
  const classes = useStyles({ imageUrl })
  return (
    <Grid container justify="center">
      <Grid item xs={12} {...props}>
        {videoUrl != null ? (
          <div className={classes.containerVideo}>
            <div className={classes.inVideo}>
              <video
                poster={imageUrl}
                src={'' ?? videoUrl}
                autoPlay={true}
                loop={true}
                className={classes.video}
                muted={true}
              >
                <img src={imageUrl} />
              </video>
            </div>
          </div>
        ) : (
          <div className={classes.img} />
        )}
      </Grid>
    </Grid>
  )
}

export default CardArtwork
