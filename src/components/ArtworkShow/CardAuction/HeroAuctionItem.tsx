import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import {
  Button,
  Divider,
  Grid,
  Hidden,
  Typography,
  withWidth,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { deltaTime, timerArray } from '../../../Utils'

const useStyle = makeStyles(Theme => ({
  root: { padding: Theme.spacing(11, 0) },
  price: { fontSize: Theme.typography.fontSize[6] },
  titlePrice: { fontSize: Theme.typography.fontSize[3] },
  divider: {
    opacity: Theme.palette.action.disabledOpacity[1],
  },
  texTimer: {
    fontSize: Theme.typography.fontSize[3],
    marginTop: Theme.spacing(2),
  },
  button: { borderRadius: Theme.shape.borderRadius[2] },
  textButton: { fontSize: Theme.typography.fontSize[3] },
  numberTimer: { fontSize: Theme.typography.fontSize[6] },
}))

const AuctionItem = ({
  price,
  money,
  endingIn,
  title,
  linkButtonBid,
  linkButtonArtWork,
}) => {
  const [timer, setTimer] = useState(0)
  const [disableInfo, setDisableInfo] = useState(false)
  const [disableHours, setDisableHours] = useState(true)
  const [disableTime, setDisableTime] = useState(true)
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const delta = deltaTime(endingIn)
      if (delta >= 0) {
        setTimer(timerArray(delta))
      } else {
        clearInterval(timeInterval)
        setDisableTime(false)
        setTimer(0)
      }

      let { Hours, Minutes } = timerArray(delta)
      if (Hours <= 0) {
        setDisableHours(false)
      }
      if (Hours <= 0 && Minutes <= 15) {
        setDisableInfo(true)
        setChangeTitle('This auction is ending soon!')
      }
    }, 1000)
  }, [])
  let { Hours, Minutes, Seconds } = timer

  const classes = useStyle({ disableInfo })
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={11}
        container
        direction="row"
        alignContent="center"
        justify="space-between"
        className={classes.root}
      >
        <Grid item xs={12} sm={4} container direction="column">
          <Typography
            variant="button"
            color="primary"
            className={classes.titlePrice}
          >
            Current Bid
          </Typography>
          <Typography
            variant="button"
            color="primary"
            className={classes.price}
          >
            {`${price} ETH`}
          </Typography>
          <Typography variant="caption">{money}</Typography>
        </Grid>
        <Hidden mdDown>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
        </Hidden>
        <Grid item xs={12} sm={6}>
          <Grid item xs={12}>
            <Typography
              variant="button"
              color="primary"
              className={classes.titlePrice}
            >
              Auction ending in
            </Typography>
          </Grid>
          <Grid item xs={11} container direction="row" justify="flex-start">
            <Grid sm={3} style={{ display: disableHours ? 'block' : 'none' }}>
              <Grid container direction="column" alignItems="flex-start">
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.numberTimer}
                >
                  {Hours}
                </Typography>
                <Typography variant="caption" className={classes.texTimer}>
                  Hours
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={3}
              container
              direction="column"
              alignItems="flex-start"
            >
              <Typography
                variant="h5"
                color="primary"
                className={classes.numberTimer}
              >
                {Minutes}
              </Typography>
              <Typography variant="caption" className={classes.texTimer}>
                Minutes
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={3}
              container
              direction="column"
              alignItems="flex-start"
            >
              <Typography
                variant="h5"
                color="primary"
                className={classes.numberTimer}
              >
                {Seconds}
              </Typography>
              <Typography variant="caption" className={classes.texTimer}>
                Seconds
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={11} container direction="row" justify="space-between">
        <Grid item xs={12} sm={6}>
          <Link to={linkButtonBid}>
            <Button variant="contained" fullWidth className={classes.button}>
              <Typography variant="button" className={classes.textButton}>
                Place a bid
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Link to={linkButtonArtWork}>
            <Button variant="outlined" fullWidth className={classes.button}>
              <Typography variant="button" className={classes.textButton}>
                View artwork
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withWidth()(AuctionItem)
