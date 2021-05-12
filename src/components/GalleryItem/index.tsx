import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ArtworkItem from './ArtworkItem'
import BlogItem from './BlogItem'
import CreatorsItem from './CreatorsItem'

const useStyle = makeStyles(Theme => ({
  root: {},
}))

const GalleryItem = ({ itemType, artwork, link }) => {
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
          link={link}
          mimeType={artwork.mimeType}
          avatarUrl={artwork.creator.coverImageUrl}
        />
      ) : itemType === 'creator' ? (
        <CreatorsItem
          name={artwork.creator.username}
          imgUrl={artwork.creator.coverImageUrl}
          avatarUrl={artwork.creator.profileImageUrl}
          artis={artwork.creator.name}
          bio={artwork.creator.bio}
          followers={artwork.creator.followers}
          link={link}
        />
      ) : (
        <BlogItem
          link={link}
          imgUrl={artwork.creator.profileImageUrl}
          description={artwork.description}
        />
      )}
    </>
  )
}

export default GalleryItem
