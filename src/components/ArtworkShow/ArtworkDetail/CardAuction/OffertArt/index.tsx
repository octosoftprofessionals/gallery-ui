import React, { useState } from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import OffertItem from './OffertItem'
import OtherOffersItem from './OtherOffersItem'
import ItemToOffer from './ItemToOffer'

const Styles = makeStyles(Theme => ({
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
  boxOffers: {
    maxHeight: `${Theme.spacing(12)}vh`,
    overflow: 'auto',
  },
}))
const title = [
  { Right: 'Best offer', Left: 'Current Owner' },
  { Right: 'Last Price', Left: 'Current Owner' },
]

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
    text: 'You recieved offers for this artwork.',
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
  const [isOwnerOffers, setIsOwnerOffers] = useState<boolean>(false)
  const [isPendingOffert, setIsPendingOffert] = useState<boolean>(false)

  const classes = Styles({ color: alertOffert[0].color })

  return (
    <OffertItem
      title={title[0]}
      priceEth={priceEth}
      priceUsd={priceUsd}
      ownerAddress={ownerAddress}
      ownerImageUrl={ownerImageUrl}
      ownerUsername={ownerUsername}
    >
      <div className={classes.conateinerTop}>
        <Typography variant="body1" className={classes.text}>
          {alertOffert[0].text}
        </Typography>
      </div>
      {isOwnerOffers ? (
        <Grid item className={classes.boxOffers}>
          <OtherOffersItem />
        </Grid>
      ) : (
        <ItemToOffer
          isOwner={isOwner}
          valueBid={valueBid}
          setValueBid={setValueBid}
          isPendingOffert={isPendingOffert}
          setIsPendingOffert={setIsPendingOffert}
        />
      )}
    </OffertItem>
  )
}

export default OffertArt
