import React, { useEffect, useState } from 'react'
import Truncate from 'react-truncate'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'
import { deltaTime, timeFormat, isTypeVideo } from '../../Utils/index'
import { GalleryItem } from '../../services/gallery'
import { Box } from '@material-ui/core'
import { artworkPathFrom, profilePathFromAddress } from '../../config/routes'

const useStyle = makeStyles(Theme => ({
  root: {
    position: 'relative',
    borderRadius: '40px',
    /* margin: Theme.spacing(2), */
  },
  img: {
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '140%',
    borderRadius: Theme.spacing(11, 11, 0, 0),
  },
  infoCard: {
    padding: Theme.spacing(9),
    display: 'grid',
    gridGap: Theme.spacing(15),
  },
  containerAvatar: { marginBottom: Theme.spacing(3) },
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
    borderRadius: Theme.spacing(11, 11, 0, 0),
  },
  username: {
    fontFamily: Theme.typography.fontFamily[2],
    paddingLeft: Theme.spacing(2),
  },
}))

const PartnershipItem = ({
  galleryItem: {
    title,
    imageUrl,
    videoUrl,
    assetContractAddress,
    assetTokenId,
    creatorUsername,
    creatorImageUrl,
    status,
    priceEth,
    expiration,
    creatorAddress,
  } = {},
  ...rootProps
}: {
  galleryItem: GalleryItem | undefined
}) => {
  const [timer, setTimer] = useState('')
  const classes = useStyle({ imageUrl })

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const delta = deltaTime(expiration)
      if (delta >= 0) {
        setTimer(timeFormat(delta))
      } else {
        clearInterval(timeInterval)
        setTimer('Auction ended')
      }
    }, 1000)
  }, [])

  const link = artworkPathFrom(assetContractAddress, assetTokenId)

  const CreatorInfo = ({ address, username, imageUrl }) => {
    const classes = useStyle()
    return (
      <div className={classes.containerAvatar}>
        <Grid container direction="row" alignItems="center">
          <Avatar alt="avat" src={imageUrl} />
          <Typography variant="body1" className={classes.username}>
            {`@${username}`}
          </Typography>
        </Grid>
      </div>
    )
  }

  return (
    <Link to={link} className={classes.link} {...rootProps}>
      <Paper variant="elevation" elevation={1} className={classes.root}>
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
                  {/* <source src={videoUrl} type='video/mp4; codecs="vp8, vorbis"' /> */}
                  <img src={imageUrl} />
                </video>
              </div>
            </div>
          ) : (
            <div className={classes.img} />
          )}
        </Box>
        <Link
          to={profilePathFromAddress(creatorAddress)}
          className={classes.link}
        >
          <div className={classes.infoCard}>
            <Typography variant="h5" color="primary">
              <Truncate lines={2}>{title}</Truncate>
            </Typography>
            <CreatorInfo
              imageUrl={creatorImageUrl}
              username={creatorUsername}
            />
          </div>
        </Link>
      </Paper>
    </Link>
  )
}

export default PartnershipItem
