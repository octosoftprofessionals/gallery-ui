import React, { useState } from 'react'
import { Grid, Typography, Button, OutlinedInput } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BidMessages from './BidMessages'
import EthSvg from '../../assets/eth.svg'
import { formatDecimal, formatUsd, minValueToBid } from '../../Utils'
import { colors } from '../Styles/Colors'

const useStyle = makeStyles(Theme => ({
  '@global': {
    '.MuiOutlinedInput-input': {
      color: colors.Nero,
    },
  },
  root: {
    position: 'relative',
  },
  boxInput: {
    backgroundColor: 'black',
    borderRadius: 16,
    padding: 0,
  },
  input: {
    width: '60%',
    marginRight: 12,
    borderRadius: Theme.shape.borderRadius[2],
    fontFamily: Theme.typography.fontFamily[1],
    fontSize: Theme.typography.fontSize[10],
    backgroundColor: Theme.palette.primary.contrastText,
  },
  boxBalance: {
    backgroundColor: Theme.palette.primary.light,
    borderRadius: Theme.shape.borderRadius[2],
    padding: Theme.spacing(7, 7, 7, 7),
    marginLeft: Theme.spacing(3),
  },
  textBalance: {
    fontSize: Theme.typography.fontSize[3],
    cursor: 'default',
  },
  valueBalance: {
    color: colors.Black,
  },
  buttonBid: {
    backgroundColor: Theme.palette.primary.dark,
    marginTop: 50,
    width: '100%',
    '@media (max-width: 780px)': {
      zIndex: 100,
      '&:focus': {
        backgroundColor: Theme.palette.primary.dark,
      },
      '&:selected': {
        backgroundColor: Theme.palette.primary.dark,
      },
    },
  },
  text: { fontSize: Theme.typography.fontSize[3] },
  boxButtonBid: {
    padding: 0,
  },
  icon: { marginLeft: Theme.spacing(3) },
  textEth: { color: Theme.palette.primary.light },
}))

const messages = ['ok', 'outbid', 'error', 'noBid']

const messagesRand = () => {
  return messages[Math.floor(Math.random() * messages.length)]
}

const Bids = ({ priceEth, priceUsd, balance }) => {
  const classes = useStyle()
  const [bidAmounts, setBidAmounts] = useState(0)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState()

  const handleClick = () => {
    setOpen(true)
    setMessage(() => messagesRand())
  }

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      spacing={8}
      className={classes.root}
    >
      <Grid item xs={12}>
        <Typography variant="h4" color="primary">
          Place a bid
        </Typography>
      </Grid>
      <Grid item xs={12} container direction="column">
        <Typography variant="caption" className={classes.text}>
          You must bid at least
        </Typography>
        <Typography variant="caption" color="primary">{`${formatDecimal(
          priceEth
        )} ETH`}</Typography>
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
            name=""
            placeholder="0"
            value={bidAmounts}
            className={classes.input}
            onChange={e => setBidAmounts(e.target.value)}
          />
          <Typography variant="h4" className={classes.textEth}>
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
            className={[classes.textBalance, classes.valueBalance]}
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
      <Grid item xs={12} className={classes.boxButtonBid}>
        <Button
          variant="text"
          color="primary"
          className={classes.buttonBid}
          onClick={handleClick}
          disabled={minValueToBid(bidAmounts)}
        >
          <Typography variant="button" color="primary" className={classes.text}>
            Place a Bid
          </Typography>
        </Button>
        <BidMessages setOpen={setOpen} open={open} state={message} />
      </Grid>
    </Grid>
  )
}

export default Bids
