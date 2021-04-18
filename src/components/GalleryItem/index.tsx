import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'

import ArtworkDisplay from './ArtworkDisplay'
import { deltaTime, timeFormat } from '../../Utils'
import FooterCardItem from './FooterCardItem'

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
  infoCard: { margin: Theme.spacing(9) },
  containerAvatar: { marginTop: Theme.spacing(9) },
}))

const GalleryItem = ({
  imgUrl,
  price,
  artis,
  titleArt,
  endingIn,
  statesArt,
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
    <Paper variant="elevation" elevation={1} className={classes.root}>
      <div className={classes.img} />
      <Grid item container direction="column" justify="space-around">
        <Grid
          item
          xs={12}
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
        <Grid item xs={12}>
          <FooterCardItem price={price} timer={timer} statesArt={statesArt} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default GalleryItem
