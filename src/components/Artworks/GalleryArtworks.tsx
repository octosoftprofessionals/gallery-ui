import React from 'react'
import { Grid } from '@material-ui/core'

import Spinner from '../Spinner'
import ArtworkItem from '../../components/GalleryItem/ArtworkItem'
import GalleryPagenation from '../../components/Gallery'

const GalleryArtworks = ({
  isLoading,
  isFetching,
  handleNext,
  hasNextPage,
  pages = [],
}) => {
  return (
    <Grid container direction="row" justify="space-between" wrap="wrap">
      {isLoading ? (
        <Spinner height="50vh" />
      ) : (
        <GalleryPagenation
          isLoading={isFetching}
          handleNext={handleNext}
          pages={pages}
          hasNextPage={hasNextPage}
          renderItem={(items, index) => (
            <ArtworkItem key={index} galleryItem={items} />
          )}
        />
      )}
    </Grid>
  )
}

export default GalleryArtworks
