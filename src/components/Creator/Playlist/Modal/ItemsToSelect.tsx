import React, { useState, useEffect } from 'react'

import { Badge, Grid, Checkbox } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { GalleryItem } from '../../../../types'

const useStyle = makeStyles(Theme => ({
  root: {
    position: 'relative',
    transition: 'all 300ms cubic-bezier(0.23,1,0.32,1)',
    marginTop: Theme.spacing(4),
    padding: Theme.spacing(4),
  },
  img: {
    backgroundImage: ({ imageUrl }: { imageUrl: string }) => `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    borderRadius: Theme.spacing(4),
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  containerVideo: { position: 'relative', height: 355, width: 210 },
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
  checkbox: { marginTop: Theme.spacing(2) },
}))

const ItemsToSelect = ({
  galleryItem,
  onModifyPlaylist,
  artworksSelected,
}: {
  galleryItem: GalleryItem
  onModifyPlaylist: any
  artworksSelected: number[]
}) => {
  const { imageUrl, videoUrl, id } = galleryItem
  const classes = useStyle({ imageUrl })

  const index = artworksSelected.indexOf(galleryItem.id) + 1
  const isCheck = artworksSelected.includes(galleryItem.id)
  const [checked, setChecked] = useState(isCheck)

  const handleChange = event => {
    setChecked(event.target.checked)
    onModifyPlaylist(id)
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.root}
    >
      <Badge key={id} badgeContent={index} color="primary">
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
          <div className={classes.containerVideo}>
            <div className={classes.img} />
          </div>
        )}
      </Badge>
      <Checkbox
        checked={checked}
        color="primary"
        onChange={handleChange}
        className={classes.checkbox}
      />
    </Grid>
  )
}

export default ItemsToSelect
