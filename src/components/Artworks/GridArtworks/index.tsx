import React from 'react'
import { useQuery } from 'react-query'

import {
  getArtworkAuctions,
  getHeroArtwork,
} from '../../../services/autionsService'

import TabBar from '../../TabBar'
// import ArtworkGrid from '../../ArtworkGrid'
// import Gallery from '../../../components/Gallery'
import GalleryArtworks from './GalleryArtworks'

const GridArtworks = () => {
  const { data: liveAuctionsQuery, status: statusLiveAuctionsQuery } = useQuery(
    'liveAuctionsQuery',
    getArtworkAuctions
  )

  return (
    <TabBar
      titles={['Live Auction', 'Reserve not met', 'Sold']}
      components={[
        <GalleryArtworks
          itemType="artworks"
          artworksQuery={liveAuctionsQuery}
          statesArt="auction"
        />,
        <GalleryArtworks
          itemType="artworks"
          artworksQuery={liveAuctionsQuery}
          statesArt="reserve"
        />,
        <GalleryArtworks
          itemType="artworks"
          artworksQuery={liveAuctionsQuery}
          statesArt="sold"
        />,
      ]}
    />
  )
}

export default GridArtworks
