import React from 'react'

import { GalleryItem } from '../../types'

import ArtworkDisplay from './ArtworkDisplay'
import ArtworkDetail from './ArtworkDetail'

const ArtworkShow = ({
  galleryItem,
  linkTwitter,
  setDisplayReportModal,
}: {
  galleryItem: GalleryItem
  linkTwitter: Function
  setDisplayReportModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { imageUrl, videoUrl } = galleryItem

  return (
    <>
      <ArtworkDisplay imageUrl={imageUrl} videoUrl={videoUrl} />
      <ArtworkDetail
        galleryItem={galleryItem}
        linkTwitter={linkTwitter}
        setDisplayReportModal={setDisplayReportModal}
      />
    </>
  )
}

export default ArtworkShow
