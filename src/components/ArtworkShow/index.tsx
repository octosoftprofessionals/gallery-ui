import React from 'react'

import ArtworkDisplay from './ArtworkDisplay'
import ArworkDetail from './ArworkDetail'

const ArtworkShow = ({
  imgUrl,
  videoUrl,
  titleArt,
  description,
  namber,
  price,
  money,
  endingIn,
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
        titleArt={titleArt}
        description={description}
        namber={namber}
        price={price}
        money={money}
        endingIn={endingIn}
      />
    </>
  )
}

export default ArtworkShow
