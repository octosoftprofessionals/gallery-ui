import React from 'react'
import { Divider, Grid, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { formatDecimal, formatUsd } from '../../../../../Utils'
import useTimer from '../../../../../hooks/useTimer'

import Spinner from '../../../../Spinner'

import CountdownTimer from './CountdownTimer'

const useStyle = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(5, 0, 5, 0),
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
  numberTimer: { fontSize: Theme.typography.fontSize[6] },
  title: {
    paddingTop: 20,
    '@media (max-width: 768px)': {
      fontSize: Theme.typography.fontSize[4],
    },
  },
  boxTimer: {
    display: ({ disableTime }: { disableTime: boolean }) =>
      disableTime ? 'flex' : 'none',
  },
}))
const AuctionArtwork = ({ isLoading, priceEth, priceUsd, expiration }) => {
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
        <Typography variant="button" color="primary" className={classes.price}>
          {isNaN(priceEth) ? '—' : `${formatDecimal(priceEth)} ETH`}
        </Typography>
        <Typography variant="caption">
          {isNaN(priceUsd) ? '—' : `${formatUsd(priceUsd)}`}
        </Typography>
      </Grid>
      <Hidden mdDown>
        <Divider orientation="vertical" flexItem className={classes.divider} />
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
  )
}

export default AuctionArtwork
