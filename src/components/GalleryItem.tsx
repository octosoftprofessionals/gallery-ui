import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'

import ArtworkDisplay from './ArtworkDisplay'
import { title } from 'node:process'

const videoUrls = ['http://localhost:8000/float.mp4']

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

const useStyle = makeStyles(Theme => ({
  root: {},
  img: {
    backgroundImage: props => `url(${props.imgUrls})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '100%',
    borderRadius: Theme.spacing(4, 4, 0, 0),
  },
  footerCard: {
    padding: Theme.spacing(9),
    backgroundColor: Theme.palette.primary.main,
    borderRadius: Theme.spacing(0, 0, 4, 4),
  },
  titels: { color: Theme.palette.text.secondary },
  infoCard: { margin: Theme.spacing(9) },
  containerAvatar: { marginTop: Theme.spacing(9) },
}))

const GalleryItem = ({}) => {
  const classes = useStyle({ imgUrls: randImg() })
  const price = '5.00'
  const hour = 12
  const min = 21
  const sec = 45
  const artis = '@ArtisName'
  const title = 'Unname'
  return (
    <>
      <Paper variant="elevation" elevation={1} className={classes.root}>
        <div className={classes.img} />
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justify="space-around"
        >
          <Grid
            item
            xs={10}
            container
            justify="flex-start"
            className={classes.infoCard}
          >
            <Typography variant="h5" color="initial">
              {title}
            </Typography>
            <Grid
              item
              xs={12}
              container
              direction="row"
              alignItems="center"
              className={classes.containerAvatar}
            >
              <Avatar alt="avat" src={`${randImg()}`} />
              <Typography variant="subtitle1" color="initial">
                {artis}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container className={classes.footerCard}>
            <Grid item xs={6} container>
              <Typography variant="caption" className={classes.titels}>
                Current bid
              </Typography>
              <Typography variant="caption" color="secondary">
                {`${price} ETH`}
              </Typography>
            </Grid>
            <Grid item xs={6} container alignItems="flex-start">
              <Typography variant="caption" className={classes.titels}>
                Ending in
              </Typography>
              <Typography variant="caption" color="secondary">
                {`${hour}h ${min}m ${sec}s`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default GalleryItem
