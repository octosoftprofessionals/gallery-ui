import React from 'react'
import { Link } from 'gatsby'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined'
import {
  formatDecimal,
  formatUsd,
  ethereumIoLinkTx,
} from '../../../../../Utils'

const useStyle = makeStyles(theme => ({
  actionText: {
    fontFamily: theme.typography.fontFamily[2],
    color: theme.palette.primary.main,
  },
  icon: {
    fontSize: theme.spacing(9),
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
  price: {
    fontFamily: theme.typography.fontFamily[2],
    fontWeight: 600,
    color: theme.palette.primary.light,
  },
}))
const Payment = ({ tokenEthPrice, tokenUsdPrice, transactionHash }) => {
  const classes = useStyle()
  return (
    <Grid item xs={3} container justify="space-evenly" alignItems="center">
      <Grid item xs={8} container justify="flex-end">
        {tokenEthPrice != null &&
        tokenUsdPrice != null &&
        tokenEthPrice != 'NaN' &&
        tokenUsdPrice != 'NaN' ? (
          <>
            <Typography variant="subtitle1" className={classes.actionText}>{`${formatDecimal(
              tokenEthPrice
            )} ETH`}</Typography>
            <Typography variant="subtitle1" className={classes.price}>{`${formatUsd(
              tokenUsdPrice
            )} `}</Typography>
          </>
        ) : null}
      </Grid>
      <Grid item xs={2}>
        {
          transactionHash ? 
            <Link to={ethereumIoLinkTx(transactionHash)} className={classes.link}>
            <OpenInNewOutlinedIcon className={classes.icon} />
            </Link>
          : null
        }
      </Grid>
    </Grid>
  )
}

export default Payment
