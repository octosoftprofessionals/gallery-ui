import React, { useCallback, useState } from 'react'
import { useInfiniteQuery } from 'react-query'

import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ArtworkItem from '../../../components/GalleryItem/ArtworkItem'
import { findArtworkFavorites } from '../../../Utils'
import { getAllFavoritesArtworksFromOneUserByAddress } from '../../../services/favorites'

import Spinner from '../../Spinner'
import EmptyAccount from './../GridCreator/EmptyAccount'

import GalleryGridFavorite from './GalleryGrid'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
}))

const Favorite = ({
  emptyMessageProps,
  queryName,
  profileAddress,
}: {
  emptyMessageProps: Record<string, any>
  queryName: string
  profileAddress: string
}) => {
  const classes = useStyle()
  const [galleryPage, setGalleryPage] = useState(0)
  const {
    data: favoritesPagesItems = [],
    isLoading: isLoadingQueryInfinite,
    isFetching,
    fetchNextPage,
    hasNextPage: hasNextPageFavorites,
  } = useInfiniteQuery(
    queryName,
    ({ pageParam = 0 }) =>
      getAllFavoritesArtworksFromOneUserByAddress(profileAddress, pageParam),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: ({ favoriteArtworks }) => {
        return favoriteArtworks.length >= 20
      },
    }
  )

  const getMoreArtworks = () => {
    const newPages = galleryPage + 20
    setGalleryPage(newPages)
    fetchNextPage({ pageParam: newPages })
  }

  const handleFavorite = useCallback(
    (assetId, status) => {
      findArtworkFavorites(favoritesPagesItems.pages, assetId, status)
    },
    [favoritesPagesItems.pages]
  )

  if (!isLoadingQueryInfinite) {
    const [page] = favoritesPagesItems.pages
    const { favoriteArtworks } = page

    if (favoriteArtworks.length === 0) {
      return (
        <Box style={{ padding: 48 }}>
          <EmptyAccount {...emptyMessageProps} />
        </Box>
      )
    }
  }

  return isLoadingQueryInfinite ? (
    <Spinner height="50vh" />
  ) : (
    <Grid container direction="row" justify="center" wrap="wrap">
      {
        <Grid item container justify="center">
          <GalleryGridFavorite
            isLoading={isFetching}
            handleNext={getMoreArtworks}
            pages={favoritesPagesItems.pages}
            hasNextPage={hasNextPageFavorites}
            md={4}
            lg={3}
            renderItem={item => (
              <ArtworkItem
                key={item.assetId}
                galleryItem={item}
                onFavorite={(assetId, status) =>
                  handleFavorite(assetId, status)
                }
              />
            )}
          />
        </Grid>
      }
    </Grid>
  )
}

export default Favorite
