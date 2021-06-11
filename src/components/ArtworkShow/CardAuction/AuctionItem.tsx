import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import {
  Button,
  Divider,
  Grid,
  Hidden,
  Paper,
  Typography,
  withWidth,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { deltaTime, formatUsd, formatDecimal, timerArray } from '../../../Utils'

const useStyle = makeStyles(Theme => ({
  root: { padding: Theme.spacing(11) },
  price: { fontSize: Theme.typography.fontSize[6] },
  titlePrice: { fontSize: Theme.typography.fontSize[3] },
  divider: {
    opacity: Theme.palette.action.disabledOpacity[1],
  },
  infoAution: {
    display: ({ disableInfo }) => (disableInfo ? 'block' : 'none'),
  },
  texTimer: {
    fontSize: Theme.typography.fontSize[3],
    marginTop: Theme.spacing(2),
  },
  button: { borderRadius: Theme.shape.borderRadius[2] },
  textButton: { fontSize: Theme.typography.fontSize[3] },
  link: { textDecoration: 'none' },
}))

const AuctionItem = ({ priceEth, priceUsd, expiration, link }) => {
  const [timer, setTimer] = useState(0)
  const [changeTitle, setChangeTitle] = useState('Auction ending in')
  const [variantButton, setVariantButton] = useState('contained')
  const [textButton, setTextButton] = useState('Place a bid')
  const [infoAution, setInfoAution] = useState(
    'Any bids placed in the last 15 minutes will extend the auction for another 15 minutes.'
  )
  const [disableInfo, setDisableInfo] = useState(false)
  const [disableHours, setDisableHours] = useState(true)
  const [disableTime, setDisableTime] = useState(true)
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const delta = deltaTime(expiration)
      if (delta >= 0) {
        setTimer(timerArray(delta))
      } else {
        clearInterval(timeInterval)
        setDisableTime(false)
        setVariantButton('outlined')
        setTextButton('I understand, let me bid anyway')
        setInfoAution(
          'If you were to place a bid at this time there is a high chance that it would result in an error.'
        )
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
    <Grid item>
      <Paper elevation={2}>
        <Grid item xs={12} container direction="column">
          <Grid
            container
            direction="row"
            alignContent="center"
            justify="space-around"
            className={classes.root}
          >
            <Grid item xs={12} sm={4} container direction="column">
              <Typography
                variant="button"
                color="primary"
                className={classes.titlePrice}
              >
                Current Biddddddddd
              </Typography>
              <Typography
                variant="button"
                color="primary"
                className={classes.price}
              >
                {`${formatDecimal(priceEth)} ETH`}
              </Typography>
              <Typography variant="button" color="inherit">
                {formatUsd(priceUsd)}
              </Typography>
            </Grid>
            <Hidden mdDown>
              <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
              />
            </Hidden>
            <Grid item xs={12} sm={6} container direction="column">
              <Typography
                variant="button"
                color="primary"
                className={classes.titlePrice}
              >
                {changeTitle}
              </Typography>
              <Grid
                container
                direction="row"
                justify={disableHours ? 'space-between' : 'flex-start'}
                style={{ display: disableTime ? 'flex' : 'none' }}
              >
                <Grid
                  item
                  xs={4}
                  style={{ display: disableHours ? 'block' : 'none' }}
                >
                  <Grid container direction="column" alignItems="flex-start">
                    <Typography variant="h5" color="primary">
                      {Hours}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="inherit"
                      className={classes.texTimer}
                    >
                      Hours
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container direction="column" alignItems="flex-start">
                    <Typography variant="h5" color="primary">
                      {Minutes}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="inherit"
                      className={classes.texTimer}
                    >
                      Minutes
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container direction="column" alignItems="flex-start">
                    <Typography variant="h5" color="primary">
                      {Seconds}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="inherit"
                      className={classes.texTimer}
                    >
                      Seconds
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Typography
                variant="body2"
                color="primary"
                className={classes.infoAution}
              >
                {infoAution}
              </Typography>
            </Grid>
          </Grid>

          <Divider className={classes.divider} />

          <Grid container justify="center" className={classes.root}>
            <Grid item xs={12}>
              <Link to={link} className={classes.link}>
                <Button
                  variant={variantButton}
                  fullWidth
                  className={classes.button}
                >
                  <Typography variant="button" className={classes.textButton}>
                    {textButton}
                  </Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default withWidth()(AuctionItem)
