import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import ButtonPlaylist from './ButtonPlaylist'
import { formatDecimal } from '../../../Utils'

const useStyle = makeStyles(Theme => ({
  footerCard: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: Theme.palette.card.footer,
    borderRadius: Theme.spacing(0, 0, 4, 4),
  },
  conateinerTop: { padding: Theme.spacing(0, 6, 2) },
  conateinerButtom: { padding: Theme.spacing(0, 0, 2) },
  timer: {
    marginBottom: Theme.spacing(4),
  },
  timerAlign: {
    marginLeft: Theme.spacing(8),
    '@media (max-width: 576px)': {
      marginLeft: Theme.spacing(13),
    },
    '@media (max-width: 320px)': {
      marginLeft: Theme.spacing(12),
    },
  },
}))

const InAuctions = ({ price, timer, children }) => {
  const classes = useStyle()
  return (
    <Grid container className={classes.footerCard}>
      <Grid item xs={12} container className={classes.conateinerTop}>
        <Grid item xs={6} container>
          <Typography variant="caption" color="textSecondary">
            Current bid
          </Typography>
          <Grid item xs={12}>
            <Typography variant="caption" color="secondary">
              {isNaN(price) ? '—' : `${formatDecimal(price)} ETH`}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          container
          alignItems="flex-start"
          className={classes.timer}
        >
          <Grid item xs={12} className={classes.timerAlign}>
            <Typography variant="caption" color="textSecondary">
              {timer}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.conateinerButtom}>
        {children}
      </Grid>
    </Grid>
  )
}

export default InAuctions
