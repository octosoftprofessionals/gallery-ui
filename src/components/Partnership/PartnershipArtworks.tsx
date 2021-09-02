import React from 'react'
import { Box, CircularProgress, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PartnershipItem from './PartnershipItem/index'
import GalleryItem from '../GalleryItem'
import ArtworkItem from '../GalleryItem/ArtworkItem'

const useStyle = makeStyles(Theme => ({
  containerItem: {
    padding: Theme.spacing(4),
    borderRadius: Theme.spacing(0, 0, 11, 11),
  },
}))

const PartnershipArtworks = ({ isLoading, data = [] }) => {
  const classes = useStyle()

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
    <Grid container justify="center" md={11}>
      {data.map((galleryItem, index) => (
        <>
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={3}
            className={classes.containerItem}
          >
            <PartnershipItem galleryItem={galleryItem} />
          </Grid>
        </>
      ))}
    </Grid>
  )
}

export default PartnershipArtworks
