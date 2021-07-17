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
    backgroundColor: Theme.palette.secondary.light,
    borderRadius: Theme.spacing(0, 0, 4, 4),
  },
  conateinerTop: { padding: Theme.spacing(0, 6, 2) },
  conateinerButtom: { padding: Theme.spacing(0, 0, 2) },
}))

const Sold = ({ price, children }) => {
  const classes = useStyle()
  return (
    <Grid container className={classes.footerCard}>
      <Grid
        item
        container
        alignContent="flex-start"
        justify="center"
        direction="column"
        className={classes.conateinerTop}
      >
        <Typography variant="caption" color="textPrimary">
          Sold for
        </Typography>
        <Typography variant="caption" color="primary">
          {`${formatDecimal(price)} ETH`}
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.conateinerButtom}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Sold
