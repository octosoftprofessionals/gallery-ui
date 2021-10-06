import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import { GalleryItem } from '../../../types'
import { STATUS_VALUES } from '../../../Utils'

import {
  artworkPathFrom,
  profilePathFromAddress,
  biddingPathFrom,
} from '../../../config/routes'

import HeroOfferItem from './HeroOfferItem'
import HeroBuyNowItem from './HeroBuyNowItem'
import HeroOnAuction from './HeroOnAuction'

const useStyle = makeStyles(Theme => ({
  containerInfo: {
    position: 'relative',
    '@media (max-width: 576px)': {
      marginTop: '15vh',
    },
  },
}))

const HeroInfo = ({ galleryItem }: { galleryItem: GalleryItem }) => {
  const {
    assetContractAddress,
    assetTokenId,
    title,
    priceEth,
    priceUsd,
    creatorUsername,
    creatorImageUrl,
    creatorAddress,
    status,
    expiration,
  } = galleryItem

  const classes = useStyle()
  const artworkPath = artworkPathFrom(assetContractAddress, assetTokenId)
  const biddingPath = biddingPathFrom(assetContractAddress, assetTokenId)
  const creatorPath = profilePathFromAddress(creatorAddress)

  const userInfo = {
    username: creatorUsername,
    imageUrl: creatorImageUrl,
    profileUrl: creatorPath,
  }

  return (
    <Grid
      item
      xs={12}
      sm={6}
      container
      direction="column"
      justify="space-around"
      alignContent="center"
      className={classes.containerInfo}
    >
      {status === STATUS_VALUES.onAuction ? (
        <HeroOnAuction
          title={title}
          priceEth={priceEth}
          priceUsd={priceUsd}
          expiration={expiration}
          linkButtonArtWork={artworkPath}
          linkButton={biddingPath}
          userInfo={userInfo}
        />
      ) : status === STATUS_VALUES.buyNow ? (
        <HeroBuyNowItem
          title={title}
          priceEth={priceEth}
          priceUsd={priceUsd}
          linkButtonArtWork={artworkPath}
          linkButton={artworkPath}
          userInfo={userInfo}
        />
      ) : status === STATUS_VALUES.none ? (
        <HeroOfferItem
          title={title}
          priceEth={priceEth}
          priceUsd={priceUsd}
          linkButtonArtWork={artworkPath}
          linkButton={artworkPath}
          userInfo={userInfo}
        />
      ) : null}
    </Grid>
  )
}

export default HeroInfo
