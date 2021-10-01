import React, { useState } from 'react'
import {
  Button,
  Divider,
  Grid,
  OutlinedInput,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
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
  txtBtnMakeOffer: {
    fontSize: Theme.typography.fontSize[3],
    color: Theme.palette.primary.dark,
  },
  txtBtnCounteroffert: {
    fontSize: Theme.typography.fontSize[3],
    color: Theme.palette.primary.light,
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
  eth: {
    fontSize: Theme.typography.fontSize[9],
    lineHeight: '1.5',
  },
}))

const ItemToOffer = ({
  isOwner,
  valueBid,
  setValueBid,
  isPendingOffer,
  setIsPendingOffer,
}) => {
  const classes = Styles()
  const [textBtn, setTextBtn] = useState<string>('Make Offer')
  const handleOffer = () => {
    setTextBtn('Counteroffer')
    setIsPendingOffer(!isPendingOffer)
  }
  return (
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
            isPendingOffer ? classes.btnCounteroffer : classes.btnMakeOffer
          }
          onClick={handleOffer}
        >
          <Typography
            variant="caption"
            className={
              isPendingOffer
                ? classes.txtBtnCounteroffer
                : classes.txtBtnMakeOffer
            }
          >
            {textBtn}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
}

export default ItemToOffer
