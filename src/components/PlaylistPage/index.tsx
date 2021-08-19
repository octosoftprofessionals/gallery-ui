import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

import Spinner from '../Spinner'
import CarouselPL from './CarouselPL'

import ArtworkInformation from './ArtworkInformation'
import CreatorInfo from '../GalleryItem/ArtworkItem/CreatorInfo'

const imgUrls = [
  'https://f8n-ipfs-production.imgix.net/Qme7ShWfH2GHnbKHo9Vb41PxMwLunLxgKGebF94RzjGhCs/nft.png',
  'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
  'https://f8n-ipfs-production.imgix.net/QmTf4rxGkyryv6Vnm9mFJxWTEXcqjmtgxQXz7m5cqmLFsv/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
  'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg',
]
const randImgUrl = () => {
  return imgUrls[Math.floor(Math.random() * imgUrls.length)]
}
const randIDs = () => {
  return 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
function fillartworkCardAddPlayList(size) {
  const artworkCardAddPlayList = []
  for (let i = 0; i < size; i++) {
    artworkCardAddPlayList.push({
      id: `${randIDs()}`,
      imageUrl: randImgUrl(),
      videoUrl: null,
      inPlaylist: false,
    })
  }
  return artworkCardAddPlayList
}

const useStyles = makeStyles(Theme => ({
  containerDescription: { padding: Theme.spacing(9) },
}))

const index = () => {
  const Itemss = fillartworkCardAddPlayList(7)
  const classes = useStyles()
  return (
    <Grid item xs={12} container alignItems="center" justify="center">
      <CarouselPL artworks={Itemss} xs={6} />

      <Grid
        item
        xs={12}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid container justify="space-around">
          <Grid item xs={5} container direction="column">
            <Typography variant="h4">Title</Typography>
            <CreatorInfo
              username="RogerBC"
              imageUrl={
                'https://f8n-production.imgix.net/creators/profile/c8gley51s-nyan-cat-large-gif-gif-mbf1sa.gif'
              }
            />
          </Grid>
          <Grid item xs={4}>
            <Button>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
              >
                <EditIcon />
                <Typography variant="caption">Edith your playlist</Typography>
              </Grid>
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="space-around" direction="row">
          <Grid item xs={5}>
            <Typography variant="h5"> Description</Typography>
            <Paper className={classes.containerDescription}>
              {
                'Velit laboris magna laborum occaecat. Tempor exercitation veniam est fugiat irure dolor ipsum commodo anim consectetur consectetur irure nisi fugiat. Id qui ad exercitation reprehenderit sit ipsum in ipsum sit sunt esse magna laboris magna laborum occaecat. Tempor exercitation veniam est fugiat irure dolor ipsum commodo anim consectetur consectetur irure nisi fugiat. Id qui ad exercitation reprehenderit sit ipsum in ipsum sit sunt esse magna.'
              }
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">Artwork Information</Typography>
            <ArtworkInformation imageUrl="https://f8n-production.imgix.net/creators/profile/c8gley51s-nyan-cat-large-gif-gif-mbf1sa.gif" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default index
