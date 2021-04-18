import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'

import ArtworkDisplay from './ArtworkDisplay'
import { deltaTime, timeFormat } from '../../../Utils'
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
      console.log('de :>> ', delta)
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
              <Avatar alt="avat" src={`${avatarUrl}`} />
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
    </Link>
  )
}

export default ArtworkItem
