import React, { useEffect, useState } from 'react'
import { Grid, Typography, Button, OutlinedInput } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BigNumber from 'bignumber.js'

import EthSvg from '../../assets/eth.svg'
import { useMetamaskAccount } from '../../atom'
import { useAccountStore } from '../../hooks/useAccountStore'
import { createBuyOrder, getBalanceWETH } from '../../services/bidding'
import { colors } from '../Styles/Colors'
import { formatDecimal, formatUsd, formatEthersFromBigNumber } from '../../Utils'
import BidMessages from './BidMessages'

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
  colorInput: {
    '@global': {
      '.MuiOutlinedInput-input': { color: Theme.palette.error.main },
    },
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

const isValidBidAmount = (currentMaxBid: BigNumber, accountBalance: BigNumber, bidAmount: number) => {
  console.log('currentMaxBid:', currentMaxBid)
  console.log('accountBalance:', accountBalance)
  console.log('bidAmount:', bidAmount)
  return currentMaxBid.lt(bidAmount) && new BigNumber(bidAmount).lte(accountBalance)
}

const Bids = ({ assetContractAddress, assetTokenId, priceEth, priceUsd, currentMaxBid }) => {
  const classes = useStyle()

  const accountAddress = useMetamaskAccount()

  //getting metamask account from the storage
  const metamaskStorage = useAccountStore()

  const [bidAmount, setBidAmount] = useState<number | null>(null)
  const [valueCurrentMaxBid, setValueCurrentMaxBid] = useState<BigNumber>(
    new BigNumber(currentMaxBid)
  )
  const [accountBalanceWETH, setAccountBalanceWETH] = useState<BigNumber>(new BigNumber(0))
  const [open, setOpen] = useState(false)
  const [messageState, setMessageState] = useState<string | null>(null)
  const [severity, setSeverity] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  console.log('METAMASK accountAddress:', accountAddress)
  console.log('METAMASK metamaskStorage:', JSON.stringify(metamaskStorage))
  console.log('accountBalanceWETH:', accountBalanceWETH.toString())

  const isAccountBalanceZero = accountBalanceWETH.eq(0)
  const isBiddingDisabled = bidAmount == null || !isValidBidAmount(valueCurrentMaxBid, accountBalanceWETH, bidAmount)
  const isBidAmountError = bidAmount != null && !isValidBidAmount(valueCurrentMaxBid, accountBalanceWETH, bidAmount)

  useEffect(() => {
    (async () => {
      console.log('accountAddress:', accountAddress)
      const balanceWETH = await getBalanceWETH(accountAddress)
      console.log('balanceWETH.toString():', balanceWETH.toString())
      setAccountBalanceWETH(balanceWETH)
    })()
  }, [accountAddress])

  const handleClick = async () => {
    console.log('accountAddress:', accountAddress)
    console.log('assetContractAddress:', assetContractAddress)
    console.log('assetTokenId:', assetTokenId)
    console.log('bidAmount:', bidAmount)

    console.log('accountBalanceWETH.toString():', accountBalanceWETH.toString())

    const latestAccountBalanceWETH = await getBalanceWETH(accountAddress)

    console.log('latestAccountBalanceWETH.toString():', latestAccountBalanceWETH.toString())

    if (!isValidBidAmount(valueCurrentMaxBid, latestAccountBalanceWETH, bidAmount)) {
      setAccountBalanceWETH(latestAccountBalanceWETH)
      return
    }

    const result = await createBuyOrder({
      accountAddress,
      assetContractAddress,
      assetTokenId,
      // TODO: schema? i.e. ERC721 vs. ERC1155
      amountEth: bidAmount,
    })

    console.log('BID RESULT:', result)
    console.log('BID RESULT:', JSON.stringify(result))

    setOpen(true)

    console.log('result instanceof Error:', result instanceof Error)
    if (result instanceof Error) {
      console.log('result.message:', result.message)
      setSeverity('error')
      setMessage(result.message)
      return
    }

    setMessageState('ok')
    setSeverity(null)
    setMessage(null)
    setValueCurrentMaxBid(new BigNumber(bidAmount))
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
            placeholder="0"
            inputProps={{
              min: 0,
              step: 0.01,
            }}
            value={bidAmount}
            className={
              isBidAmountError
                ? [classes.input, classes.colorInput].join(' ')
                : classes.input
            }
            error={isBidAmountError}
            onChange={e => {
              try {
                const { value } = e.target
                console.log('value:', value)
                setBidAmount(value)
              } catch (e) {
                return
              }
            }}
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
            className={[classes.textBalance, classes.valueBalance].join(' ')}
          >
            {`${accountBalanceWETH.eq(0) ? '0' : formatEthersFromBigNumber(accountBalanceWETH)} ETH`}
          </Typography>
        </Grid>
      </div>
      <Grid item xs={12} sm={12}>
        {accountAddress == null ? (
          <Typography variant="body2" color="error">
            You must connect a wallet before bidding.
          </Typography>
        ) : isAccountBalanceZero ? (
          <Typography variant="body2" color="error">
            Unable to determine your balance of WETH (wrapped Ether). Perhaps you need to wrap some ETH?
          </Typography>
        ) : (
          <Typography variant="body2" color="primary">
            Once a bid is placed, it cannot be withdrawn.
          </Typography>
        )}
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
          disabled={isBiddingDisabled}
        >
          <Typography variant="button" color="primary" className={classes.text}>
            Place a Bid
          </Typography>
        </Button>
        <BidMessages setOpen={setOpen} open={open} state={messageState} severity={severity} message={message} />
      </Grid>
    </Grid>
  )
}

export default Bids
