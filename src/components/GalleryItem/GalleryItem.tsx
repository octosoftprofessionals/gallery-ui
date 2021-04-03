import React from 'react'

import ArtworkDisplay from '../ArtworkDisplay/ArtworkDisplay'

import classes from './GalleryItem.module.css'

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
  <a className={classes.card} href={`/artwork/show`}>
    <div className={classes.art}>
      <ArtworkDisplay imgUrl={randImg()} videoUrl={randAsset()} />
    </div>
    <div className={classes.info}>
      <div className={classes.artInfo}>
        <h1 className={classes.title}>unnamed</h1>
        <p className={classes.artist}>@jandali</p>
      </div>
      <div className={classes.divider}></div>
      <div className={classes.priceInfo}>
        <p className={classes.amount}>50.00 ETH</p>
      </div>
    </div>
  </a>
)

export default GalleryItem
