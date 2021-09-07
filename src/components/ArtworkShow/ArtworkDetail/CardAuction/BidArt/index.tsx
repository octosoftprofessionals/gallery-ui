import React, { useState } from 'react'

import {
  Button,
  Divider,
  Grid,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BidItem from './BidItem'
import { colors } from '../../../../Styles/Colors'

const Styles = makeStyles(Theme => ({
  divider: {
    backgroundColor: Theme.palette.primary.main,
  },
  button: {
    height: 58,
    borderRadius: Theme.shape.borderRadius[2],
    backgroundColor: Theme.palette.secondary.dark,
    border:
      Theme.palette.type === 'light'
        ? '2px solid #010101'
        : '2px solid #00FFFF',
  },
  textButton: {
    fontSize: Theme.typography.fontSize[3],
    color: Theme.palette.primary.dark,
  },
  link: { textDecoration: 'none' },
  conateinerTop: {
    backgroundColor: ({ color }: { color: string }) =>
      color || Theme.palette.secondary.light,
    padding: Theme.spacing(2, 0, 2, 11),
  },
  text: {
    cursor: 'default',
    '&:hover': { color: Theme.palette.secondary.contrastText },
  },
  box: { padding: Theme.spacing(11) },
  '@global': {
    '.MuiOutlinedInput-input': {
      color: colors.DimGray,
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: '2px solid #fff',
    },
  },
  input: {
    borderRadius: Theme.shape.borderRadius[2],
    fontFamily: Theme.typography.fontFamily[1],
    fontSize: Theme.typography.fontSize[10],
  },
  colorInput: {
    '@global': {
      '.MuiOutlinedInput-input': { color: Theme.palette.error.main },
    },
  },
  eth: {
    fontSize: Theme.typography.fontSize[9],
    lineHeight: '1.5',
  },
}))
const title = { Right: 'Current Bid', Left: 'Current Owner' }

const alertBuyNow = [
  {
    text: 'You currently have no bids',
    color: '#FFFFFF1A',
  },
  {
    text: 'Bid placed successfully',
    color: '#44B700',
  },
  {
    text: 'Your bid is too low!',
    color: '#812727',
  },
  {
    text: 'You have been outbid!',
    color: '#C48F25',
  },
]

const BidArt = ({
  priceEth,
  priceUsd,
  link,
  ownerAddress,
  ownerImageUrl,
  ownerUsername,
}) => {
  const [valueBid, setValueBid] = useState('')
  const classes = Styles({ color: alertBuyNow[3].color })

  return (
    <BidItem
      title={title}
      priceEth={priceEth}
      priceUsd={priceUsd}
      ownerAddress={ownerAddress}
      ownerImageUrl={ownerImageUrl}
      ownerUsername={ownerUsername}
    >
      <div className={classes.conateinerTop}>
        <Typography variant="body1" className={classes.text}>
          {alertBuyNow[3].text}
        </Typography>
      </div>
      <Grid
        item
        xs={12}
        container
        justify="space-around"
        alignItems="center"
        className={classes.box}
      >
        <Grid item xs={5}>
          <OutlinedInput
            color="primary"
            type="number"
            placeholder={'0.00'}
            fullWidth
            value={valueBid}
            onChange={e => setValueBid(e.target.value)}
            className={classes.input}
            endAdornment={
              <Grid item xs={6} container justify="space-around">
                <Grid item xs={1}>
                  <Divider orientation="vertical" className={classes.divider} />
                </Grid>
                <Typography
                  variant="button"
                  color="primary"
                  className={classes.eth}
                >
                  ETH
                </Typography>
              </Grid>
            }
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="text" fullWidth className={classes.button}>
            <Typography variant="caption" className={classes.textButton}>
              Place a bid
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </BidItem>
  )
}

export default BidArt
