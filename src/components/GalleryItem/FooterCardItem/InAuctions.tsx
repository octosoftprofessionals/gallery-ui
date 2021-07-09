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
    padding: Theme.spacing(9, 9, 2, 9),
    backgroundColor: Theme.palette.card.footer,
    borderRadius: Theme.spacing(0, 0, 4, 4),
  },
  timer: {
    marginBottom: Theme.spacing(4),
  },
}))

const InAuctions = ({ price, timer }) => {
  const classes = useStyle()
  return (
    <Grid item container className={classes.footerCard}>
      <Grid item xs={6} container>
        <Typography variant="caption" color="textSecondary">
          Current bid
        </Typography>
        <Grid item xs={12}>
          <Typography variant="caption" color="secondary">
            {`${formatDecimal(price)} ETH`}
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
        <Typography variant="caption" color="textSecondary">
          Ending in
        </Typography>
        <Grid item xs={12}>
          <Typography variant="caption" color="secondary">
            {timer}
          </Typography>
        </Grid>
      </Grid>
      <ButtonPlaylist />
    </Grid>
  )
}

export default InAuctions
