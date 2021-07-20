import React, { useState } from 'react'
import { useInfiniteQuery } from 'react-query'

import ArtworkGrid from '../components/ArtworkGrid'
import Gallery from '../components/Gallery'
import ArtworkItem from '../components/GalleryItem/ArtworkItem'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import RotatingCarousel from '../components/RotatingCarousel'
import EmailPopUp from '../components/EmailPopUp'
import {
  featuredItemsQuery,
  featuredInfinitItemsQuery,
} from '../services/gallery'
import { GalleryItem } from '../types'

const Home = () => {
  const [offset, setOffset] = useState(0)
  type featureItemsQueryProps = {
    data: GalleryItem[]
    status: 'idle' | 'error' | 'loading' | 'success'
  }

  const {
    data: allFeaturedItems = [],
    isLoading: isAllFeaturedItems,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'featuredItems',
    ({ pageParam = 0 }) => featuredInfinitItemsQuery({ offset: pageParam }),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: lastPage => {
        return lastPage.length >= 20
      },
    }
  )
  const getMore = () => {
    const newPages = offset + 20
    setOffset(newPages)
    fetchNextPage({ pageParam: newPages })
  }

  // const featuredItems = allFeaturedItems.filter(
  //   item => item?.assetId !== heroItem?.assetId
  // )

  // const listedItems = featuredItems.filter(i => i.status === 'listed')
  // const reserveItems = allFeaturedItems.pages.filter(
  //   i => i.status === 'reserve'
  // )
  // console.log('reserveItems :>> ', reserveItems)
  // // const soldItems = featuredItems.filter(i => i.status === 'sold')

  // const isLoading = status === 'loading'

  return (
    <Layout>
      <EmailPopUp />
      {/* {isLoading ? (
        <Spinner height="50vh" />
      ) : (
        <RotatingCarousel
          artworksCarousel={featuredItems.slice(0, 2)}
          timeout={1000}
          interval={7000}
        />
      )} */}
      <ArtworkGrid
        title="Featured artworks"
        titleButton="artworks"
        link="/artworks"
      >
        {isAllFeaturedItems ? (
          <Spinner height="50vh" />
        ) : (
          <Gallery
            isLoading={isFetching}
            handleNext={getMore}
            pages={allFeaturedItems.pages}
            hasNextPage={hasNextPage}
            renderItem={(items, index) => (
              <ArtworkItem key={index} galleryItem={items} />
            )}
          />
        )}
      </ArtworkGrid>

      {/* <ArtworkGrid
        title="Live auctions"
        titleButton="live auctions"
        link="/artworks"
        icon
      >
        {isLoading ? (
          <Spinner height="50vh" />
        ) : (
          <Gallery
            isLoading={isFetching}
            items={listedItems}
            hasNextPage={hasNextPage}
            renderItem={(item, index) => (
              <ArtworkItem key={index} galleryItem={item} />
            )}
          />
        )}
      </ArtworkGrid> */}
    </Layout>
  )
}

export default Home
