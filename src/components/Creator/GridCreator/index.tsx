import React from 'react'

import { useQuery } from 'react-query'
import { getArtworkAuctions } from '../../../services/autionsService'

import TabBar from '../../TabBar'
import GalleryCreator from './GalleryCreator'

const GridCretor = () => {
  const { data: auctionsQuery } = useQuery('auctionsQuery', getArtworkAuctions)

  return (
    <TabBar>
      {auctionsQuery ? (
        <GalleryCreator itemType="artworks" artworksQuery={auctionsQuery} />
      ) : (
        ''
      )}
    </TabBar>
  )
}

export default GridCretor
