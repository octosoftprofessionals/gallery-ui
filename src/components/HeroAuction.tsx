import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import HeroAuctionItem from '../components/ArtworkShow/CardAuction/HeroAuctionItem'
import { boxShadow } from '../components/Styles/Colors'

const useStyle = makeStyles(Theme => ({
  root: {
    flex: 1,
    margin: Theme.spacing(11, 0),
  },
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
  const { assetIPFSPath, name, price } = artworks.values().next().value

  const classes = useStyle({ imgUrl: assetIPFSPath })
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} md={11} container justify="space-around">
          <Grid item xs={12} sm={5} md={4}>
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
    </div>
  )
}

export default HeroAuction
