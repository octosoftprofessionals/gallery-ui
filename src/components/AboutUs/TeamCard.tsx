import React, { useEffect, useState } from 'react'
import Truncate from 'react-truncate'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'

import { deltaTime, timeFormat, isTypeVideo } from '../../../Utils'
import FooterCardItem from '../FooterCardItem'
import { GalleryItem } from '../../../services/gallery'
import { Box } from '@material-ui/core'
import { artworkPathFrom } from '../../../config/routes'

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
    padding: Theme.spacing(9),
    paddingBottom: `${Theme.spacing(6)}vh`,
    display: 'grid',
    gridGap: Theme.spacing(9),
    backgroundColor: Theme.palette.card.main,
    borderRadius: Theme.spacing(0, 0, 4, 4),
  },
  containerAvatar: { marginBottom: Theme.spacing(9) },
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
  username: {
    fontFamily: Theme.typography.fontFamily[2],
    paddingLeft: Theme.spacing(2),
  },
}))

const TeamCard = ({
  galleryItem: {
    title,
    imageUrl,

    assetContractAddress,
    assetTokenId,
    creatorUsername,
    creatorImageUrl,
    status,
    priceEth,
    expiration,
  } = {},
  ...rootProps
}: {
  galleryItem: GalleryItem | undefined
}) => {
  /*   const [timer, setTimer] = useState('') */
  const classes = useStyle({ imageUrl })

  /*  useEffect(() => {
    const timeInterval = setInterval(() => {
      const delta = deltaTime(expiration)
      if (delta >= 0) {
        setTimer(timeFormat(delta))
      } else {
        clearInterval(timeInterval)
        setTimer('Auction ended')
      }
    }, 1000)
  }, []) */

  const link = artworkPathFrom(assetContractAddress, assetTokenId)

  const CreatorInfo = ({ username, imageUrl }) => {
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
          <div className={classes.containerVideo}>
            <div className={classes.inVideo}>
              <img src={imageUrl} />
            </div>
          </div>
          <div className={classes.img} />
        </Box>
        <Link to={`/creator/?id=${creatorUsername}`} className={classes.link}>
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
        <FooterCardItem
          statesArt={status}
          price={priceEth}
          timer={timer}
          link={link}
          followers={0}
        />
      </Paper>
    </Link>
  )
}

export default TeamCard
