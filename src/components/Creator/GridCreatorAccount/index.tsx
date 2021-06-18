import React from 'react'

import { useQuery } from 'react-query'
import { getArtworkAuctions } from '../../../services/autionsService'

import EmptyAccount from './EmptyAccount'
import GalleryCreator from '../GridCreator/GalleryCreator'

const GridCreatorAccount = () => {
  const { data: auctionsQuery } = useQuery('auctionsQuery', getArtworkAuctions)

  return auctionsQuery ? (
    <GalleryCreator itemType="artworks" artworksQuery={auctionsQuery} />
  ) : (
    <EmptyAccount />
  )
}

export default GridCreatorAccount
