import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'

import ArtworkDisplay from './ArtworkDisplay'
import { deltaTime, timeFormat } from '../../../Utils'
import FooterCardItem from './FooterCardItem'

const useStyle = makeStyles(Theme => ({
  root: { position: 'relative' },
  img: {
    backgroundImage: props => `url(${props.imgUrl})`,
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
}))

const ArtworkItem = ({
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
  const classes = useStyle({ imgUrl: imgUrl })

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
    <a href={link} className={classes.link}>
      <Paper variant="elevation" elevation={1} className={classes.root}>
        <div className={classes.img} />
        <div className={classes.infoCard}>
          <Typography variant="h5" color="initial">
            {titleArt}
          </Typography>
          <div className={classes.containerAvatar}>
            <Grid container direction="row" alignItems="center">
              <Avatar alt="avat" src={`${avatarUrl}`} />
              <Typography variant="subtitle1" color="initial">
                {artis}
              </Typography>
            </Grid>
          </div>
        </div>
        <FooterCardItem price={price} timer={timer} statesArt={statesArt} />
      </Paper>
    </a>
  )
}

export default ArtworkItem
