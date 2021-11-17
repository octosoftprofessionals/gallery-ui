import React, { useEffect, useState } from 'react'
import { Grid, Typography, Button, OutlinedInput } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BigNumber from 'bignumber.js'

import { useAccountStore } from '../../hooks/useAccountStore'
import { createBuyOrder, getBalanceWETH, createMyOrder } from '../../services/bidding'
import { darkColors } from '../Styles/Colors'
import {
  formatDecimal,
  formatUsd,
} from '../../Utils'
import { quoteUsdFromEthUsd } from '../../Utils/quoteEthUsd'
import EthSvg from '../../assets/eth.svg'
import BidMessages from './BidMessages'

const isValidBidAmountEth = (
  currentMaxBid: BigNumber,
  accountBalance: BigNumber,
  bidAmountEth: number
) => {
  return (
    currentMaxBid.lt(bidAmountEth) &&
    new BigNumber(bidAmountEth).lte(accountBalance)
  )
}

const isAmountQuotable = (amount: number): boolean =>
  amount != null && amount > 0

const Bids = ({
  assetContractAddress,
  assetTokenId,
  schemaName,
  priceEth,
  priceUsd,
  currentMaxBid,
  ownerUsername
}: {
  assetContractAddress: string
  assetTokenId: string
  schemaName: string
  priceEth: string
  priceUsd: string
  currentMaxBid: string
  ownerUsername: string
}) => {
  const classes = useStyle()
  const { account, balance } = useAccountStore()
  //getting metamask account from the storage
  const [bidAmountEth, setBidAmountEth] = useState<number | null>(null)

  const bidAmountUsd = !isAmountQuotable(bidAmountEth)
    ? 0
    : quoteUsdFromEthUsd(priceEth, priceUsd, new BigNumber(bidAmountEth))

  const [valueCurrentMaxBid, setValueCurrentMaxBid] = useState<BigNumber>(
    new BigNumber(currentMaxBid)
  )
  const [accountBalanceWETH, setAccountBalanceWETH] = useState<BigNumber | null>(null)
  const [accountAddress, setAccoutnAddres] = useState<string | null>()
  const [open, setOpen] = useState(false)
  const [messageState, setMessageState] = useState<string | null>(null)
  const [severity, setSeverity] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const isAccountBalanceZero = accountBalanceWETH?.eq(0)
  const isBiddingDisabled =
    bidAmountEth == null ||
    !isValidBidAmountEth(valueCurrentMaxBid, accountBalanceWETH, bidAmountEth)
  const isBidAmountEthError =
    bidAmountEth != null &&
    !isValidBidAmountEth(valueCurrentMaxBid, accountBalanceWETH, bidAmountEth)

  useEffect(() => {
    setAccountBalanceWETH(new BigNumber(balance))
    setAccoutnAddres(account)
  }, [balance, account])

  const handleClick = async () => {
    if (
      !isValidBidAmountEth(
        valueCurrentMaxBid,
        accountBalanceWETH,
        bidAmountEth
      )
    ) {
      setAccountBalanceWETH(accountBalanceWETH)
      return
    }
    const result = await createBuyOrder({
      accountAddress,
      assetContractAddress,
      assetTokenId,
      schemaName,
      amountEth: bidAmountEth,
    })
    setOpen(true)

    if (result instanceof Error) {
      setSeverity('error')
      setMessage(result.message)
      return
    }
    setMessageState('ok')
    setSeverity(null)
    setMessage(null)
    setValueCurrentMaxBid(new BigNumber(bidAmountEth))
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
          You must bid more than
        </Typography>
        <Typography variant="caption" color="primary">
          {`${formatDecimal(priceEth)} ETH`}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="caption">{formatUsd(priceUsd)}</Typography>
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
              step: 0.001,
            }}
            value={bidAmountEth}
            className={
              isBidAmountEthError
                ? [classes.input, classes.colorInput].join(' ')
                : classes.input
            }
            error={isBidAmountEthError}
            onChange={e => {
              try {
                const { value } = e.target
                setBidAmountEth(value)
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
        <Typography variant="caption">{formatUsd(bidAmountUsd)}</Typography>
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
            {parseFloat(balance).toFixed(6)}
          </Typography>
        </Grid>
      </div>
      <Grid item xs={12} sm={12}>
        {account == null ? (
          <Typography variant="body2" color="error">
            You must connect a wallet before bidding.
          </Typography>
        ) : isAccountBalanceZero ? (
          <Typography variant="body2" color="error">
            Unable to determine your balance of WETH (wrapped Ether). Perhaps
            you need to wrap some ETH?
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
        <BidMessages
          setOpen={setOpen}
          open={open}
          state={messageState}
          severity={severity}
          message={message}
        />
      </Grid>
    </Grid>
  )
}

const useStyle = makeStyles(Theme => ({
  '@global': {
    '.MuiOutlinedInput-input': {
      color: Theme.palette.secondary.contrastText,
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
    color: darkColors.Black,
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
  icon: {
    fill: Theme.palette.buttons.wallet,
    marginLeft: Theme.spacing(5),
  },
  textEth: {
    color: Theme.palette.primary.light,
    fontSize: Theme.typography.fontSize[6],
  },
}))

export default Bids
