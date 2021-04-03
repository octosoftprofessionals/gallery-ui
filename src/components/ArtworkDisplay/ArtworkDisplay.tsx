import React from 'react'

import classes from './ArtworkDisplay.module.css'

const ArtworkDisplay = ({ imgUrl, videoUrl }) => (
  <video className={classes.displayAsset} poster={imgUrl} src={videoUrl} autoPlay={true} loop={true}>
    <source src={videoUrl} type="video/mp4" />
    <img className={classes.displayAsset} src={imgUrl} />
  </video>
)

export default ArtworkDisplay
