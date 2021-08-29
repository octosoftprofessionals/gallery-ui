import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import useTimer from '../../../hooks/useTimer'

const useStyle = makeStyles(Theme => ({
  title: { fontSize: Theme.typography.fontSize[3] },
  infoAution: {
    display: ({ disableInfo }: { disableInfo: boolean }) =>
      disableInfo ? 'block' : 'none',
  },
  texTimer: {
    fontSize: Theme.typography.fontSize[3],
    marginTop: Theme.spacing(2),
  },
}))

const CountdownTimer = ({
  timer,
  changeTitle,
  infoAution,
  disableDays,
  disableHours,
  disableTime,
  disableInfo,
}: {
  timer: any
  changeTitle: string
  infoAution?: string
  disableDays: boolean
  disableHours: boolean
  disableTime: boolean
  disableInfo: boolean
}) => {
  let {
    Day,
    Hours,
    Minutes,
    Seconds,
  }: { Day: string; Hours: string; Minutes: string; Seconds: string } = timer

  const classes = useStyle({ disableInfo })
  return (
    <Grid item xs={12} sm={6} container direction="column">
      <Typography variant="button" color="primary" className={classes.title}>
        {changeTitle}
      </Typography>
      <Grid
        container
        direction="row"
        justify={disableHours ? 'space-between' : 'flex-start'}
        style={{ display: disableTime ? 'flex' : 'none' }}
      >
        <Grid item xs={3} style={{ display: disableDays ? 'block' : 'none' }}>
          <Grid container direction="column" alignItems="flex-start">
            <Typography variant="h5" color="primary">
              {Day}
            </Typography>
            <Typography
              variant="caption"
              color="inherit"
              className={classes.texTimer}
            >
              {parseInt(Day) >= 2 ? 'Days' : 'Day'}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={3} style={{ display: disableHours ? 'block' : 'none' }}>
          <Grid container direction="column" alignItems="flex-start">
            <Typography variant="h5" color="primary">
              {Hours}
            </Typography>
            <Typography
              variant="caption"
              color="inherit"
              className={classes.texTimer}
            >
              {parseInt(Hours) >= 2 ? 'Hours' : 'Hour'}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={3}>
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
        <Grid item xs={3}>
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
  )
}

export default CountdownTimer
