import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  footerCard: {
    padding: Theme.spacing(9),
    backgroundColor: Theme.palette.primary.main,
    borderRadius: Theme.spacing(0, 0, 4, 4),
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
        <Typography variant="caption" color="secondary">
          {`${price} ETH`}
        </Typography>
      </Grid>
      <Grid item xs={6} container alignItems="flex-start">
        <Typography variant="caption" color="textSecondary">
          Ending in
        </Typography>

        <Grid item xs={12}>
          <Typography variant="caption" color="secondary">
            {timer}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default InAuctions
