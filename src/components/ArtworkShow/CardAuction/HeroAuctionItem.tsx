import React from 'react'
import { Link } from 'gatsby'
import { Button, Divider, Grid, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { formatDecimal, formatUsd } from '../../../Utils'
import useTimer from '../../../hooks/useTimer'
import CountdownTimer from './CountdownTimer'
import Spinner from '../../Spinner'

const useStyle = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(11, 0),
  },
  price: { fontSize: Theme.typography.fontSize[6] },
  titlePrice: { fontSize: Theme.typography.fontSize[3] },
  divider: {
    opacity: Theme.palette.action.disabledOpacity[1],
    backgroundColor: Theme.palette.primary.main,
  },
  texTimer: {
    fontSize: Theme.typography.fontSize[3],
    marginTop: Theme.spacing(2),
  },
  button: { borderRadius: Theme.shape.borderRadius[2] },
  textButton: { fontSize: Theme.typography.fontSize[3] },
  numberTimer: { fontSize: Theme.typography.fontSize[6] },
  link: { textDecoration: 'none' },
  title: {
    '@media (max-width: 768px)': {
      fontSize: Theme.typography.fontSize[4],
    },
  },
  boxTimer: {
    display: ({ disableTime }: { disableTime: boolean }) =>
      disableTime ? 'flex' : 'none',
  },
}))

const HeroAuctionItem = ({
  title,
  priceEth,
  priceUsd,
  expiration,
  linkButtonBid,
  linkButtonArtWork,
  isLoading,
}) => {
  const {
    timer,
    changeTitle,
    disableInfo,
    disableDays,
    disableHours,
    disableTime,
  }: {
    timer: string[]
    changeTitle: string
    disableInfo: boolean
    disableDays: boolean
    disableHours: boolean
    disableTime: boolean
  } = useTimer({ expiration })
  const classes = useStyle({ disableTime })
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Typography variant="h4" color="primary" className={classes.title}>
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
        <Grid item xs={12} md={3} container direction="column">
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
            {isNaN(priceEth) ? '—' : `${formatDecimal(priceEth)} ETH`}
          </Typography>
          <Typography variant="caption">
            {isNaN(priceUsd) ? '—' : `${formatUsd(priceUsd)}`}
          </Typography>
        </Grid>
        <Hidden mdDown>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
        </Hidden>

        {isLoading ? (
          <Spinner height="30vh" />
        ) : (
          <CountdownTimer
            timer={timer}
            changeTitle={changeTitle}
            disableDays={disableDays}
            disableHours={disableHours}
            disableTime={disableTime}
            disableInfo={disableInfo}
          />
        )}
      </Grid>
      <Grid
        item
        sm={11}
        container
        direction="row"
        justify="flex-start"
        spacing={4}
      >
        <Grid item xs={12} md={6}>
          <Link to={linkButtonBid} className={classes.link}>
            <Button variant="contained" fullWidth className={classes.button}>
              <Typography variant="button" className={classes.textButton}>
                Place a bid
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={5}>
          <Link to={linkButtonArtWork} className={classes.link}>
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

export default HeroAuctionItem
