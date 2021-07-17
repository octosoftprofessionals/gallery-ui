import React from 'react'

import ArtworkItem from './ArtworkItem'
import CreatorsItem from './CreatorItem'

const GalleryItem = ({ itemType, data }) => {
  return (
    <>
      {itemType === 'artworks' ? (
        <ArtworkItem key={data?.assetId} galleryItem={data} />
      ) : itemType === 'creator' ? (
        <CreatorsItem creator={data} />
      ) : (
        ''
      )}
    </>
  )
}

export default GalleryItem
