import React, { useState } from 'react'
import { useInfiniteQuery } from 'react-query'

import { allQuerysItems } from '../../services/gallery'

import TabBar from '../TabBar'
import GalleryArtworks from './GalleryArtworks'

const GridArtworks = () => {
  const [listedNextPage, setListedNextPage] = useState(0)
  const [reserveNextPage, setReserveNextPage] = useState(0)
  const [soldNextPage, setSoldNextPage] = useState(0)

  const {
    data: listedItemsQuery = [],
    isLoading: isLoadingLA,
    isFetching: isFetchingLA,
    fetchNextPage: fetchNextPageLA,
    hasNextPage: hasNextPageLA,
  } = useInfiniteQuery(
    'liveAcutions',
    ({ pageParam = 0, querys = 'status=aution' }) =>
      allQuerysItems({ query: querys, offset: pageParam }),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: lastPage => {
        return lastPage.length >= 20
      },
    }
  )
  const getMorelisted = () => {
    const newPages = listedNextPage + 20
    setListedNextPage(newPages)
    fetchNextPageLA({ pageParam: newPages })
  }

  const {
    data: reserveItemsQuery = [],
    isLoading: isLoadingReserve,
    isFetching: isFetchingReserve,
    fetchNextPage: fetchNextPageReserve,
    hasNextPage: hasNextPageReserve,
  } = useInfiniteQuery(
    'reserveItemsQuery',
    ({ pageParam = 0, querys = 'status=reserve' }) =>
      allQuerysItems({ query: querys, offset: pageParam }),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: lastPage => {
        return lastPage.length >= 20
      },
    }
  )
  const getMoreReserve = () => {
    const newPages = reserveNextPage + 20
    setReserveNextPage(newPages)
    fetchNextPageReserve({ pageParam: newPages })
  }

  const {
    data: soldItemsQuery = [],
    isLoading: isLoadingSold,
    isFetching: isFetchingSold,
    fetchNextPage: fetchNextPageSold,
    hasNextPage: hasNextPageSold,
  } = useInfiniteQuery(
    'soldItemsQuery',
    ({ pageParam = 0, querys = 'status=sold' }) =>
      allQuerysItems({ query: querys, offset: pageParam }),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: lastPage => {
        return lastPage.length >= 20
      },
    }
  )

  const getMoreSold = () => {
    const newPages = soldNextPage + 20
    setSoldNextPage(newPages)
    fetchNextPageSold({ pageParam: newPages })
  }
  return (
    <TabBar
      titles={['Live Auction', 'Reserve not met', 'Sold']}
      components={[
        <GalleryArtworks
          isLoading={isLoadingLA}
          isFetching={isFetchingLA}
          handleNext={getMorelisted}
          hasNextPage={hasNextPageLA}
          pages={listedItemsQuery.pages}
        />,
        <GalleryArtworks
          isLoading={isLoadingReserve}
          isFetching={isFetchingReserve}
          handleNext={getMoreReserve}
          hasNextPage={hasNextPageReserve}
          pages={reserveItemsQuery.pages}
        />,
        <GalleryArtworks
          isLoading={isLoadingSold}
          isFetching={isFetchingSold}
          handleNext={getMoreSold}
          hasNextPage={hasNextPageSold}
          pages={soldItemsQuery.pages}
        />,
      ]}
    />
  )
}

export default GridArtworks
