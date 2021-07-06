import React from 'react'

import { useQuery } from 'react-query'
import { getArtworkAuctionsPaginated } from '../../../services/autionsService'

import TabBar from '../../TabBar'
import GalleryCreator from './GalleryCreator'

const GridCretor = () => {
  const { data: auctionsQuery } = useQuery(
    'auctionsQuery',
    getArtworkAuctionsPaginated
  )

  return (
    <TabBar
      justify="center"
      sm={9}
      fullWidth
      light
      playlist
      inSize={3}
      titles={['Collected', 'Playlist', 'Favourites']}
      components={[
        <GalleryCreator itemType="artworks" artworksQuery={auctionsQuery} />,
        <GalleryCreator itemType="artworks" artworksQuery={auctionsQuery} />,
        <GalleryCreator itemType="artworks" artworksQuery={auctionsQuery} />,
      ]}
    />
  )
}

export default GridCretor
