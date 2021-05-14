import React from 'react'
import { useQuery } from 'react-query'

import {
  getArtworkAuctions,
  getHeroArtwork,
} from '../../../services/autionsService'

import TabBar from '../../TabBar'
import ArtworkGrid from '../../ArtworkGrid'
import Gallery from '../../../components/Gallery'

const GridArtworks = () => {
  const { data: liveAuctionsQuery, status: statusLiveAuctionsQuery } = useQuery(
    'liveAuctionsQuery',
    getArtworkAuctions
  )

  return (
    <TabBar
      titles={['Live Auction', 'Reserve not met', 'Sold']}
      components={[
        <ArtworkGrid link="/">
          <Gallery artworksQuery={liveAuctionsQuery} itemType="artworks" />
        </ArtworkGrid>,
        <ArtworkGrid link="/">
          <Gallery artworksQuery={liveAuctionsQuery} itemType="artworks" />
        </ArtworkGrid>,
        <ArtworkGrid link="/">
          <Gallery artworksQuery={liveAuctionsQuery} itemType="artworks" />
        </ArtworkGrid>,
      ]}
    />
  )
}

export default GridArtworks
