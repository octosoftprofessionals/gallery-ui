import React, { useState } from 'react'
import { Box, Grid, Checkbox } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  root: {
    position: 'relative',
    transition: 'all 300ms cubic-bezier(0.23,1,0.32,1)',
  },
  img: {
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '100%',
    width: '100%',
    borderRadius: Theme.spacing(4),
  },
  containerVideo: { position: 'relative', height: 450, width: 245 },
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
    borderRadius: Theme.spacing(4),
  },
}))

const ItemArtworkSelected = ({ videoUrl, imageUrl, onCheck = false }) => {
  const classes = useStyle({ imageUrl })
  const [checked, setChecked] = useState(onCheck)
  const handleChange = event => {
    setChecked(event.target.checked)
  }
  console.log('videoUrl, imageUrl :>> ', videoUrl, imageUrl)
  return (
    <Grid item xs={12} container justify="center" alignItems="center">
      {videoUrl != null && videoUrl.length > 0 ? (
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
      <Checkbox checked={checked} color="primary" onChange={handleChange} />
    </Grid>
  )
}

export default ItemArtworkSelected
