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
  onFavorite,
  pages = [],
}) => {
  return (
    <>
      {isLoading ? (
        <Spinner height="50vh" />
      ) : (
        <Grid item container justify="center">
          <GalleryPagenation
            isLoading={isFetching}
            handleNext={handleNext}
            pages={pages}
            hasNextPage={hasNextPage}
            renderItem={item => (
              <ArtworkItem
                key={item.assetId}
                galleryItem={item}
                onFavorite={onFavorite}
              />
            )}
          />
        </Grid>
      )}
    </>
  )
}

export default GalleryArtworks
