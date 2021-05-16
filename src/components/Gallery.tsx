import React, { useState } from 'react'

import { Grid, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import GalleryItem from './GalleryItem'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
  textButton: { fontSize: Theme.typography.fontSize[3] },
  button: { padding: Theme.spacing(3, 5), margin: Theme.spacing(6) },
}))

const Gallery = ({ artworksQuery, itemType }) => {
  const artworks = artworksQuery ? artworksQuery : []
  const [pages, setPages] = useState<number>(0)

  const handleNextPages = () => {
    setPages(pages + 1)
  }
  const handleBeforePages = () => {
    if (pages > 0) setPages(pages - 1)
  }

  const classes = useStyle()
  return (
    <>
      <Grid container direction="row" justify="space-around" wrap="wrap">
        {artworksQuery
          ? artworks[pages].map((artwork, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className={classes.containerItem}
              >
                <GalleryItem
                  key={index}
                  itemType={itemType}
                  artwork={artwork}
                />
              </Grid>
            ))
          : ''}
      </Grid>
      <Grid item container justify="center">
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => handleNextPages()}
        >
          <Typography variant="button" className={classes.textButton}>
            Next Pages
          </Typography>
        </Button>
        <Button
          variant="outlined"
          className={classes.button}
          style={{ display: pages != 0 ? 'block' : 'none' }}
          onClick={() => handleBeforePages()}
        >
          <Typography variant="button" className={classes.textButton}>
            Before Pages
          </Typography>
        </Button>
      </Grid>
    </>
  )
}

export default Gallery
