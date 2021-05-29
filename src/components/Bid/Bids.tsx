import React, { useState } from 'react'

import { Grid, Typography, Button, OutlinedInput } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import EthSvg from '../../assets/eth.svg'
import { formatDecimal, formatUsd } from '../../Utils'

const useStyle = makeStyles(Theme => ({
  boxInput: {
    backgroundColor: Theme.palette.primary.main,
    borderRadius: 16,
    padding: 0,
  },
  input: {
    width: '60%',
    marginRight: 12,
    borderRadius: Theme.shape.borderRadius[2],
    fontFamily: Theme.typography.fontFamily[1],
    fontSize: Theme.typography.fontSize[10],
  },
  boxBalance: {
    position: 'relative',
    backgroundColor: Theme.palette.secondary.light,
    borderRadius: Theme.shape.borderRadius[2],
    padding: Theme.spacing(7, 7, 7, 9),
  },
  textBalance: { fontSize: Theme.typography.fontSize[3], cursor: 'default' },
  buttonBid: { backgroundColor: Theme.palette.secondary.dark },
  text: { fontSize: Theme.typography.fontSize[3] },
  boxButtonBid: { padding: 0 },
  icon: { marginLeft: Theme.spacing(3) },
}))

const Bids = ({ priceEth, priceUsd, balance }) => {
  const classes = useStyle()
  const [bidAmounts, setBidAmounts] = useState()
  return (
    <Grid container direction="column" justify="flex-start" spacing={8}>
      <Grid item xs={12}>
        <Typography variant="h4" color="primary">
          Pleace a bid
        </Typography>
      </Grid>
      <Grid item xs={12} container direction="column">
        <Typography variant="caption" className={classes.text}>
          You must bid at least
        </Typography>
        <Typography
          variant="caption"
          color="primary"
        >{`${formatDecimal(priceEth)} ETH`}</Typography>
      </Grid>
      <Grid item xs={12} container alignItems="flex-start">
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          className={classes.boxInput}
        >
          <OutlinedInput
            type="number"
            placeholder="0"
            value={bidAmounts}
            onChange={e => setBidAmounts(e.target.value)}
            className={classes.input}
          />
          <Typography variant="h4" color="secondary">
            ETH
          </Typography>
          <EthSvg className={classes.icon} />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="caption">{formatUsd(priceUsd)}</Typography>
      </Grid>
      <div className={classes.boxBalance}>
        <Grid container direction="row" justify="space-between">
          <Typography variant="caption" className={classes.textBalance}>
            Your Balance
          </Typography>
          <Typography
            variant="caption"
            color="primary"
            className={classes.textBalance}
          >
            {`${balance} ETH`}
          </Typography>
        </Grid>
      </div>
      <Grid item xs={12} sm={9}>
        <Typography variant="body2" color="primary">
          Once a bid is placed, it cannot be withdrawn.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Typography variant="caption" className={classes.text}>
          Learn how our auctions work.
        </Typography>
      </Grid>
      <Grid item xs={10} className={classes.boxButtonBid}>
        <Button
          variant="text"
          fullWidth
          color="primary"
          className={classes.buttonBid}
        >
          <Typography variant="button" color="primary" className={classes.text}>
            Bid amount is required
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
}

export default Bids
