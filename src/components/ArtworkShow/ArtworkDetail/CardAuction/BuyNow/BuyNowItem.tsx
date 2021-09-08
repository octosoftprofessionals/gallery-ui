import React, { ReactChild, ReactChildren } from 'react'

import { Link } from 'gatsby'

import { Divider, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { formatUsd, formatDecimal } from '../../../../../Utils'
import OwnerButton from '../../../../CreatorButton'
import { profilePathFromAddress } from '../../../../../config/routes'

const Styles = makeStyles(Theme => ({
  root: {
    width: '100%',
    backgroundColor: Theme.palette.secondary.light,
    padding: Theme.spacing(11, 0),
  },
  box: { padding: Theme.spacing(0, 11) },
  price: { fontSize: Theme.typography.fontSize[6] },
  titlePrice: { fontSize: Theme.typography.fontSize[3] },
  divider: {
    backgroundColor: Theme.palette.primary.main,
    marginBottom: Theme.spacing(4),
  },
  btnOwner: {
    margin: 0,
  },
}))

const BidItem = ({
  title,
  priceEth,
  priceUsd,
  ownerAddress,
  ownerImageUrl,
  ownerUsername,
  children,
}: {
  title: any
  priceEth: number
  priceUsd: number
  ownerAddress: string
  ownerImageUrl: string
  ownerUsername: string
  children: ReactChild | ReactChildren
}) => {
  const classes = Styles()
  const ownerProfileLink = profilePathFromAddress(ownerAddress)
  return (
    <Paper elevation={2} className={classes.root}>
      <Grid item xs={12} container direction="column" className={classes.box}>
        <Grid item container alignContent="center" justify="space-around">
          <Grid item xs={12} sm={4} container direction="column">
            <Typography
              variant="button"
              color="primary"
              className={classes.titlePrice}
            >
              {title.Right}
            </Typography>
            <Typography
              variant="button"
              color="primary"
              className={classes.price}
            >
              {isNaN(priceEth) ? `- ETH` : `${formatDecimal(priceEth)} ETH`}
            </Typography>
            <Typography variant="button" color="inherit">
              {isNaN(priceUsd) ? `$ -` : formatUsd(priceUsd)}
            </Typography>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <Grid item xs={12} sm={4} container direction="column">
            <Typography
              variant="button"
              color="primary"
              className={classes.titlePrice}
            >
              {title.Left}
            </Typography>
            <OwnerButton
              username={ownerUsername}
              imageUrl={ownerImageUrl}
              profileUrl={ownerProfileLink}
              position={'none'}
              top={'0'}
            />
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </Grid>
      {children}
    </Paper>
  )
}

export default BidItem
