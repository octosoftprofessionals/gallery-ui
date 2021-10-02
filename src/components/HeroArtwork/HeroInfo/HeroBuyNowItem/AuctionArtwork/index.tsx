import React from 'react'
import { Divider, Grid, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Price from './Price'

const useStyle = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(5, 0, 5, 0),
  },
  divider: {
    opacity: Theme.palette.action.disabledOpacity[1],
    backgroundColor: Theme.palette.primary.main,
  },
}))
const AuctionArtwork = ({
  priceEth,
  priceUsd,
}: {
  priceEth: string
  priceUsd: string
}) => {
  const classes = useStyle()
  return (
    <Grid
      item
      container
      alignContent="center"
      justify="center"
      className={classes.root}
    >
      <Price priceEth={priceEth} priceUsd={priceUsd} />
    </Grid>
  )
}

export default AuctionArtwork
