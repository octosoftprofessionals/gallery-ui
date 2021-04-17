import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const videoUrls = ['http://localhost:8000/float.mp4']

const imgUrls = [
  'https://f8n-ipfs-production.imgix.net/Qme7ShWfH2GHnbKHo9Vb41PxMwLunLxgKGebF94RzjGhCs/nft.png',
  'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
  'https://f8n-ipfs-production.imgix.net/QmTf4rxGkyryv6Vnm9mFJxWTEXcqjmtgxQXz7m5cqmLFsv/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
  // 'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg',
]

const start = new Date('2021/04/16 11:43:00 PM')

const randAsset = () => {
  const assetUrls = imgUrls.concat(videoUrls)
  return assetUrls[Math.floor(Math.random() * assetUrls.length)]
}

const randImg = () => {
  return imgUrls[Math.floor(Math.random() * imgUrls.length)]
}

import GalleryItem from './GalleryItem'

const useStyle = makeStyles(Theme => ({
  root: {},
  containerItem: { padding: Theme.spacing(4) },
}))

const Gallery = ({ items }) => {
  const classes = useStyle()
  return (
    <Grid container direction="row" justify="space-around" wrap="wrap">
      {items.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className={classes.containerItem}
        >
          <GalleryItem
            key={index}
            {...item}
            imgUrl={randImg()}
            price={'5.00'}
            artis={'@ArtisName'}
            titleArt={'Unname'}
            start={start}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Gallery
