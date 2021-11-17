import React, { useState } from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import OfferItem from './OfferItem'
import OtherOffersItem from './OtherOffersItem'
import ItemToOffer from './ItemToOffer'

const OffersArt = ({
  priceEth,
  priceUsd,
  ownerAddress,
  ownerImageUrl,
  ownerUsername,
  assetContractAddress,
  assetTokenId,
}) => {
  const [valueBid, setValueBid] = useState('')
  const [isOwner, setIsOwner] = useState<boolean>(false)
  const [isOwnerOffers, setIsOwnerOffers] = useState<boolean>(false)
  const [isPendingOffer, setIsPendingOffer] = useState<boolean>(false)

  const classes = Styles({ color: alertOffer[0].color })

  return (
    <OfferItem
      title={title[0]}
      priceEth={priceEth}
      priceUsd={priceUsd}
      ownerAddress={ownerAddress}
      ownerImageUrl={ownerImageUrl}
      ownerUsername={ownerUsername}
    >
      <div className={classes.containerTop}>
        <Typography variant="body1" className={classes.text}>
          {alertOffer[0].text}
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
          isPendingOffer={isPendingOffer}
          setIsPendingOffer={setIsPendingOffer}
          priceEth={priceEth}
          assetContractAddress={assetContractAddress}
          assetTokenId={assetTokenId}
          ownerAddress={ownerAddress}

        />
      )}
    </OfferItem>
  )
}

const Styles = makeStyles(Theme => ({
  link: { textDecoration: 'none' },
  containerTop: {
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

const alertOffer = [
  {
    text: 'You can make an offer to the owner of this artwork',
    color: '#FFFFFF1A',
  },
  {
    text: 'Your current offer is pending review by the owner, placed wait.',
    color: '#FFFFFF1A',
  },
  {
    text: 'You received offers for this artwork.',
    color: '#FFFFFF1A',
  },
  {
    text: 'Your offer was accepted, this item will be in your collection soon.',
    color: '#44B700',
  },
  {
    text: 'Your offer was rejected. Make a counteroffer!',
    color: '#812727',
  },
  {
    text: 'The owner of this artwork has changed. Make a new offer.',
    color: '#C48F25',
  },
]
export default OffersArt
