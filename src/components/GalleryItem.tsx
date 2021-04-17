import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'

import ArtworkDisplay from './ArtworkDisplay'
import { deltaTime, timeFormat } from '../Utils'

const useStyle = makeStyles(Theme => ({
  root: {},
  img: {
    backgroundImage: props => `url(${props.imgUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '100%',
    borderRadius: Theme.spacing(4, 4, 0, 0),
  },
  footerCard: {
    padding: Theme.spacing(9),
    backgroundColor: Theme.palette.primary.main,
    borderRadius: Theme.spacing(0, 0, 4, 4),
  },
  titels: { color: Theme.palette.text.secondary },
  infoCard: { margin: Theme.spacing(9) },
  containerAvatar: { marginTop: Theme.spacing(9) },
}))

const GalleryItem = ({ imgUrl, price, artis, titleArt, start }) => {
  const [timer, setTimer] = useState('')

  const classes = useStyle({ imgUrl: imgUrl })

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const delta = deltaTime(start)
      if (delta >= 0) {
        setTimer(timeFormat(delta))
      } else {
        clearInterval(timeInterval)
        setTimer('Auction has ended')
      }
    }, 1000)
  }, [])

  return (
    <Paper variant="elevation" elevation={1} className={classes.root}>
      <div className={classes.img} />
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="space-around"
      >
        <Grid
          item
          xs={10}
          container
          justify="flex-start"
          className={classes.infoCard}
        >
          <Typography variant="h5" color="initial">
            {titleArt}
          </Typography>
          <Grid
            item
            xs={12}
            container
            direction="row"
            alignItems="center"
            className={classes.containerAvatar}
          >
            <Avatar alt="avat" src={`${imgUrl}`} />
            <Typography variant="subtitle1" color="initial">
              {artis}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container className={classes.footerCard}>
          <Grid item xs={6} container>
            <Typography variant="caption" className={classes.titels}>
              Current bid
            </Typography>
            <Typography variant="caption" color="secondary">
              {`${price} ETH`}
            </Typography>
          </Grid>
          <Grid item xs={6} container alignItems="flex-start">
            <Grid item xs={12}>
              <Typography variant="caption" className={classes.titels}>
                Ending in
              </Typography>
            </Grid>
            <Typography variant="caption" color="secondary">
              {timer}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default GalleryItem
