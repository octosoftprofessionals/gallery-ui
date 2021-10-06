import React, { useState } from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import BidItem from './BidItem'
import ButtonBid from './ButtonBid'
import OtherBidsItem from './OtherBidsItem'

const Styles = makeStyles(Theme => ({
  containerTop: {
    backgroundColor: ({ color }: { color: string }) =>
      color || Theme.palette.secondary.light,
    padding: Theme.spacing(2, 0, 2, 11),
  },
  text: {
    cursor: 'default',
    '&:hover': { color: Theme.palette.secondary.contrastText },
  },
  boxBids: {
    maxHeight: `${Theme.spacing(12)}vh`,
    overflow: 'auto',
  },
}))

const title = [
  { Right: 'Current Bid', Left: 'Current Owner' },
  { Right: 'Highest Bid', Left: 'Current Owner' },
]

const alertBuyNow = [
  {
    text: 'You currently have no bids',
    color: '#FFFFFF1A',
  },
  {
    text: 'People have bid for this artwork.',
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
  const [isBidsForOwner, setIsBidsForOwner] = useState<boolean>(false)
  const classes = Styles({ color: alertBuyNow[0].color })

  return (
    <BidItem
      title={title[0]}
      priceEth={priceEth}
      priceUsd={priceUsd}
      ownerAddress={ownerAddress}
      ownerImageUrl={ownerImageUrl}
      ownerUsername={ownerUsername}
    >
      <div className={classes.containerTop}>
        <Typography variant="body1" className={classes.text}>
          {alertBuyNow[0].text}
        </Typography>
      </div>
      {isBidsForOwner ? (
        <Grid item xs={12} className={classes.boxBids}>
          <OtherBidsItem />
        </Grid>
      ) : (
        <ButtonBid valueBid={valueBid} setValueBid={setValueBid} link={link} />
      )}
    </BidItem>
  )
}

export default BidArt
