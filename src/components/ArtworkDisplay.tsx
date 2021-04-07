import React from 'react'
import styled from 'styled-components'

const ArtworkDisplay = ({ imgUrl, videoUrl }) => (
  <AssetVideo poster={imgUrl} src={videoUrl} autoPlay={true} loop={true}>
    <source src={videoUrl} type="video/mp4" />
    <AssetImg src={imgUrl} />
  </AssetVideo>
)

export default ArtworkDisplay

const AssetVideo = styled.video`
  max-width: 100%;
  object-fit: contain;
`

const AssetImg = styled.img`
  max-width: 100%;
  object-fit: contain;
`
