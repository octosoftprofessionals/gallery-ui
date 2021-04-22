import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ArtworkItem from './ArtworkItem'
import BlogItem from './BlogItem'
import CreatorsItem from './CreatorsItem'

const useStyle = makeStyles(Theme => ({
  root: {},
}))

const GalleryItem = ({
  itemType,
  name,
  imgUrl,
  avatarUrl,
  price,
  artis,
  titleArt,
  endingIn,
  statesArt,
  link,
  followers,
  bio,
  description,
}) => {
  const classes = useStyle()

  return (
    <>
      {itemType === 'artworks' ? (
        <ArtworkItem
          imgUrl={imgUrl}
          price={price}
          artis={artis}
          titleArt={titleArt}
          endingIn={endingIn}
          statesArt={statesArt}
          link={link}
          avatarUrl={avatarUrl}
        />
      ) : itemType === 'creator' ? (
        <CreatorsItem
          name={name}
          imgUrl={imgUrl}
          avatarUrl={avatarUrl}
          artis={artis}
          bio={bio}
          followers={followers}
          link={link}
        />
      ) : (
        <BlogItem link={link} imgUrl={imgUrl} description={description} />
      )}
    </>
  )
}

export default GalleryItem
