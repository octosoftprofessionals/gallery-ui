import React from 'react'
import styled from 'styled-components'

import ArtworkDisplay from './ArtworkDisplay'

const videoUrls = [
  'http://localhost:8000/float.mp4',
]

const imgUrls = [
  'https://f8n-ipfs-production.imgix.net/Qme7ShWfH2GHnbKHo9Vb41PxMwLunLxgKGebF94RzjGhCs/nft.png',
  'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
  'https://f8n-ipfs-production.imgix.net/QmTf4rxGkyryv6Vnm9mFJxWTEXcqjmtgxQXz7m5cqmLFsv/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
  // 'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg',
]

const randAsset = () => {
  const assetUrls = imgUrls.concat(videoUrls)
  return assetUrls[Math.floor(Math.random() * assetUrls.length)]
}

const randImg = () => {
  return imgUrls[Math.floor(Math.random() * imgUrls.length)]
}

const GalleryItem = () => (
  <CardLink href={`/artwork/show`}>
    <ArtworkDisplayContainer>
      <ArtworkDisplay imgUrl={randImg()} videoUrl={randAsset()} />
    </ArtworkDisplayContainer>
    <InfoContainer>
      <div>
        <h1>unnamed</h1>
        <p>@jandali</p>
      </div>
      <Divider />
      <div>
        <AmountText>50.00 ETH</AmountText>
      </div>
    </InfoContainer>
  </CardLink>
)

export default GalleryItem

const ArtworkDisplayContainer = styled.div`
  width: 280px;
  height: 240px;
  overflow: hidden;
  transition: all 400ms;

  img {
    width: 280px;
    height: 240px;
    object-fit: cover;
    overflow: hidden;
    z-index: 1;
    transition: all 400ms;
  }
`;

const CardLink = styled.a`
  display: block;
  text-decoration: none;
  color: black;
  box-shadow: 0px 0px 5px 0px #ccc;
  margin-right: 1em;
  margin-bottom: 1.5em;
  transition: all 400ms;

  &:hover {
    border-radius: 12px;
    box-shadow: 0px 0px 12px 0px #999;
    position: relative;
    transform: translateY(-3px);
    transition: all 400ms;
  }

  &:hover ${ArtworkDisplayContainer},
  &:hover ${ArtworkDisplayContainer} img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: all 400ms;
  }
`;

const InfoContainer = styled.div`
  padding: 0 24px 24px;
`;

const Divider = styled.div`
  border-bottom: 1px solid #ccc;
  margin: 24px 0;
`;

const AmountText = styled.p`
  margin: 0;
`;
