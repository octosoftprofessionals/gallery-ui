import React from 'react'

import ArtworkDisplay from './ArtworkDisplay'
import ArworkDetail from './ArworkDetail'

const ArtworkShow = ({
  artwork,
  artworkLinks,
  descriptionCreator,
  linkTwitter,
  setDisplayReportModal,
  historyInfo,
}) => {
  const {
    assetIPFSPath,
    mimeType,
    description,
    price,
    duration,
    creator,
    name,
    id,
  } = artwork ? artwork : ''

  return (
    <>
      <ArtworkDisplay assetIPFSPath={assetIPFSPath} mimeType={mimeType} />
      {artwork ? (
        <ArworkDetail
          profileImageUrl={creator.profileImageUrl}
          name={creator.name}
          titleArt={name}
          description={description}
          namber={'1'}
          price={price}
          money={'23,423.99'}
          link={`/bid?id=${id}`}
          linkProfile={`/creator?id=${creator.username}`}
          endingIn={duration}
          artworkLinks={artworkLinks}
          descriptionCreator={descriptionCreator}
          linkTwitter={linkTwitter}
          setDisplayReportModal={setDisplayReportModal}
          historyInfo={historyInfo}
        />
      ) : (
        ''
      )}
    </>
  )
}

export default ArtworkShow
