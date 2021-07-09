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
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: Theme.spacing(9, 9, 2, 9),
  },
  buttonsPlaylist: {
    backgroundColor: Theme.palette.card.footer,
    borderRadius: Theme.spacing(0, 0, 4, 4),
    padding: Theme.spacing(2),
  },
}))

const Reserve = ({ price }) => {
  const classes = useStyle()
  return (
    <Grid container className={classes.footerCard}>
      <Grid item xs={12} className={classes.container}>
        <Typography variant="caption" color="textPrimary">
          Reserve price
        </Typography>
        <Typography variant="caption" color="primary">
          {!!price ? `${formatDecimal(price)} ETH` : '—'}
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.buttonsPlaylist}>
        <ButtonPlaylist />
      </Grid>
    </Grid>
  )
}

export default Reserve
