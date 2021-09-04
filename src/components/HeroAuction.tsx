import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import HeroAuctionItem from '../components/ArtworkShow/ArtworkDetail/CardAuction/HeroAuctionItem'
import { boxShadow } from '../components/Styles/Colors'

import {
  artworkPathFrom,
  profilePathFromAddress,
  biddingPathFrom,
} from '../config/routes'

import CreatorButton from './CreatorButton'
import { GalleryItem } from '../types'

const useStyle = makeStyles(Theme => ({
  root: {
    flex: 1,
    margin: Theme.spacing(11, 0),
    '@media (max-width: 576px)': {
      marginTop: '0px',
    },
  },
  containerAsset: {
    position: 'relative',
    paddingBottom: '100%',
    filter: boxShadow.boxShadow3,
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  containerInfo: {
    position: 'relative',
    '@media (max-width: 576px)': {
      marginTop: '15vh',
    },
  },
}))

const HeroAuction = ({
  galleryItem = {},
  isLoading,
}: {
  galleryItem: GalleryItem
  isLoading: boolean
}) => {
  const {
    assetContractAddress,
    assetTokenId,
    title,
    imageUrl,
    imagePreviewUrl,
    videoUrl,
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

  return (
    <div className={classes.root}>
      {galleryItem ? (
        <Grid container justify="center" alignItems="center">
          <Grid
            item
            xs={12}
            md={11}
            container
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={12} sm={5} md={4}>
              <div className={classes.containerAsset}>
                <video
                  poster={imagePreviewUrl}
                  src={videoUrl}
                  autoPlay={true}
                  loop={true}
                  className={classes.video}
                  muted={true}
                >
                  <img src={imagePreviewUrl} />
                </video>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              container
              direction="column"
              justify="space-around"
              className={classes.containerInfo}
            >
              <CreatorButton
                username={creatorUsername}
                imageUrl={creatorImageUrl}
                profileUrl={creatorPath}
                top="-70px"
              />

              <HeroAuctionItem
                title={title}
                priceEth={priceEth}
                priceUsd={priceUsd}
                expiration={expiration}
                linkButtonArtWork={artworkPath}
                linkButtonBid={biddingPath}
                isLoading={isLoading}
              />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
    </div>
  )
}

export default HeroAuction
