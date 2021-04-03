import React from 'react'

import classes from './Gallery.module.css'

const randImg = () => {
  const imgs = [
    'https://f8n-ipfs-production.imgix.net/Qme7ShWfH2GHnbKHo9Vb41PxMwLunLxgKGebF94RzjGhCs/nft.png',
    'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
    'https://f8n-ipfs-production.imgix.net/QmTf4rxGkyryv6Vnm9mFJxWTEXcqjmtgxQXz7m5cqmLFsv/nft.jpg',
    'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
    'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
  ]
  return imgs[Math.floor(Math.random() * imgs.length)]
}

const GalleryItem = () => (
  <div className={classes.card}>
    <div className={classes.art}>
      <img src={randImg()} />
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
  </div>
)

const Gallery = ({ items }) => (
  <div className={classes.gallery}>
    {items.map(item => <GalleryItem {...item} />)}
  </div>
)

export default Gallery
