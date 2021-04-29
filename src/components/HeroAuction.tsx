import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import HeroAuctionItem from '../components/ArtworkShow/CardAuction/HeroAuctionItem'
import { boxShadow } from '../components/Styles/Colors'

const useStyle = makeStyles(Theme => ({
  root: { height: `${Theme.spacing(10)}vw`, marginBottom: Theme.spacing(16) },
  container: { height: Theme.spacing(18) },
  img: {
    backgroundImage: ({ imgUrl }) => `url(${imgUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '100%',
    filter: boxShadow.boxShadow3,
  },
}))

const HeroAuction = ({ auction }) => {
  const { artworks, ends_at, current_bid } = auction
  console.log('auction :>> ', auction)
  console.log('object :>> ', artworks.values().next().value)
  const { assetIPFSPath, name, price } = artworks.values().next().value
  console.log('current_bid :>> ', current_bid)

  const classes = useStyle({ imgUrl: assetIPFSPath })
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid
        item
        xs={11}
        container
        justify="space-around"
        className={classes.container}
      >
        <Grid item xs={12} sm={4}>
          <div className={classes.img} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          container
          direction="column"
          justify="space-around"
        >
          <Grid item>CreatorButton</Grid>

          <HeroAuctionItem
            endingIn={ends_at}
            money={price}
            price={current_bid}
            title={name}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HeroAuction
