import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ArtworkItem from './ArtworkItem'
import CreatorsItem from './CreatorsItem'

const useStyle = makeStyles(Theme => ({
  root: {},
}))

const GalleryItem = ({ itemType, artwork, creator }) => {
  const classes = useStyle()

  return (
    <>
      {itemType === 'artworks' ? (
        <ArtworkItem
          key={artwork.assetId}
          assetIPFSPath={artwork.assetIPFSPath}
          assetIPFSPreview={artwork.assetIPFSPreview}
          price={artwork.price}
          artis={artwork.creator.username}
          titleArt={artwork.name}
          endingIn={artwork.duration}
          statesArt={artwork.assetStatus}
          link={`/artwork?id=${artwork.id}`}
          mimeType={artwork.mimeType}
          avatarUrl={artwork.creator.coverImageUrl}
        />
      ) : itemType === 'creator' ? (
        <CreatorsItem creator={creator} />
      ) : (
            ''
          )}
    </>
  )
}

export default GalleryItem
