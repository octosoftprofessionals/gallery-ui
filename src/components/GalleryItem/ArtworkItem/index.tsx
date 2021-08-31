import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { useMutation } from 'react-query'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Paper, Typography } from '@material-ui/core'

import { GalleryItem } from '../../../types'
import {
  createAssociationFavoritesArtworks,
  deleteOneFavoriteArtworkFromOneUser,
} from '../../../services/favorites'
import { useAccountStore } from '../../../hooks/useAccountStore'
import {
  artworkPathFrom,
  profilePathFromAddress,
  biddingPathFrom,
} from '../../../config/routes'
import { deltaTime, timeFormat } from '../../../Utils'
import FooterCardItem from '../FooterCardItem'

import CreatorInfo from './CreatorInfo'

const useStyle = makeStyles(Theme => ({
  root: {
    position: 'relative',
    transition: 'all 300ms cubic-bezier(0.23,1,0.32,1)',
  },
  img: {
    backgroundImage: ({ imageUrl }: { imageUrl: string }) => `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '100%',
    borderRadius: Theme.spacing(4, 4, 0, 0),
  },
  infoCard: {
    padding: Theme.spacing(3, 9),
    paddingBottom: `${Theme.spacing(9)}vh`,
    display: 'grid',
    gridGap: Theme.spacing(3),
    backgroundColor: Theme.palette.card.main,
    borderRadius: Theme.spacing(0, 0, 4, 4),
    '@media (max-width: 576px)': {
      paddingBottom: `${Theme.spacing(8)}vh`,
    },
  },
  link: { textDecoration: 'none' },
  containerVideo: { position: 'relative', paddingBottom: '100%' },
  inVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    display: 'flex',
  },
  video: {
    display: 'block',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: Theme.spacing(4, 4, 0, 0),
  },
  line: {
    display: 'box',
    lineClamp: 2,
    boxOrient: 'vertical',
    overflow: 'hidden',
    height: Theme.spacing(15),
    '@media (max-width: 576px)': {
      lineClamp: 1,
    },
  },
}))

const ArtworkItem = ({
  galleryItem = {},
  onFavorite,
  ...rootProps
}: {
  galleryItem: GalleryItem | undefined
  onFavorite: Function
}) => {
  const {
    id,
    assetId,
    title,
    imageUrl,
    videoUrl,
    assetContractAddress,
    assetTokenId,
    creatorAddress,
    creatorUsername,
    creatorImageUrl,
    status,
    priceEth,
    expiration,
    isFavorite,
  } = galleryItem

  const [timer, setTimer] = useState('')
  const classes = useStyle({ imageUrl })
  const [account, _] = useAccountStore()

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const delta = deltaTime(expiration)
      if (delta >= 0) {
        setTimer(`Ending in \n ${timeFormat(delta)}`)
      } else {
        clearInterval(timeInterval)
        setTimer('Auction ended')
      }
    }, 1000)
  }, [])

  const linkArtworkShow = artworkPathFrom(assetContractAddress, assetTokenId)
  const linkProfileCreator = profilePathFromAddress(creatorAddress)
  const linkOffer = biddingPathFrom(assetContractAddress, assetTokenId)
  const favoritesMutation = useMutation(createAssociationFavoritesArtworks)
  const unFavoritesMutation = useMutation(deleteOneFavoriteArtworkFromOneUser)

  const handleSubmitFavorite = e => {
    e.preventDefault()
    favoritesMutation.mutate({
      public_address: account as string,
      asset_id: assetId,
    })
    onFavorite(assetId, true)
  }
  const handleSubmitUnFavorite = e => {
    e.preventDefault()
    unFavoritesMutation.mutate({
      public_address: account as string,
      asset_id: assetId,
    })
    onFavorite(assetId, false)
  }

  const handleSubmitPlaylist = e => {
    e.preventDefault()
  }
  const handleSubmitUnPlaylist = e => {
    e.preventDefault()
  }

  return (
    <Paper variant="elevation" elevation={1} className={classes.root}>
      <Link to={linkArtworkShow} className={classes.link} {...rootProps}>
        <Box>
          {videoUrl != null && videoUrl.length > 0 ? (
            <div className={classes.containerVideo}>
              <div className={classes.inVideo}>
                <video
                  poster={imageUrl}
                  src={'' ?? videoUrl}
                  autoPlay={true}
                  loop={true}
                  className={classes.video}
                  muted={true}
                >
                  <img src={imageUrl} />
                </video>
              </div>
            </div>
          ) : (
            <div className={classes.img} />
          )}
        </Box>
      </Link>
      <Link to={linkProfileCreator} className={classes.link}>
        <div className={classes.infoCard}>
          <Typography variant="h6" color="primary" className={classes.line}>
            {title}
          </Typography>
          <CreatorInfo imageUrl={creatorImageUrl} username={creatorUsername} />
        </div>
      </Link>
      <FooterCardItem
        statesArt={status}
        price={priceEth}
        timer={timer}
        handleSubmitPlaylist={handleSubmitPlaylist}
        handleSubmitUnPlaylist={handleSubmitUnPlaylist}
        handleSubmitFavorite={handleSubmitFavorite}
        handleSubmitUnFavorite={handleSubmitUnFavorite}
        isFavorite={isFavorite}
        account={account}
        artworkId={id}
        linkOffer={linkOffer}
      />
    </Paper>
  )
}

export default ArtworkItem
