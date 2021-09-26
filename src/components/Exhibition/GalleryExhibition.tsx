import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ArtworkItem from '../GalleryItem/ArtworkItem'
// import Artworks from '../../types'
import { getOneExhibitionByIdWithArtworks } from '../../services/exhibition'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
}))

const GalleryExhibition = ({ exhibitionId }) => {
  const classes = useStyle()
  const [artworks, setArtworks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      setIsLoading(true)
      const { artworks } = await getOneExhibitionByIdWithArtworks(exhibitionId)
      setArtworks(artworks)
      setIsLoading(false)
    }

    fetch()
  }, [exhibitionId])

  const Loading = () => (
    <Box
      width="100%"
      height="60vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  )

  return (
    <Grid container direction="row" justify="space-between" wrap="wrap">
      {isLoading ? (
        <Loading />
      ) : (
        artworks.map((galleryItem, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.containerItem}
          >
            <ArtworkItem galleryItem={galleryItem} />
          </Grid>
        ))
      )}
    </Grid>
  )
}

export default GalleryExhibition
