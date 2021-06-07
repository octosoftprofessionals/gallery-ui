import React from 'react'

import { useQuery } from 'react-query'
import { getArtworkAuctions } from '../../../services/autionsService'

import TabBar from '../../TabBar'
import GalleryCreator from '../GridCreator/GalleryCreator'

const GridCreatorAccount = () => {
  const { data: auctionsQuery } = useQuery('auctionsQuery', getArtworkAuctions)

  return <GalleryCreator itemType="artworks" artworksQuery={auctionsQuery} />
}

export default GridCreatorAccount
