import React from 'react'

import { Grid, Paper, Avatar, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined'
import { formatDecimal, formatUsd } from '../../../../Utils'

const useStyle = makeStyles(Theme => ({
  root: { padding: Theme.spacing(5, 11, 5, 11) },
  action: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  info: {
    display: 'flex',
  },
  actionText: {
    fontFamily: 'Bai Jamjuree',
    color: Theme.palette.primary.main,
  },
  creator: {
    fontFamily: 'Bai Jamjuree',
    fontWeight: 600,
    color: Theme.palette.primary.light,
    margin: Theme.spacing(0, 0, 0, 2),
    '&:hover': {
      color: Theme.palette.primary.main,
    },
  },
  icon: {
    fontSize: Theme.spacing(7),
    color: Theme.palette.primary.main,
    '&:hover': {
      color: Theme.palette.primary.main,
    },
  },
  link: {
    color: Theme.palette.primary.light,
    margin: Theme.spacing(0, 0, 0, 3),
  },
  avatar: {
    margin: Theme.spacing(0, 3, 0, 0),
  },
  date: {
    fontFamily: 'Bai Jamjuree',
    margin: Theme.spacing(0),
    fontWeight: 500,
  },
  price: {
    fontFamily: 'Bai Jamjuree',
    fontWeight: 600,
    color: Theme.palette.primary.light,
  },
  containerHistory: { margin: Theme.spacing(3, 0, 0, 0) },
}))
const ethereumIoLinkTx = (transactionHash: string) => {
  if (transactionHash) {
    return `https://etherscan.io/tx/${transactionHash}`
  }
  return '#'
}

const HistoryItem = ({
  transactionFromAccountUser,
  transactionFromAccountAddress,
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
    <Grid item>
      <Paper className={classes.containerHistory} elevation={2}>
        <Grid
          container
          direction="row"
          alignContent="center"
          justify="space-between"
          className={classes.root}
        >
          <Grid
            item
            className={classes.info}
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Avatar
              className={classes.avatar}
              alt={transactionFromAccountUser}
              src={transactionFromAccountProfileImgUrl}
            />
            <Grid direction="column" alignContent="flex-start" justify="center">
              <div className={classes.action}>
                <Typography
                  className={classes.actionText}
                  variant="body1"
                >{`${eventType} by `}</Typography>
                <Link
                  className={classes.creator}
                  underline="none"
                  variant="body2"
                  href="#"
                >{`@${transactionFromAccountUser}`}</Link>
              </div>
              <Typography variant="subtitle1" className={classes.date}>
                {createdDate}
              </Typography>
            </Grid>
          </Grid>
          <Grid className={classes.action} direction="row" alignItems="center">
            {paymentTokenEthPrice != null &&
            paymentTokenUsdPrice != null &&
            paymentTokenEthPrice != 'NaN' &&
            paymentTokenUsdPrice != 'NaN' ? (
              <Grid
                container
                direction="column"
                alignItems="flex-end"
                justify="center"
              >
                <Typography className={classes.actionText}>{`${formatDecimal(
                  paymentTokenEthPrice
                )} ETH`}</Typography>
                <Typography className={classes.price}>{`${formatUsd(
                  paymentTokenUsdPrice
                )} `}</Typography>
              </Grid>
            ) : null}

            <Link
              href={ethereumIoLinkTx(transactionHash)}
              className={classes.link}
            >
              <OpenInNewOutlinedIcon className={classes.icon} />
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

type Props = {
  id: number
  assetId: number
  assetToken_id: string
  assetContractAddress: string
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
  transactioncreatedDate: string
  transactionHash: string
  paymentTokenDecimals: number
  paymentTokenEthPrice: string
  paymentTokenUsdPrice: string
}

export default HistoryItem
