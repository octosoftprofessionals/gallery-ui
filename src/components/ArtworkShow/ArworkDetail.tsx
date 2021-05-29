import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ArrowDownward } from '@material-ui/icons'
import Creator from '../ArtworkGrid'
import CardAuction from './CardAuction'

import ArtworkView from './ArtworkLinks'
import CreatorSection from './ArtworkCreartor'
import HistoryItem from './HistoryItem'

import ArtworkShare from './ArtworkShare'
import CreatorButton from '../CreatorButton'
import { biddingPathFrom, profilePathFromAddress } from '../../config/routes'

const useStyle = makeStyles(Theme => ({
  root: {
    position: 'relative',
    backgroundColor: Theme.palette.secondary.main,
    padding: Theme.spacing(9),
  },
  icon: { fontSize: `${Theme.typography.fontSize[0]}em` },
  text: {
    display: 'flex',
    alignItems: 'center',
    margin: Theme.spacing(3, 0, 9),
  },

  desciptionText: { margin: Theme.spacing(0, 0, 5) },
  name: { margin: Theme.spacing(0, 0, 5) },
  title: { margin: 0 },
  creator: { fontSize: Theme.typography.fontSize[8] },
  buttonsContainer: {
    position: 'absolute',
    top: Theme.spacing(1),
    height: Theme.spacing(10),
  },
}))

const ArtworkDetail = ({
  galleryItem,
  artworkLinks,
  linkTwitter,
  setDisplayReportModal,
}) => {
  const classes = useStyle()

  const {
    assetContractAddress,
    assetTokenId,
    title,
    description,
    number,
    imageUrl,
    videoUrl,
    priceEth,
    priceUsd,
    creatorUsername,
    creatorImageUrl,
    creatorAddress,
    creatorDescription,
    status,
    expiration,
    historyItems,
  } = galleryItem

  const creatorProfileLink = profilePathFromAddress(creatorAddress)
  const biddingLink = biddingPathFrom(assetContractAddress, assetTokenId)

  const History = ({ data = [] }) => (
    <div>
      <Typography variant="h6" color="primary">
        History
      </Typography>
      <div>
        {data.map(historyItem => (
          <HistoryItem {...historyItem} />
        ))}
      </div>
    </div>
  )

  return (
    <Grid
      container
      justify="space-between"
      wrap="wrap"
      className={classes.root}
    >
      <CreatorButton username={creatorUsername} imageUrl={creatorImageUrl} profileUrl={creatorProfileLink} />
      <ArtworkShare
        linkTwitter={linkTwitter}
        setDisplayReportModal={setDisplayReportModal}
        right="24px"
      />
      <Grid container wrap="wrap" justify="space-between">
        <Grid item xs={12} md={5} container direction="column">
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1" className={classes.text}>
            <ArrowDownward className={classes.icon} /> Artwork information
          </Typography>

          <Typography
            variant="subtitle1"
            color="initial"
            className={classes.title}
          >
            Description
          </Typography>
          <Typography
            variant="body2"
            color="initial"
            className={classes.desciptionText}
          >
            {description}
          </Typography>

          <Typography
            variant="subtitle1"
            color="initial"
            className={classes.title}
          >
            Edition of
          </Typography>
          <Typography variant="h4" color="initial">
            {number}
          </Typography>
          <ArtworkView artworkLinks={artworkLinks} />
        </Grid>
        <Grid item xs={12} md={6} container direction="column">
          <CardAuction
            auctionState={true}
            priceEth={priceEth}
            priceUsd={priceUsd}
            expiration={expiration}
            biddingLink={biddingLink}
          />
          <History data={historyItems} />
        </Grid>
      </Grid>

      <Creator displayTextButton="none" title="Creator" fontSize="24px" />
      <CreatorSection
        username={creatorUsername}
        imageUrl={creatorImageUrl}
        profileUrl={creatorProfileLink}
        description={creatorDescription ?? ''}
      />
    </Grid>
  )
}

export default ArtworkDetail
