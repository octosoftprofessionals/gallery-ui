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
  artwork,
  name,
  imgUrl,
  avatarUrl,
  price,
  artis,
  titleArt,
  endingIn,
  statesArt,
  link,
  creatorsItem,
}) => {
  const classes = useStyle()

  return (
    <>
      {!!creatorsItem ? (
        <CreatorsItem name={name} imgUrl={imgUrl} avatarUrl={avatarUrl} />
      ) : !!artwork ? (
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
      ) : (
        <BlogItem />
      )}
    </>
  )
}

export default GalleryItem
