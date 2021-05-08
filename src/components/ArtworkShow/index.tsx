import React from 'react'

import ArtworkDisplay from './ArtworkDisplay'
import ArworkDetail from './ArworkDetail'

const ArtworkShow = ({
  imgUrl,
  name,
  titleArt,
  description,
  namber,
  price,
  money,
  endingIn,
  linkProfile,
}) => {
  return (
    <>
      <ArtworkDisplay
        imgUrl={imgUrl}
        videoUrl={
          'https://fnd.fleek.co/fnd-prod/QmeKXDYWUvL42en8vH8rz9UYyvLDY71N1ZbRYhK9MHgUDA/nft.mp4'
        }
        mimeType={'video/mp4'}
      />
      <ArworkDetail
        imgUrl={imgUrl}
        name={name}
        titleArt={titleArt}
        description={description}
        namber={namber}
        price={price}
        money={money}
        linkProfile={linkProfile}
        endingIn={endingIn}
      />
    </>
  )
}

export default ArtworkShow
