import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'

import { deltaTime, timeFormat } from '../../../Utils'
import FooterCardItem from '../FooterCardItem'

const useStyle = makeStyles(Theme => ({
  root: { position: 'relative' },
  img: {
    backgroundImage: ({ imgUrl }) => `url(${imgUrl})`,
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
}))

const ArtworkItem = ({
  mimeType,
  imgUrl,
  avatarUrl,
  price,
  artis,
  titleArt,
  endingIn,
  statesArt,
  link,
}) => {
  const [timer, setTimer] = useState('')
  const classes = useStyle({ imgUrl })

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const delta = deltaTime(endingIn)
      if (delta >= 0) {
        setTimer(timeFormat(delta))
      } else {
        clearInterval(timeInterval)
        setTimer('Auction has ended')
      }
    }, 1000)
  }, [])

  return (
    <Link to={link} className={classes.link}>
      <Paper variant="elevation" elevation={1} className={classes.root}>
        {mimeType === 'video/mp4' ? (
          <div className={classes.containerVideo}>
            <div className={classes.inVideo}>
              <video
                poster={imgUrl}
                src={imgUrl}
                autoPlay={true}
                loop={true}
                className={classes.video}
                muted={true}
              >
                <source src={imgUrl} type={mimeType} />
                <img src={imgUrl} />
              </video>
            </div>
          </div>
        ) : (
          <div className={classes.img} />
        )}
        <div className={classes.infoCard}>
          <Typography variant="h5" color="primary">
            {titleArt}
          </Typography>
          <div className={classes.containerAvatar}>
            <Grid container direction="row" alignItems="center">
              <Avatar alt="avat" src={`${avatarUrl}`} />
              <Typography variant="subtitle1" color="initial">
                {`@${artis}`}
              </Typography>
            </Grid>
          </div>
        </div>
        <FooterCardItem
          price={price}
          timer={timer}
          statesArt={statesArt}
          link
          followers
        />
      </Paper>
    </Link>
  )
}

export default ArtworkItem
