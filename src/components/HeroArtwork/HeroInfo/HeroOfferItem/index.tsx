import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CreatorButton from '../../../CreatorButton'
import { userInfo } from '../../../../types'

import AuctionArtwork from './AuctionArtwork'
import ButtonsArtwork from '../../ButtonsArtwork'

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
  priceEth,
  priceUsd,
  expiration,
  linkButton,
  linkButtonArtWork,
  userInfo,
}: {
  title: string
  priceEth?: string
  priceUsd?: string
  expiration?: string
  linkButton?: string
  linkButtonArtWork?: string
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
      <AuctionArtwork
        priceEth={priceEth}
        priceUsd={priceUsd}
        expiration={expiration}
      />
      <ButtonsArtwork
        textButton={'Make an offer'}
        linkButtonArtWork={linkButtonArtWork}
        linkButton={linkButton}
      />
    </Grid>
  )
}

export default HeroAuctionItem
