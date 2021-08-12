import React, { useCallback } from 'react'
import { useQuery } from 'react-query'

import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ArtworkItem from '../../../components/GalleryItem/ArtworkItem'
import { GalleryItem } from '../../../services/gallery'
import Spinner from '../../Spinner'
import { findeArtwork } from '../../../Utils'

import EmptyAccount from './EmptyAccount'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
}))

const Gallery = ({
  emptyMessageProps,
  queryName,
  queryFunction,
}: {
  emptyMessageProps: Record<string, any>
  queryName: string
  queryFunction: () => Promise<GalleryItem[]>
}) => {
  const { data: galleryItems = [], isLoading } = useQuery(
    queryName,
    queryFunction,
    { refetchOnWindowFocus: false }
  )
  const classes = useStyle()
  const { data: ItemsToShow = [], favoriteArtworks = [] } = galleryItems

  const handleFavorite = useCallback(
    (assetId, status, title) => {
      const titles = {
        Items: ItemsToShow,
        Favorites: [favoriteArtworks],
      }
      findeArtwork(titles[title], assetId, status)
    },
    [ItemsToShow, favoriteArtworks]
  )

  if (!isLoading && ItemsToShow.length === 0 && favoriteArtworks.length === 0) {
    return (
      <Box style={{ padding: 48 }}>
        <EmptyAccount {...emptyMessageProps} />
      </Box>
    )
  }

  return isLoading ? (
    <Spinner height="50vh" />
  ) : (
    <Grid container direction="row" justify="center" wrap="wrap">
      {ItemsToShow.map(galleryItem => (
        <Grid item xs={12} sm={6} md={3} className={classes.containerItem}>
          <ArtworkItem
            key={galleryItem.assetId}
            galleryItem={galleryItem}
            onFavorite={(assetId, status) =>
              handleFavorite(assetId, status, 'Items')
            }
          />
        </Grid>
      ))}
      {favoriteArtworks.map(galleryItem => (
        <Grid item xs={12} sm={6} md={3} className={classes.containerItem}>
          <ArtworkItem
            key={galleryItem.assetId}
            galleryItem={galleryItem}
            onFavorite={(assetId, status) =>
              handleFavorite(assetId, status, 'Favorites')
            }
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Gallery
