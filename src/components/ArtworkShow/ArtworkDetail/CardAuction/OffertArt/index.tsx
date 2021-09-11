import React, { useState } from 'react'

import {
  Button,
  Divider,
  Grid,
  OutlinedInput,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import OffertItem from './OffertItem'
import { colors } from '../../../../Styles/Colors'

const Styles = makeStyles(Theme => ({
  divider: {
    backgroundColor: Theme.palette.primary.main,
  },
  btnMakeOffer: {
    height: 58,
    borderRadius: Theme.shape.borderRadius[2],
    backgroundColor: Theme.palette.secondary.dark,
    border:
      Theme.palette.type === 'light'
        ? `3px solid ${Theme.palette.secondary.contrastText}`
        : '2px solid #00FFFF',
  },
  btnCounteroffert: {
    height: 58,
    borderRadius: Theme.shape.borderRadius[2],
    backgroundColor:
      Theme.palette.type === 'light'
        ? Theme.palette.secondary.contrastText
        : Theme.palette.secondary.main,
    border:
      Theme.palette.type === 'light'
        ? `3px solid ${Theme.palette.secondary.contrastText}`
        : `2px solid ${Theme.palette.secondary.light}`,
  },
  btnMakeCounteroffert: {
    height: 58,
    borderRadius: Theme.shape.borderRadius[2],
    backgroundColor:
      Theme.palette.type === 'light'
        ? Theme.palette.secondary.contrastText
        : Theme.palette.secondary.main,
    border:
      Theme.palette.type === 'light'
        ? `3px solid ${Theme.palette.secondary.contrastText}`
        : `2px solid ${Theme.palette.secondary.light}`,
  },
  txtBtnMakeOffer: {
    fontSize: Theme.typography.fontSize[3],
    color: Theme.palette.primary.dark,
  },
  txtBtnCounteroffert: {
    fontSize: Theme.typography.fontSize[3],
    color: Theme.palette.primary.light,
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
  box: {
    padding: Theme.spacing(11),
  },
  '@global': {
    '.MuiOutlinedInput-input': {
      color: colors.DimGray,
    },
    '.MuiOutlinedInput-notchedOutline': {
      border:
        Theme.palette.type === 'light'
          ? `3px solid ${Theme.palette.secondary.contrastText}`
          : `2px solid ${Theme.palette.secondary.contrastText}`,
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
const title = { Right: 'Best offer', Left: 'Current Owner' }

const alertOffert = [
  {
    text: 'You can make an offer to the owner of this artwork',
    color: '#FFFFFF1A',
  },
  {
    text: 'Your current offert is pending review by the owner, placed wait.',
    color: '#FFFFFF1A',
  },
  {
    text: 'Your offer was accepted, this item will be in your collection soom.',
    color: '#44B700',
  },
  {
    text: 'Your offer was rejected. Make a counteroffert!',
    color: '#812727',
  },
  {
    text: 'The owner of this artwork has changed. Make a new offer.',
    color: '#C48F25',
  },
]

const OffertArt = ({
  priceEth,
  priceUsd,
  ownerAddress,
  ownerImageUrl,
  ownerUsername,
}) => {
  const [valueBid, setValueBid] = useState('')
  const [isOwner, setIsOwner] = useState<boolean>(false)
  const [isPendingOffert, setIsPendingOffert] = useState<boolean>(false)
  const [textBtn, setTextBtn] = useState<string>('Make Offer')
  const classes = Styles({ color: alertOffert[4].color })

  const handleOffert = () => {
    setTextBtn('Counteroffert')
    setIsPendingOffert(!isPendingOffert)
  }

  return (
    <OffertItem
      title={title}
      priceEth={priceEth}
      priceUsd={priceUsd}
      ownerAddress={ownerAddress}
      ownerImageUrl={ownerImageUrl}
      ownerUsername={ownerUsername}
    >
      <div className={classes.conateinerTop}>
        <Typography variant="body1" className={classes.text}>
          {alertOffert[4].text}
        </Typography>
      </div>
      <Grid
        item
        xs={12}
        style={{ display: isOwner ? 'none' : 'flex' }}
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
          <Button
            variant="text"
            fullWidth
            className={
              isPendingOffert ? classes.btnCounteroffert : classes.btnMakeOffer
            }
            onClick={handleOffert}
          >
            <Typography
              variant="caption"
              className={
                isPendingOffert
                  ? classes.txtBtnCounteroffert
                  : classes.txtBtnMakeOffer
              }
            >
              {textBtn}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </OffertItem>
  )
}

export default OffertArt
