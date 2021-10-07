import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { formatDecimal } from '../../../Utils'

const useStyle = makeStyles(Theme => ({
  text: { marginRight: '1rem' },
}))
const Description = ({
  creatorUsername,
  ownerUsername,
  priceEth = 'NaN',
}: {
  creatorUsername: string
  ownerUsername: string
  priceEth: string
}) => {
  const classes = useStyle()
  return (
    <Grid item xs={12} container alignItems="flex-start" direction="column">
      <Grid container direction="row" justify="flex-start">
        <Typography variant="h6" color="primary" className={classes.text}>
          Artist:
        </Typography>
        <Typography variant="caption">{`@${creatorUsername}`}</Typography>
      </Grid>
      <Grid container direction="row" justify="flex-start">
        <Typography color="primary" variant="h6" className={classes.text}>
          Current Owner:
        </Typography>
        <Typography variant="caption">{`@${ownerUsername}`}</Typography>
      </Grid>
      <Grid container direction="row" justify="flex-start">
        <Typography color="primary" variant="h6" className={classes.text}>
          Last Price:
        </Typography>
        <Typography variant="caption">
          {isNaN(parseInt(priceEth))
            ? '\t —'
            : `\t${formatDecimal(priceEth)} ETH`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Description
