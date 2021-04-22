import React from 'react'

import ArtworkDisplay from './ArtworkDisplay'
import ArworkDetail from './ArworkDetail'

const ArtworkShow = ({ imgUrl, videoUrl, titleArt, description, namber }) => {
  return (
    <>
      <ArtworkDisplay imgUrl={imgUrl} videoUrl={videoUrl} />
      <ArworkDetail
        titleArt={titleArt}
        description={description}
        namber={namber}
      />
    </>
  )
}

export default ArtworkShow
