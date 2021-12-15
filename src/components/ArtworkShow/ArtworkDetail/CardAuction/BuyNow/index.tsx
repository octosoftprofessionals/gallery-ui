import React, { useState, useEffect } from 'react'

import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BuyNowItem from './BuyNowItem'
import { useAccountStore } from '../../../../../hooks/useAccountStore'
import BigNumber from 'bignumber.js'
import buyNow from '../../../../../services/buyNow'
import { useSetModalShow } from '../../../../../atom'
import { checkBalance } from '../../../../../Utils'

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
  const setConnectWallet = useSetModalShow()
  const { account, balance } = useAccountStore()
  const [textBuy, setTextBuy] = useState('You can buy this artwork.')
  const [isDisable, setIsDisable] = useState(true)
  const [accountBalanceWETH, setAccountBalanceWETH] =
    useState<BigNumber | null>(null)
  const [accountAddress, setAccoutnAddres] = useState<string | null>(null)

  useEffect(() => {
    setAccountBalanceWETH(new BigNumber(balance))
    setAccoutnAddres(account)
  }, [balance, account])
  const title = { Right: 'Current Price', Left: 'Current Owner' }

  const handleBuyNow = async () => {
    if (account !== null) {
      if (checkBalance(balance, priceEth)) {
        const result = await buyNow({
          priceEth,
          creatorAddress,
          accountAddress,
          assetContractAddress,
          assetTokenId,
          ownerAddress,
        })
      } else {
        setTextBuy('You cannot buy this artwork, you cannot afford it.')
      }
    } else {
      setConnectWallet(true)
    }
  }
  const classes = Styles({ isBalance: checkBalance(balance, priceEth) })

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
          {textBuy}
        </Typography>
      </div>
      <Grid item xs={12} container justify="center" className={classes.box}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            className={classes.button}
            onClick={handleBuyNow}
          >
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

export default BidArt
