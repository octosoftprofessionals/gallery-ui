import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ArtworkDisplay from './ArtworkDisplay'
import ArtworkItem from './ArtworkItem'
import BlogItem from './BlogItem'
import CreatorsItem from './CreatorsItem'

const useStyle = makeStyles(Theme => ({
  root: {},
}))

const GalleryItem = ({
  typeItem,
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
}) => {
  const classes = useStyle()

  return (
    <>
      {typeItem === 'artworks' ? (
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
      ) : typeItem === 'creator' ? (
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
        <BlogItem link={link} imgUrl={imgUrl} />
      )}
    </>
  )
}

export default GalleryItem
