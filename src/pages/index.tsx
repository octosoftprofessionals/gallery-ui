import React from 'react'
import { useQuery } from 'react-query'

import ArtworkGrid from '../components/ArtworkGrid'
import Gallery from '../components/Gallery'
import ArtworkItem from '../components/GalleryItem/ArtworkItem'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import RotatingCarousel from '../components/RotatingCarousel'
import EmailPopUp from '../components/EmailPopUp'
import { featuredItemsQuery } from '../services/gallery'
import { GalleryItem } from '../types'

const Home = () => {
  type featureItemsQueryProps = {
    data: GalleryItem[]
    status: 'idle' | 'error' | 'loading' | 'success'
  }

  const {
    data: allFeaturedItems = [],
    status,
  }: featureItemsQueryProps = useQuery('FeaturedItems', featuredItemsQuery)

  const heroItem = allFeaturedItems[0]
  const featuredItems = allFeaturedItems.filter(
    item => item?.assetId !== heroItem?.assetId
  )

  const listedItems = featuredItems.filter(i => i.status === 'listed')
  const reserveItems = featuredItems.filter(i => i.status === 'reserve')
  // const soldItems = featuredItems.filter(i => i.status === 'sold')

  const isLoading = status === 'loading'

  return (
    <Layout>
      <EmailPopUp></EmailPopUp>
      {isLoading ? (
        <Spinner height="50vh" />
      ) : (
        <RotatingCarousel
          artworksCarousel={featuredItems.slice(0, 2)}
          timeout={1000}
          interval={7000}
          // theme="dark"
        />
      )}
      <ArtworkGrid
        title="Featured artworks"
        titleButton="artworks"
        link="/artworks"
      >
        {isLoading ? (
          <Spinner height="50vh" />
        ) : (
          <Gallery
            isLoading={isLoading}
            items={reserveItems}
            renderItem={(item, index) => (
              <ArtworkItem key={index} galleryItem={item} />
            )}
          />
        )}
      </ArtworkGrid>

      <ArtworkGrid
        title="Live auctions"
        titleButton="live auctions"
        link="/artworks"
        icon
      >
        {isLoading ? (
          <Spinner height="60vh" />
        ) : (
          <Gallery
            isLoading={isLoading}
            items={listedItems}
            renderItem={(item, index) => (
              <ArtworkItem key={index} galleryItem={item} />
            )}
          />
        )}
      </ArtworkGrid>
    </Layout>
  )
}

export default Home
