import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  footerCard: {
    padding: Theme.spacing(9),
    backgroundColor: Theme.palette.secondary.light,
    borderRadius: Theme.spacing(0, 0, 4, 4),
  },
}))

const Sold = ({ price }) => {
  const classes = useStyle()
  return (
    <Grid item xs={12} container className={classes.footerCard}>
      <Typography variant="caption" color="textPrimary">
        Sold for
      </Typography>
      <Grid item xs={12}>
        <Typography variant="caption" color="primary">
          {`${price} ETH`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Sold
