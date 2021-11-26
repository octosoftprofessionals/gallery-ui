import React, { useState, useEffect } from 'react'

import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BuyNowItem from './BuyNowItem'
import { useAccountStore } from '../../../../../hooks/useAccountStore'
import BigNumber from 'bignumber.js'
import buyNow from '../../../../../services/buyNow'

const BidArt = ({
  assetContractAddress,
  assetTokenId,
  priceEth,
  priceUsd,
  link,
  creatorAddress,
  ownerAddress,
  ownerImageUrl,
  ownerUsername,
}) => {
  const classes = Styles()

  const { account, balance } = useAccountStore()
  const [accountBalanceWETH, setAccountBalanceWETH] = useState<BigNumber | null>(null)
  const [accountAddress, setAccoutnAddres] = useState<string | null>(null)

  useEffect(() => {
    setAccountBalanceWETH(new BigNumber(balance))
    setAccoutnAddres(account)
  }, [balance, account])

  const handleBuyNow = async () => {
    const result = await buyNow({
      priceEth,
      creatorAddress,
      accountAddress,
      assetContractAddress,
      assetTokenId,
      ownerAddress,
    })
  }
  return (
    <BuyNowItem
      assetContractAddress={assetContractAddress}
      assetTokenId={assetTokenId}
      title={title}
      priceEth={priceEth}
      priceUsd={priceUsd}
      ownerAddress={ownerAddress}
      ownerImageUrl={ownerImageUrl}
      ownerUsername={ownerUsername}
    >
      <div className={classes.containerTop}>
        <Typography variant="body1" className={classes.text}>
          {'You can buy this artwork.'}
        </Typography>
      </div>
      <Grid item xs={12} container justify="center" className={classes.box}>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth className={classes.button}
            onClick={handleBuyNow}>
            <Typography variant="button" className={classes.textButton}>
              {'Buy Now'}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </BuyNowItem>
  )
}
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
  containerTop: {
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
const title = { Right: 'Current Price', Left: 'Current Owner' }
export default BidArt
