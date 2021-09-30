import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CreatorButton from '../../../CreatorButton'
import { userInfo } from '../../../../types'

import ButtonViewArtwork from './ButtonViewArtwork'

const useStyle = makeStyles(Theme => ({
  container: {
    flexWrap: 'nowrap',
    paddingBottom: 5,
  },
  title: {
    paddingTop: 20,
    '@media (max-width: 768px)': {
      fontSize: Theme.typography.fontSize[4],
    },
  },
}))

const HeroAuctionItem = ({
  title,
  status,
  priceEth,
  priceUsd,
  expiration,
  linkButtonBid,
  linkButtonArtWork,
  isLoading,
  userInfo,
}: {
  title: string
  status: string
  priceEth?: string
  priceUsd?: string
  expiration?: string
  linkButtonBid?: string
  linkButtonArtWork?: string
  isLoading?: boolean
  userInfo: userInfo
}) => {
  const classes = useStyle()
  return (
    <Grid container direction="column" className={classes.container}>
      <CreatorButton
        username={userInfo.username}
        imageUrl={userInfo.imageUrl}
        profileUrl={userInfo.profileUrl}
        top="-32px"
      />
      <Grid item xs={12}>
        <Typography variant="h4" color="primary" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <ButtonViewArtwork />
    </Grid>
  )
}

export default HeroAuctionItem
