import React from 'react'

import { Link } from 'gatsby'

import { Button, Divider, Grid, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CreatorButton from '../../../../CreatorButton'
import { formatDecimal, formatUsd } from '../../../../../Utils'
import useTimer from '../../../../../hooks/useTimer'

import Spinner from '../../../../Spinner'

import CountdownTimer from '../CountdownTimer'

const useStyle = makeStyles(Theme => ({
  '@global': {
    '.MuiTypography-colorSecondary': { color: Theme.palette.primary.main },
  },
  root: {
    padding: Theme.spacing(5, 0, 5, 0),
  },
  container: {
    flexWrap: 'nowrap',
    paddingBottom: 5,
  },
  price: { fontSize: Theme.typography.fontSize[6] },
  titlePrice: { fontSize: Theme.typography.fontSize[3] },
  divider: {
    opacity: Theme.palette.action.disabledOpacity[1],
    backgroundColor: Theme.palette.primary.main,
  },
  texTimer: {
    fontSize: Theme.typography.fontSize[3],
    marginTop: Theme.spacing(2),
  },
  button: { borderRadius: Theme.shape.borderRadius[2] },
  buttonView: {
    backgroundColor: 'transparent',
    borderRadius: Theme.shape.borderRadius[2],
    border: `${Theme.palette.primary.dark} solid 1px`,
    '&:hover': {
      border: `${Theme.palette.primary.dark} solid 1px`,
    },
  },
  textButton: { fontSize: Theme.typography.fontSize[3] },
  numberTimer: { fontSize: Theme.typography.fontSize[6] },
  link: { textDecoration: 'none' },
  title: {
    paddingTop: 20,
    '@media (max-width: 768px)': {
      fontSize: Theme.typography.fontSize[4],
    },
  },
  boxTimer: {
    display: ({ disableTime }: { disableTime: boolean }) =>
      disableTime ? 'flex' : 'none',
  },
}))

const HeroAuctionItem = ({
  title,
  status,
  priceEth,
  priceUsd,
  expiration,
  linkButtonBid,
  linkButtonArtWork,
  isLoading,
  userInfo,
}) => {
  const {
    timer,
    changeTitle,
    disableInfo,
    disableDays,
    disableHours,
    disableTime,
  }: {
    timer: string[]
    changeTitle: string
    disableInfo: boolean
    disableDays: boolean
    disableHours: boolean
    disableTime: boolean
  } = useTimer({ expiration })
  const classes = useStyle({ disableTime })
  return (
    <Grid container direction="column" className={classes.container}>
      <CreatorButton
        username={userInfo.username}
        imageUrl={userInfo.imageUrl}
        profileUrl={userInfo.profileUrl}
        top="-32px"
      />

      <Grid item xs={12}>
        <Typography variant="h4" color="primary" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={11}
        container
        direction="row"
        alignContent="center"
        justify="space-between"
        className={classes.root}
      >
        <Grid item xs={12} md={3} container direction="column">
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
            {isNaN(priceEth) ? '—' : `${formatDecimal(priceEth)} ETH`}
          </Typography>
          <Typography variant="caption">
            {isNaN(priceUsd) ? '—' : `${formatUsd(priceUsd)}`}
          </Typography>
        </Grid>
        <Hidden mdDown>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
        </Hidden>

        {isLoading ? (
          <Spinner height="30vh" />
        ) : (
          <CountdownTimer
            timer={timer}
            changeTitle={changeTitle}
            disableDays={disableDays}
            disableHours={disableHours}
            disableTime={disableTime}
            disableInfo={disableInfo}
          />
        )}
      </Grid>
      <Grid
        item
        sm={11}
        container
        direction="row"
        justify="flex-start"
        spacing={4}
      >
        <Grid item xs={12} md={6}>
          <Link to={linkButtonBid} className={classes.link}>
            <Button variant="outlined" fullWidth className={classes.button}>
              <Typography variant="button" className={classes.textButton}>
                Place a bid
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={5}>
          <Link to={linkButtonArtWork} className={classes.link}>
            <Button
              variant="contained"
              fullWidth
              className={classes.buttonView}
            >
              <Typography
                variant="button"
                color="secondary"
                className={classes.textButton}
              >
                View artwork
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HeroAuctionItem
