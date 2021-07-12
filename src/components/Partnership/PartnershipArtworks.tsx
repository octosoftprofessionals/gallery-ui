import React from 'react'
import { Box, CircularProgress, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PartnershipItem from '../../components/PartnershipItem/index'
import GalleryItem from '../GalleryItem'
import ArtworkItem from '../GalleryItem/ArtworkItem'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
}))

const PartnershipArtworks = ({ isLoading, data = [] }) => {
  const classes = useStyle()

  console.log('isLoading:', isLoading)
  console.log('data:', data)

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
        data.map((galleryItem, index) => (
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
        ))
      )}
    </Grid>
  )
}

export default PartnershipArtworks