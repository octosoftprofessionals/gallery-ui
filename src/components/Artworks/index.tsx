import React from 'react'
import { useQuery } from 'react-query'
import { CircularProgress } from '@material-ui/core'

import {
  getArtworkAuctions,
  getHeroArtwork,
} from '../../services/autionsService'
import { featuredItemsQuery } from '../../services/gallery'

import TabBar from '../TabBar'
// import ArtworkGrid from '../../ArtworkGrid'
// import Gallery from '../../../components/Gallery'
import GalleryArtworks from './GalleryArtworks'

const GridArtworks = () => {
  const { data: featuredItems = [], isLoading, status: statusFeaturedItemsQuery } = useQuery(
    'featuredItemsQuery',
    featuredItemsQuery,
  )

  console.log('featuredItems:', featuredItems)
  console.log('featuredItems.map(i => i.status):', featuredItems.map(i => i.status))

  const listedItems = featuredItems.filter(i => i.status === 'listed')
  const reserveItems = featuredItems.filter(i => i.status === 'reserve')
  const soldItems = featuredItems.filter(i => i.status === 'sold')

  return (
    <TabBar
      titles={['Live Auction', 'Reserve not met', 'Sold']}
      components={[
        <GalleryArtworks
          isLoading={isLoading}
          data={listedItems}
        />,
        <GalleryArtworks
          isLoading={isLoading}
          data={reserveItems}
        />,
        <GalleryArtworks
          isLoading={isLoading}
          data={soldItems}
        />,
      ]}
    />
  )
}

export default GridArtworks
