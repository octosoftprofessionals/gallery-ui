import React, { useState, useCallback } from 'react'
import { useInfiniteQuery } from 'react-query'

import { allQuerysItems } from '../../services/gallery'

import TabBar from '../TabBar'
import GalleryArtworks from './GalleryArtworks'
import { findArtwork, STATUS_VALUES } from '../../Utils'
import { useQueryHash } from '../../hooks/useQueryParams'

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
    ({ pageParam = 0, querys = `status=${STATUS_VALUES.onAuction}` }) =>
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
    'buyNowItemsQuery',
    ({ pageParam = 0, querys = `status=${STATUS_VALUES.buyNow}` }) =>
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
    ({ pageParam = 0, querys = `status=${STATUS_VALUES.none}` }) =>
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

  const handleFavorite = useCallback(
    (assetId, status, title) => {
      const titles = {
        Live: listedItemsQuery.pages,
        BuyNow: reserveItemsQuery.pages,
        Other: soldItemsQuery.pages,
      }
      findArtwork(titles[title], assetId, status)
    },
    [listedItemsQuery.pages, reserveItemsQuery.pages, soldItemsQuery.pages]
  )
  return (
    <TabBar
      titles={['Buy Now', 'Auction', 'Offer']}
      justify="center"
      initialTab={parseInt(useQueryHash() || '0')}
      components={[
        <GalleryArtworks
          isLoading={isLoadingReserve}
          isFetching={isFetchingReserve}
          handleNext={getMoreReserve}
          hasNextPage={hasNextPageReserve}
          pages={reserveItemsQuery.pages}
          onFavorite={(assetId, status) =>
            handleFavorite(assetId, status, 'BuyNow')
          }
          emptyMessageProps={{
            primaryText: `Buy now, it's empty.`,
            showExploreButton: true,
          }}
        />,
        <GalleryArtworks
          isLoading={isLoadingLA}
          isFetching={isFetchingLA}
          handleNext={getMorelisted}
          hasNextPage={hasNextPageLA}
          pages={listedItemsQuery.pages}
          onFavorite={(assetId, status) =>
            handleFavorite(assetId, status, 'Live')
          }
          emptyMessageProps={{
            primaryText: `Auction, it's empty.`,
            showExploreButton: true,
          }}
        />,
        <GalleryArtworks
          isLoading={isLoadingSold}
          isFetching={isFetchingSold}
          handleNext={getMoreSold}
          hasNextPage={hasNextPageSold}
          pages={soldItemsQuery.pages}
          onFavorite={(assetId, status) =>
            handleFavorite(assetId, status, 'Other')
          }
          emptyMessageProps={{
            primaryText: `Offer, it's empty.`,
            showExploreButton: true,
          }}
        />,
      ]}
    />
  )
}

export default GridArtworks
