import React from 'react'

import ArtworkDisplay from './ArtworkDisplay'
import ArworkDetail from './ArworkDetail'

const ArtworkShow = ({
<<<<<<< HEAD
  imgUrl,
  name,
  titleArt,
  description,
  namber,
  price,
  money,
  endingIn,
  linkProfile,
=======
  artwork,
  artworkLinks,
  descriptionCreator,
>>>>>>> a7f302e313b0f83cac450d223c58a2a225b1ff1e
  linkTwitter,
  setDisplayReportModal,
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
<<<<<<< HEAD
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
        linkTwitter={linkTwitter}
        setDisplayReportModal={setDisplayReportModal}
      />
=======
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
          linkProfile={`/creator/?id=${id}`}
          endingIn={duration}
          artworkLinks={artworkLinks}
          descriptionCreator={descriptionCreator}
          linkTwitter={linkTwitter}
          setDisplayReportModal={setDisplayReportModal}
        />
      ) : (
        ''
      )}
>>>>>>> a7f302e313b0f83cac450d223c58a2a225b1ff1e
    </>
  )
}

export default ArtworkShow
