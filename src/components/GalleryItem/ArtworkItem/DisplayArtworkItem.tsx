import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  img: {
    backgroundImage: ({ imageUrl }: { imageUrl: string }) => `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '100%',
    borderRadius: Theme.spacing(4, 4, 0, 0),
  },
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
    borderRadius: Theme.spacing(4, 4, 0, 0),
  },
}))
const DisplayArtworkItem = ({
  imageUrl,
  videoUrl,
}: {
  imageUrl: string
  videoUrl: string
}) => {
  const classes = useStyle({ imageUrl })
  return (
    <Box>
      {videoUrl != null && videoUrl.length > 0 ? (
        <div className={classes.containerVideo}>
          <div className={classes.inVideo}>
            <video
              poster={imageUrl}
              src={videoUrl}
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
    </Box>
  )
}

export default DisplayArtworkItem
