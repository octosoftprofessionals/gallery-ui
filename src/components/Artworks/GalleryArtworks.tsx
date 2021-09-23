import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ArtworkItem from '../../components/GalleryItem/ArtworkItem'
import GalleryPagenation from '../../components/Gallery'
import EmptyAccount from '../../components/Creator/GridCreator/EmptyAccount'

import Spinner from '../Spinner'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
}))

const GalleryArtworks = ({
  isLoading,
  isFetching,
  handleNext,
  hasNextPage,
  onFavorite,
  emptyMessageProps,
  pages = [],
}) => {
  const classes = useStyle()

  if (!isLoading) {
    const [page] = pages
    if (page.length === 0) {
      return (
        <Grid container justify="center" className={classes.containerItem}>
          <EmptyAccount {...emptyMessageProps} />
        </Grid>
      )
    }
  }
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
