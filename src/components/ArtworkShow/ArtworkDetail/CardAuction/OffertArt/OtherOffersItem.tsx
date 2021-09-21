import React from 'react'

import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { profilePathFromAddress } from '../../../../../config/routes'
import { formatDecimal } from '../../../../../Utils'
import { darkColors } from '../../../../Styles/Colors'
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
  btnSell: {
    height: Theme.spacing(13),
    borderRadius: Theme.shape.borderRadius[2],
    backgroundColor: darkColors.Aqua,
  },
  textSell: { color: darkColors.Black },
  btnReject: {
    height: Theme.spacing(13),
    borderRadius: Theme.shape.borderRadius[2],
    backgroundColor: darkColors.RadicalRed,
  },
  textReject: { color: Theme.palette.primary.main },
}))

const OtherOffersItem = ({
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
          <Grid item xs={4} container alignItems="center">
            <Grid container alignItems="flex-end" justify="center">
              <Typography className={classes.actionText}>
                {`Offered ${
                  isNaN(amountEth) ? '—' : formatDecimal(amountEth)
                } ETH`}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={4}
            container
            justify="space-around"
            alignContent="center"
          >
            <Grid item xs={5}>
              <Button variant="text" fullWidth className={classes.btnSell}>
                <Typography variant="caption" className={classes.textSell}>
                  Sell
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button variant="text" fullWidth className={classes.btnReject}>
                <Typography variant="caption" className={classes.textReject}>
                  Reject
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default OtherOffersItem
