import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const videoUrls = ['http://localhost:8000/float.mp4']
const stateArt = ['auction', 'reserve', 'sold']
const endingInArt = [
  '2021/06/19 11:43:00 AM',
  '2021/04/17 11:43:00 PM',
  '2021/04/18 01:13:30 PM',
  '2021/04/26 11:39:50 AM',
]
const followersArt = ['13', '45', '123', '509582']
const priceArt = [
  '5.567',
  '15.234',
  '0.11',
  '0.521',
  '0.1520',
  '2.1020',
  '1.670',
  '4.240',
  '0.001',
  '',
]

const bioArt = [
  'Eiusmod veniam Lorem anim aliquip reprehenderit proident mollit adipisicing aute labore et. Lorem dolor elit enim culpa anim. Fugiat pariatur proident occaecat dolor enim aute duis. Pariatur dolore nostrud cillum ullamco. Et incididunt veniam qui excepteur irure dolore quis do. Do Lorem amet deserunt do exercitation cillum eu. Sit cillum nostrud qui pariatur aliqua.',

  'Cillum sunt anim ut irure fugiat irure occaecat sint anim ullamco est elit minim commodo. Ullamco ea duis labore culpa sint culpa reprehenderit dolor irure ea aute ex reprehenderit. Officia ex ex occaecat adipisicing ullamco fugiat sit fugiat ex consectetur voluptate aliquip. Aute irure veniam non ipsum esse ullamco dolore duis in eu consequat culpa deserunt cupidatat. Dolore cupidatat dolore tempor excepteur ea. Esse nisi officia ullamco velit labore consequat. Dolore labore reprehenderit aute qui enim voluptate irure anim consectetur ea et elit nostrud exercitation.',

  'Eiusmod aliquip labore sint ex magna incididunt labore. Ipsum tempor culpa nisi qui consectetur labore irure aute dolor veniam nisi cillum fugiat voluptate. Aliquip ut dolor do magna dolor voluptate reprehenderit ea magna excepteur in.',
]

const imgUrls = [
  'https://f8n-ipfs-production.imgix.net/Qme7ShWfH2GHnbKHo9Vb41PxMwLunLxgKGebF94RzjGhCs/nft.png',
  'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
  'https://f8n-ipfs-production.imgix.net/QmTf4rxGkyryv6Vnm9mFJxWTEXcqjmtgxQXz7m5cqmLFsv/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
  // 'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg',
]
const randEndingInArt = () => {
  const endingIn = endingInArt[Math.floor(Math.random() * endingInArt.length)]
  return new Date(endingIn)
}

const randAsset = () => {
  const assetUrls = imgUrls.concat(videoUrls)
  return assetUrls[Math.floor(Math.random() * assetUrls.length)]
}

const randImg = () => {
  return imgUrls[Math.floor(Math.random() * imgUrls.length)]
}

const randStateArt = () => {
  return stateArt[Math.floor(Math.random() * stateArt.length)]
}

const randPriceArt = () => {
  return priceArt[Math.floor(Math.random() * priceArt.length)]
}

const randBioArt = () => {
  return bioArt[Math.floor(Math.random() * bioArt.length)]
}

const randFollowersArt = () => {
  return followersArt[Math.floor(Math.random() * followersArt.length)]
}

import GalleryItem from './GalleryItem'

const useStyle = makeStyles(Theme => ({
  root: {},
  containerItem: { padding: Theme.spacing(4) },
}))

const Gallery = ({ artworksQuery, itemType }) => {
  const { artworks } = artworksQuery ? artworksQuery : []
  const classes = useStyle()
  return (
    <Grid container direction="row" justify="space-around" wrap="wrap">
      {artworks
        ? artworks.map((artwork, index) => (
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
                itemType={itemType}
                artwork={artwork}
                link={'/artwork/show'}
              />
            </Grid>
          ))
        : ''}
    </Grid>
  )
}

export default Gallery
