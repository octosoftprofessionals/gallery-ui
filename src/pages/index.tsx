import React, { useState, useCallback } from 'react'
import { useInfiniteQuery } from 'react-query'
import { Grid } from '@material-ui/core'
import ArtworkGrid from '../components/ArtworkGrid'
import Gallery from '../components/Gallery'
import ArtworkItem from '../components/GalleryItem/ArtworkItem'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import RotatingCarousel from '../components/RotatingCarousel'
import EmailPopUp from '../components/EmailPopUp'
import { findArtwork, STATUS_VALUES, getCarouselArtworks } from '../Utils'
import { allQuerysItems } from '../services/gallery'

const Home = () => {
  const [featuredArtworks, setFeaturedArtworks] = useState(0)
  const [liveAuctions, setLiveAuctions] = useState(0)

  const {
    data: allFeaturedItems = [],
    isLoading: isLoadingFA,
    isFetching: isFetchingFA,
    fetchNextPage: fetchNextPageFA,
    hasNextPage: hasNextPageFA,
  } = useInfiniteQuery(
    'featuredArtworksItems',
    ({ pageParam = 0, querys = 'collection_slug=superchief-gallery-nifty&owner_username=SUPERCHIEF' }) =>
      allQuerysItems({ query: querys, offset: pageParam }),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: lastPage => {
        return lastPage.length >= 20
      },
    }
  )

  const getMoreLiveAuctions = () => {
    const newPages = liveAuctions + 20
    setLiveAuctions(newPages)
    fetchNextPageLA({ pageParam: newPages })
  }

  const {
    data: liveAuctionItems = [],
    isLoading: isLoadingLA,
    isFetching: isFetchingLA,
    fetchNextPage: fetchNextPageLA,
    hasNextPage: hasNextPageLA,
  } = useInfiniteQuery(
    'liveAuctions',
    ({ pageParam = 0, querys = `status=${STATUS_VALUES.onAuction}` }) =>
      allQuerysItems({ query: querys, offset: pageParam }),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: lastPage => {
        return lastPage.length >= 20
      },
    }
  )

  const { data: buyNowItems = [], isLoading: isLoadingBuyNow } =
    useInfiniteQuery(
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

  const getMoreFeaturedArtworks = () => {
    const newPages = featuredArtworks + 20
    setFeaturedArtworks(newPages)
    fetchNextPageFA({ pageParam: newPages })
  }

  const handleFavorite = useCallback(
    (assetId, status, title) => {
      const titles = {
        All: allFeaturedItems.pages,
        Live: liveAuctionItems.pages,
      }
      findArtwork(titles[title], assetId, status)
    },
    [allFeaturedItems.pages, liveAuctionItems.pages]
  )

  return (
    <Layout padding="0">
      <EmailPopUp />
      {isLoadingLA || isLoadingBuyNow ? (
        <Spinner height="50vh" />
      ) : (
        <RotatingCarousel
          artworksCarousel={getCarouselArtworks(liveAuctionItems, buyNowItems)}
          timeout={1000}
          interval={7000}
        />
      )}
      <ArtworkGrid
        title="Featured artworks"
        titleButton="artworks"
        link="/artworks"
      >
        {isLoadingFA ? (
          <Spinner height="50vh" />
        ) : (
          <Grid item container justify="center">
            <Gallery
              isLoading={isFetchingFA}
              handleNext={getMoreFeaturedArtworks}
              pages={allFeaturedItems.pages}
              hasNextPage={hasNextPageFA}
              renderItem={item => (
                <ArtworkItem
                  key={item.assetId}
                  galleryItem={item}
                  onFavorite={(assetId, status) =>
                    handleFavorite(assetId, status, 'All')
                  }
                />
              )}
            />
          </Grid>
        )}
      </ArtworkGrid>

      {/* <ArtworkGrid
        title="Live auctions 🔴"
        titleButton="live auctions"
        link="/artworks"
        icon
      >
        {isLoadingLA ? (
          <Spinner height="50vh" />
        ) : (
          <Grid item container justify="center">
            <Gallery
              isLoading={isFetchingLA}
              handleNext={getMoreLiveAuctions}
              pages={liveAuctionItems.pages}
              hasNextPage={hasNextPageLA}
              renderItem={item => (
                <ArtworkItem
                  key={item.assetId}
                  galleryItem={item}
                  onFavorite={(assetId, status) =>
                    handleFavorite(assetId, status, 'Live')
                  }
                />
              )}
            />
          </Grid>
        )}
      </ArtworkGrid> */}
    </Layout>
  )
}

export default Home
