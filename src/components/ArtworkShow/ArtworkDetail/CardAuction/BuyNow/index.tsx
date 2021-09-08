import React from 'react'

import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BuyNowItem from './BuyNowItem'

const Styles = makeStyles(Theme => ({
  divider: {
    backgroundColor: Theme.palette.primary.main,
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
    fontSize: Theme.typography.fontSize[4],
    color: Theme.palette.primary.contrastText,
  },
  link: { textDecoration: 'none' },
  conateinerTop: {
    backgroundColor: Theme.palette.secondary.light,
    padding: Theme.spacing(2, 0, 2, 11),
  },
  text: {
    cursor: 'default',
    '&:hover': { color: Theme.palette.secondary.contrastText },
  },
  box: { padding: Theme.spacing(3, 0), height: Theme.spacing(14) },
  input: {
    borderRadius: Theme.shape.borderRadius[2],
    fontFamily: Theme.typography.fontFamily[1],
    fontSize: Theme.typography.fontSize[10],
  },
}))
const title = { Right: 'Current Preice', Left: 'Current Owner' }

const BidArt = ({
  priceEth,
  priceUsd,
  link,
  ownerAddress,
  ownerImageUrl,
  ownerUsername,
}) => {
  const classes = Styles()

  return (
    <BuyNowItem
      title={title}
      priceEth={priceEth}
      priceUsd={priceUsd}
      ownerAddress={ownerAddress}
      ownerImageUrl={ownerImageUrl}
      ownerUsername={ownerUsername}
    >
      <div className={classes.conateinerTop}>
        <Typography variant="body1" className={classes.text}>
          {'You can buy this artwork.'}
        </Typography>
      </div>
      <Grid item xs={12} container justify="center" className={classes.box}>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth className={classes.button}>
            <Typography variant="button" className={classes.textButton}>
              {'Buy Now'}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </BuyNowItem>
  )
}

export default BidArt
