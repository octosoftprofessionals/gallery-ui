import React from 'react'

import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { profilePathFromAddress } from '../../../../../config/routes'
import { formatDecimal } from '../../../../../Utils'
import OwnerButton from '../../../../CreatorButton'

const useStyle = makeStyles(Theme => ({
  root: { padding: Theme.spacing(2, 5, 2, 5) },
  info: {
    display: 'flex',
  },
  actionText: {
    fontFamily: 'Bai Jamjuree',
    color: Theme.palette.primary.main,
  },
  containerHistory: {
    margin: Theme.spacing(3, 0, 0, 0),
    backgroundColor: Theme.palette.secondary.light,
    borderRadius: Theme.shape.borderRadius[2],
    width: '95%',
  },
}))

const OtherBidsItem = ({
  addressUserBid,
  usernameBid,
  imageUrlBid,
  amountEth,
}) => {
  const classes = useStyle()
  const linkBidCreator = profilePathFromAddress(addressUserBid)

  return (
    <Grid container justify="center">
      <Paper className={classes.containerHistory} elevation={0}>
        <Grid
          container
          alignContent="center"
          justify="space-between"
          className={classes.root}
        >
          <Grid item xs={4}>
            <OwnerButton
              username={usernameBid}
              imageUrl={imageUrlBid}
              profileUrl={linkBidCreator}
              position={'none'}
              top={'0'}
            />
          </Grid>
          <Grid item xs={2} container alignItems="center">
            <Grid container alignItems="flex-end" justify="center">
              <Typography className={classes.actionText}>
                {`Bid ${isNaN(amountEth) ? '—' : formatDecimal(amountEth)} ETH`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default OtherBidsItem
