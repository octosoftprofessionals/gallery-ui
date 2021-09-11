import React, { useState } from 'react'
import { useInfiniteQuery } from 'react-query'

import { Grid, Box } from '@material-ui/core'

import EmptyAccount from '../../GridCreator/EmptyAccount'
import GalleryGridFavorite from '../../Favorite/GalleryGrid'
import Spinner from '../../../Spinner'
import { GalleryItem } from '../../../../types'
import ItemsToSelect from './ItemsToSelect'

const ItemArtworkSelected = ({
  onModifyPlaylist,
  queryName,
  queryFunction,
  emptyMessageProps,
  artworksSelected,
  profileAddress,
}: {
  onModifyPlaylist: Function
  queryName: string
  queryFunction?: () => Promise<GalleryItem[]>
  emptyMessageProps: Record<string, any>
  artworksSelected: number[]
  profileAddress?: string
}) => {
  const [galleryPage, setGalleryPage] = useState(0)

  const {
    data: favoritesPagesItems = [],
    isLoading: isLoadingQueryInfinite,
    isFetching,
    fetchNextPage,
    hasNextPage: hasNextPageFavorites,
  } = useInfiniteQuery(
    queryName,
    ({ pageParam = 0 }) => queryFunction(profileAddress, pageParam),
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

  return (
    <>
      {isLoadingQueryInfinite ? (
        <Spinner height="30vh" />
      ) : (
        <GalleryGridFavorite
          isLoading={isFetching}
          handleNext={getMoreArtworks}
          pages={favoritesPagesItems.pages}
          hasNextPage={hasNextPageFavorites}
          md={4}
          renderItem={item => (
            <ItemsToSelect
              galleryItem={item}
              onModifyPlaylist={onModifyPlaylist}
              artworksSelected={artworksSelected}
            />
          )}
        />
      )}
    </>
  )
}

export default ItemArtworkSelected
