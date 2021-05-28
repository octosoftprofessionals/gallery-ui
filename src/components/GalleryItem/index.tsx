import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ArtworkItem from './ArtworkItem'
import BlogItem from './BlogItem'
import CreatorsItem from './CreatorItem'

const useStyle = makeStyles(Theme => ({
  root: {},
}))

// const GalleryItem = ({ itemType, artwork, creator }) => {
const GalleryItem = ({ itemType, data, link }) => {
  const classes = useStyle()

  return (
    <>
      {itemType === 'artworks' ? (
        <ArtworkItem
          key={data?.assetId}
          galleryItem={data}
        />
      ) : itemType === 'creator' ? (
        <CreatorsItem creator={data} />
        // <CreatorsItem
        //   name={data?.creator.username}
        //   imgUrl={data?.creator.coverImageUrl}
        //   avatarUrl={data?.creator.profileImageUrl}
        //   artis={data?.creator.name}
        //   bio={data?.creator.bio}
        //   followers={data?.creator.followers}
        //   link={link}
        // />
      ) : (
        <BlogItem
          link={link}
          imgUrl={data?.creator.profileImageUrl}
          description={data?.description}
        />
      )}
    </>
  )
}

export default GalleryItem
