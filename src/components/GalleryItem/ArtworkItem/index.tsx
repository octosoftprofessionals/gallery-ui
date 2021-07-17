import React, { useEffect, useState } from 'react'
import Truncate from 'react-truncate'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Paper, Typography } from '@material-ui/core'

import { GalleryItem } from '../../../services/gallery'
import { artworkPathFrom, profilePathFromAddress } from '../../../config/routes'
import { deltaTime, timeFormat } from '../../../Utils'
import FooterCardItem from '../FooterCardItem'

import CreatorInfo from './CreatorInfo'

const useStyle = makeStyles(Theme => ({
  root: { position: 'relative' },
  img: {
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
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
      paddingBottom: `${Theme.spacing(6)}vh`,
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
}))

const ArtworkItem = ({
  galleryItem = {},
  ...rootProps
}: {
  galleryItem: GalleryItem | undefined
}) => {
  const {
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
  } = galleryItem

  const [timer, setTimer] = useState('')
  const classes = useStyle({ imageUrl })

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const delta = deltaTime(expiration)
      if (delta >= 0) {
        setTimer(`Ending in ${timeFormat(delta)}`)
      } else {
        clearInterval(timeInterval)
        setTimer('Auction ended')
      }
    }, 1000)
  }, [])

  const link = artworkPathFrom(assetContractAddress, assetTokenId)

  return (
    <Paper variant="elevation" elevation={1} className={classes.root}>
      <Link to={link} className={classes.link} {...rootProps}>
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
      <Link
        to={profilePathFromAddress(creatorAddress)}
        className={classes.link}
      >
        <div className={classes.infoCard}>
          <Typography variant="h6" color="primary">
            <Truncate lines={2}>{title}</Truncate>
          </Typography>
          <CreatorInfo imageUrl={creatorImageUrl} username={creatorUsername} />
        </div>
      </Link>
      <FooterCardItem statesArt={status} price={priceEth} timer={timer} />
    </Paper>
  )
}

export default ArtworkItem
