import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  price: { fontSize: Theme.typography.fontSize[6] },
  titlePrice: { fontSize: Theme.typography.fontSize[3] },
}))

import { formatDecimal, formatUsd } from '../../../../../Utils'
const Price = ({
  priceEth,
  priceUsd,
}: {
  priceEth: string
  priceUsd: string
}) => {
  const classes = useStyle()

  return (
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
  )
}

export default Price
