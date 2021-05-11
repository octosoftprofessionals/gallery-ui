import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ArrowDownward } from '@material-ui/icons'
import Creator from '../ArtworkGrid'
import CardAuction from './CardAuction'

import ArtworkView from './ArtworkLinks'
import CreatorSection from './ArtworkCreartor'

import ArtworkShare from './ArtworkShare'
import CreatorButton from '../CreatorButton'

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
    width: '95vw',
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}))

const ArworkDetail = ({
  profileImageUrl,
  name,
  titleArt,
  description,
  namber,
  price,
  money,
  endingIn,
  linkProfile,
  link,
  artworkLinks,
  descriptionCreator,
  linkTwitter,
  setDisplayReportModal,
}) => {
  const classes = useStyle()
  return (
    <Grid container justify="space-between" className={classes.root}>
      <CreatorButton imgUrl={profileImageUrl} name={name} link={linkProfile} />
      <div className={classes.buttonsContainer}>
        <ArtworkShare
          linkTwitter={linkTwitter}
          setDisplayReportModal={setDisplayReportModal}
        />
      </div>
      <Grid item xs={12} sm={6} container direction="column">
        <Typography variant="h4">{titleArt}</Typography>
        <Typography variant="body1" className={classes.text}>
          <ArrowDownward className={classes.icon} /> Artwork information
        </Typography>
        <Grid item xs={12} sm={6} container>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="initial"
              className={classes.title}
            >
              Description
            </Typography>
          </Grid>
          <Typography
            variant="body2"
            color="initial"
            className={classes.desciptionText}
          >
            {description}
          </Typography>
        </Grid>
        <Typography
          variant="subtitle1"
          color="initial"
          className={classes.title}
        >
          Edition of
        </Typography>
        <Typography variant="h4" color="initial">
          {namber}
        </Typography>
        <ArtworkView artworkLinks={artworkLinks} />
      </Grid>
      <Grid item xs={12} sm={6} container direction="column">
        <CardAuction
          auctionState={true}
          price={price}
          money={money}
          endingIn={endingIn}
          link={link}
        />
        <Typography variant="h6" color="primary">
          History
        </Typography>
      </Grid>
      <Creator displayTextButton="none" title="Creator" fontSize="24px" />
      <CreatorSection
        imgUrl={profileImageUrl}
        name={name}
        descriptionCreator={descriptionCreator}
      />
    </Grid>
  )
}

export default ArworkDetail
