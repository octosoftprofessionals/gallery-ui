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
import { findeArtwork } from '../Utils'
import { featuredInfinitItemsQuery, allQuerysItems } from '../services/gallery'
import { GalleryItem } from '../types'

const Home = () => {
  const [featuredArtworks, setFeaturedArtworks] = useState(0)
  const [liveAuctions, setLiveAuctions] = useState(0)
  type featureItemsQueryProps = {
    data: GalleryItem[]
    status: 'idle' | 'error' | 'loading' | 'success'
  }

  const {
    data: allFeaturedItems = [],
    isLoading: isLoadingFA,
    isFetching: isFetchingFA,
    fetchNextPage: fetchNextPageFA,
    hasNextPage: hasNextPageFA,
  } = useInfiniteQuery(
    'featuredArtworksItemsItems',
    ({ pageParam = 0 }) => featuredInfinitItemsQuery({ offset: pageParam }),
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
  console.log('allFeaturedItems:', allFeaturedItems)

  const {
    data: liveAcutionItems = [],
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

  const getMoreFeaturedArtworks = () => {
    const newPages = featuredArtworks + 20
    setFeaturedArtworks(newPages)
    fetchNextPageFA({ pageParam: newPages })
  }

  const handleFavorite = useCallback(
    (assetId, status, title) => {
      const titles = {
        All: allFeaturedItems.pages,
        Live: liveAcutionItems.pages,
      }
      findeArtwork(titles[title], assetId, status)
    },
    [allFeaturedItems.pages, liveAcutionItems.pages]
  )

  return (
    <Layout>
      <EmailPopUp />
      {isLoadingFA ? (
        <Spinner height="50vh" />
      ) : (
        <RotatingCarousel
          artworksCarousel={allFeaturedItems?.pages && allFeaturedItems?.pages[0].slice(0, 2)}
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

      <ArtworkGrid
        title="Live auctions"
        titleButton="live auctions"
        link="/artworks"
        icon
      >
        {isLoadingLA ? (
          <Spinner height="50vh" />
        ) : (
          <Gallery
            isLoading={isFetchingLA}
            handleNext={getMoreLiveAuctions}
            pages={liveAcutionItems.pages}
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
        )}
      </ArtworkGrid>
    </Layout>
  )
}

export default Home
