import React from 'react'
import ArtworkDisplay from './ArtworkDisplay'
import ArtworkDetail from './ArworkDetail'

const ArtworkShow = ({
  galleryItem,
  artworkLinks,
  creatorDescription,
  linkTwitter,
  setDisplayReportModal,
}) => {
  const { imageUrl, videoUrl, mimeType } = galleryItem

  return (
    <>
      <ArtworkDisplay
        imageUrl={imageUrl}
        videoUrl={videoUrl}
        mimeType={mimeType}
      />
      <ArtworkDetail
        galleryItem={galleryItem}
        artworkLinks={artworkLinks}
        linkTwitter={linkTwitter}
        setDisplayReportModal={setDisplayReportModal}
      />
    </>
  )
}

export default ArtworkShow
