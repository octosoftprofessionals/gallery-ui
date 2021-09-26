import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ArtworkItem from '../GalleryItem/ArtworkItem'
// import Artworks from '../../types'
import ExhibitionTitle from './ExhibitionTitle'
import { getOneExhibitionByIdWithArtworks } from '../../services/exhibition'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
}))

const GallerySections = ({
  exhibitions,
  isLoading,
  setShowTitles,
  setExibitionTitle,
  setExhibitionid,
}) => {
  const classes = useStyle()
  const [artworks, setArtworks] = useState([])

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

  const selectHandler = (title: string, id: number) => {
    setExibitionTitle(title)
    setShowTitles(false)
    setExhibitionid(id)
  }

  return (
    <Grid container direction="row" justify="space-between" wrap="wrap">
      {isLoading ? (
        <Loading />
      ) : (
        exhibitions.map((elem, index) => {
          return (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={3}
              className={classes.containerItem}
              onClick={() => selectHandler(elem.title, elem.id)}
            >
              <ExhibitionTitle exhibition={elem} />
            </Grid>
          )
        })
      )}
    </Grid>
  )
}

export default GallerySections
