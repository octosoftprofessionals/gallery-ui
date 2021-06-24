import React, { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { Grid, Typography, Button, OutlinedInput } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SnackbarContent } from '@material-ui/core'

import EthSvg from '../../assets/eth.svg'
import { formatDecimal, formatUsd } from '../../Utils'
import Alert from '@material-ui/lab/Alert'
/* import Slide, { SlideProps } from '@material-ui/core/Slide'
 */
/* type TransitionProps = Omit<SlideProps, 'direction'>
 */
const useStyle = makeStyles(Theme => ({
  root: {
    position: 'relative',
  },
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
    backgroundColor: Theme.palette.primary.light,
    borderRadius: Theme.shape.borderRadius[2],
    padding: Theme.spacing(7, 7, 7, 9),
  },
  textBalance: { fontSize: Theme.typography.fontSize[3], cursor: 'default' },
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
  message: {
    position: 'relative',
    width: '100%',
    zIndex: -1,
  },
  alert: {
    bottom: '60%',
    /* transform: 'translateX(-80%)', */
    borderRadius: Theme.shape.borderRadius[2],
    position: 'absolute',
    margin: 0,
    left: 1,
    textAlign: 'center',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '10px 20px 30px 60px',
    width: '100%',
    '@media (max-width: 780px)': {
      padding: '0px 50px 50px 15px ',
      marginLeft: '-6px',
      marginBotton: '20px',
    },
  },
}))

const Bids = ({ priceEth, priceUsd, balance }) => {
  const classes = useStyle()
  const [bidAmounts, setBidAmounts] = useState()
  const [open, setOpen] = useState(false)

  const handleClick = () => () => {
    setOpen(true)
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
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
          Pleace a bid
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
      <Grid item xs={12} className={classes.boxButtonBid}>
        <Button
          variant="text"
          color="primary"
          className={classes.buttonBid}
          onClick={handleClick()}
        >
          <Typography variant="button" color="primary" className={classes.text}>
            Place a Bid
          </Typography>
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          className={classes.message}
        >
          <Alert severity="success" variant="filled" className={classes.alert}>
            "Bid successfully placed!"
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  )
}

export default Bids
