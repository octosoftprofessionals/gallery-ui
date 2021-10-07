import React from 'react'
import { Link } from 'gatsby'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined'
import {
  formatDecimal,
  formatUsd,
  ethereumIoLinkTx,
} from '../../../../../Utils'

import Avatar from './Avatar'
import Event from './Event'
import Payment from './Payment'

const useStyle = makeStyles(theme => ({
  root: { padding: theme.spacing(3) },
  actionText: {
    fontFamily: theme.typography.fontFamily[2],
    color: theme.palette.primary.main,
  },
  creator: {
    fontFamily: theme.typography.fontFamily[2],
    fontWeight: 600,
    color: theme.palette.primary.light,
    margin: theme.spacing(0, 0, 0, 2),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  icon: {
    fontSize: theme.spacing(8),
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  link: {
    display: 'flex',
    color: theme.palette.primary.light,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  avatar: {
    margin: theme.spacing(0, 3, 0, 0),
  },
  date: {
    fontFamily: theme.typography.fontFamily[2],
    margin: theme.spacing(0),
    fontWeight: 500,
  },
  price: {
    fontFamily: theme.typography.fontFamily[2],
    fontWeight: 600,
    color: theme.palette.primary.light,
  },
  containerHistory: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const HistoryItem = ({
  transactionFromAccountUser,
  transactionFromAccountProfileImgUrl,
  transactionToAccountUser,
  transactionToAccountProfileImgUrl,
  eventType,
  paymentTokenEthPrice,
  paymentTokenUsdPrice,
  createdDate,
  transactionHash,
}: Props) => {
  const classes = useStyle()

  return (
    <Grid item xs={11}>
      <Paper className={classes.containerHistory} elevation={2}>
        <Grid
          item
          xs={12}
          container
          justify="space-around"
          alignItems="center"
          className={classes.root}
        >
          <Avatar
            altAccountUser={
              transactionFromAccountUser ?? transactionToAccountUser
            }
            ImgUrl={
              transactionFromAccountProfileImgUrl ??
              transactionToAccountProfileImgUrl
            }
          />

          <Event
            eventType={eventType}
            transaction={transactionFromAccountUser}
            createdDate={createdDate}
          />

          <Payment
            tokenEthPrice={paymentTokenEthPrice}
            tokenUsdPrice={paymentTokenUsdPrice}
            transactionHash={transactionHash}
          />
        </Grid>
      </Paper>
    </Grid>
  )
}

type Props = {
  id: number
  assetId: number
  assetToken_id: string
  assetContractAddress?: string
  bidAmount: string
  duration: string
  createdDate: string
  endingPrice: string
  eventType: string
  startingPrice: string
  transactionFromAccountAddress: string
  transactionFromAccountUser: string
  transactionFromAccountProfileImgUrl: string
  transactionToAccountAddress: string
  transactionToAccountUser: string
  transactionToAccountProfileImgUrl: string
  transactionHash: string
  paymentTokenDecimals: number
  paymentTokenEthPrice: string
  paymentTokenUsdPrice: string
}

export default HistoryItem
