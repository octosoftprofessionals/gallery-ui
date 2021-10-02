import React from 'react'
import { Divider, Grid, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import useTimer from '../../../../../hooks/useTimer'

import CountdownTimer from '../../../../CountdownTimer'
import Price from './Price'

const useStyle = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(5, 0, 5, 0),
  },
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
const AuctionArtwork = ({ priceEth, priceUsd, expiration }) => {
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
      <Price priceEth={priceEth} priceUsd={priceUsd} />
      <Hidden mdDown>
        <Divider orientation="vertical" flexItem className={classes.divider} />
      </Hidden>
      <CountdownTimer
        timer={timer}
        changeTitle={changeTitle}
        disableDays={disableDays}
        disableHours={disableHours}
        disableTime={disableTime}
        disableInfo={disableInfo}
      />
    </Grid>
  )
}

export default AuctionArtwork
