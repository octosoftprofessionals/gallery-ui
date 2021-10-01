import React from 'react'

import { Link } from 'gatsby'

import {
  Button,
  Divider,
  Grid,
  Hidden,
  Paper,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { formatUsd, formatDecimal } from '../../../../Utils'
import useTimer from '../../../../hooks/useTimer'

import CountdownTimer from '../../../CountdownTimer'

const useStyle = makeStyles(Theme => ({
  root: { padding: Theme.spacing(11) },
  price: { fontSize: Theme.typography.fontSize[6] },
  titlePrice: { fontSize: Theme.typography.fontSize[3] },
  divider: {
    backgroundColor: Theme.palette.primary.main,
    opacity: Theme.palette.action.disabledOpacity[1],
  },
  button: {
    borderRadius: Theme.shape.borderRadius[2],
    backgroundColor: Theme.palette.buttons.selected,
    '&:hover': {
      border:
        Theme.palette.type === 'light'
          ? '1px solid #010101'
          : '1px solid #00FFFF',
    },
  },
  textButton: {
    fontSize: Theme.typography.fontSize[3],
    color: Theme.palette.primary.contrastText,
  },
  link: { textDecoration: 'none' },
}))

const AuctionItem = ({
  priceEth = 'NaN',
  priceUsd = 'NaN',
  expiration,
  link,
}: {
  priceEth: string
  priceUsd: string
  expiration: Date
  link: string
}) => {
  const {
    timer,
    changeTitle,
    variantButton,
    textButton,
    infoAuction,
    disableInfo,
    disableDays,
    disableHours,
    disableTime,
  } = useTimer({ expiration })

  const classes = useStyle()
  return (
    <Grid item>
      <Paper elevation={2}>
        <Grid item xs={12} container direction="column">
          <Grid
            container
            direction="row"
            alignContent="center"
            justify="space-around"
            className={classes.root}
          >
            <Grid item xs={12} sm={4} container direction="column">
              <Typography
                variant="button"
                color="primary"
                className={classes.titlePrice}
              >
                Current Bid
              </Typography>
              <Typography
                variant="button"
                color="primary"
                className={classes.price}
              >
                {isNaN(parseInt(priceEth))
                  ? `- ETH`
                  : `${formatDecimal(priceEth)} ETH`}
              </Typography>
              <Typography variant="button" color="inherit">
                {isNaN(parseInt(priceUsd)) ? `$ -` : formatUsd(priceUsd)}
              </Typography>
            </Grid>
            <Hidden mdDown>
              <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
              />
            </Hidden>
            <CountdownTimer
              timer={timer}
              changeTitle={changeTitle}
              infoAuction={infoAuction}
              disableDays={disableDays}
              disableHours={disableHours}
              disableTime={disableTime}
              disableInfo={disableInfo}
            />
          </Grid>

          <Divider className={classes.divider} />

          <Grid container justify="center" className={classes.root}>
            <Grid item xs={12}>
              <Link to={link} className={classes.link}>
                <Button
                  variant={`${variantButton}`}
                  fullWidth
                  className={classes.button}
                >
                  <Typography variant="button" className={classes.textButton}>
                    {textButton}
                  </Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default AuctionItem
