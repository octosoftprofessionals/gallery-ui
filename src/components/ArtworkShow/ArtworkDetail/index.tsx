import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { biddingPathFrom, profilePathFromAddress } from '../../../config/routes'
import { GalleryItem, ArtworkLinks } from '../../../types'

import CreatorSection from './ArtworkCreartor'
import ArtworkInformation from './ArtworkInformation'
import HeadButtons from './HeadButtons'
import CardAuction from './CardAuction'
import History from './History'

const ArtworkDetail = ({
  galleryItem,
  linkTwitter,
  setDisplayReportModal,
}: {
  galleryItem: GalleryItem
  linkTwitter: Function
  setDisplayReportModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const classes = useStyle()

  const {
    assetContractAddress,
    assetTokenId,
    title,
    description,
    priceEth,
    priceUsd,
    creatorUsername,
    creatorImageUrl,
    creatorAddress,
    creatorDescription,
    ownerAddress,
    ownerImageUrl,
    ownerUsername,
    status,
    expiration,
    historyItems,
    imageOriginalUrl,
  } = galleryItem

  const creatorProfileLink = profilePathFromAddress(creatorAddress)
  const biddingLink = biddingPathFrom(assetContractAddress, assetTokenId)

  const artworkLinks = ({
    token,
    id,
    linkOriginImg,
  }: {
    token: string
    id: string
    linkOriginImg: string
  }): ArtworkLinks[] => {
    return [
      {
        link: `https://etherscan.io/token/${token}?a=${id}`,
        text: 'View on Etherscan',
        icon: 'iconEtherscan',
      },
      { link: linkOriginImg, text: 'View Image Origin', icon: 'iconView' },
    ]
  }

  const linksArtworkView = artworkLinks({
    token: assetContractAddress,
    id: assetTokenId,
    linkOriginImg: imageOriginalUrl,
  })

  return (
    <Grid container justify="center">
      <HeadButtons
        creatorUsername={creatorUsername}
        creatorImageUrl={creatorImageUrl}
        creatorProfileLink={creatorProfileLink}
        linkTwitter={linkTwitter}
        setDisplayReportModal={setDisplayReportModal}
      />
      <Grid item xs={10} container justify="space-between">
        <Grid item xs={12} md={5}>
          <ArtworkInformation
            title={title}
            description={description}
            linksArtworkView={linksArtworkView}
          />
        </Grid>
        <Grid item xs={12} md={6} container direction="column">
          <CardAuction
            creatorAddress={creatorAddress}
            assetContractAddress={assetContractAddress}
            assetTokenId={assetTokenId}
            ownerAddress={ownerAddress}
            ownerImageUrl={ownerImageUrl}
            ownerUsername={ownerUsername}
            status={status}
            priceEth={priceEth}
            priceUsd={priceUsd}
            expiration={expiration}
            biddingLink={biddingLink}
          />
          <History data={historyItems} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={10}>
        <CreatorSection
          username={creatorUsername}
          imageUrl={creatorImageUrl}
          profileUrl={creatorProfileLink}
          description={creatorDescription ?? ''}
        />
      </Grid>
    </Grid>
  )
}

const useStyle = makeStyles(Theme => ({
  root: {
    position: 'relative',
    backgroundColor: Theme.palette.secondary.dark,
    padding: Theme.spacing(9),
  },
  icon: { fontSize: `${Theme.typography.fontSize[0]}em` },
  text: {
    display: 'flex',
    alignItems: 'center',
    margin: Theme.spacing(3, 0, 9),
  },

  desciptionText: {
    margin: Theme.spacing(0, 0, 5),
    lineBreak: 'auto',
    whiteSpace: 'pre-line',
  },
  name: { margin: Theme.spacing(0, 0, 5) },
  title: { margin: 0 },
  creator: { fontSize: Theme.typography.fontSize[8] },
  buttonsContainer: {
    position: 'absolute',
    top: Theme.spacing(1),
    height: Theme.spacing(10),
  },
  history: {
    marginTop: Theme.spacing(3),
  },
  titleArtwork: { marginTop: Theme.spacing(9) },
}))

export default ArtworkDetail
