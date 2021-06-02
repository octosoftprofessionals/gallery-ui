import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  footerCard: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    padding: Theme.spacing(9),
    backgroundColor: Theme.palette.secondary.light,
    borderRadius: Theme.spacing(0, 0, 4, 4),
  },
}))

const Reserve = ({ price }) => {
  const classes = useStyle()
  return (
    <Grid container className={classes.footerCard}>
      <Typography variant="caption" color="textPrimary">
        Reserve price
      </Typography>
      <Grid item xs={12}>
        <Typography variant="caption" color="primary">
          {!!price ? `${price} ETH` : '—'}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Reserve
