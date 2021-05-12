import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Grid,
  Typography,
  Button,
  IconButton,
  withWidth,
  Hidden,
} from '@material-ui/core'
import { MoreHoriz, ArrowUpward, Maximize } from '@material-ui/icons'

import GridCreator from './GridCreator'
import InfoCreator from './InfoCreator'
import CreatorkShare from '../../components/ArtworkShow/ArtworkShare'
import { boxShadow } from '../../components/Styles/Colors'

const useStyle = makeStyles(Theme => ({
  root: { position: 'relative', paddingBottom: Theme.spacing(16) },
  containerAvatar: {
    position: 'absolute',
    top: `-${Theme.spacing(3)}vw`,
    left: Theme.spacing(9),
    backgroundColor: Theme.palette.secondary.main,
    padding: Theme.spacing(3),
    borderRadius: `${Theme.shape.borderRadius[3]}%`,
    '@media (max-width: 545px)': {
      top: `-${Theme.typography.fontSize[5]}vw`,
      padding: Theme.spacing(2),
    },
  },
  avatar: {
    width: `${Theme.spacing(4)}vw`,
    height: `${Theme.spacing(4)}vw`,
    '@media (max-width: 545px)': {
      width: `${Theme.spacing(5)}vh`,
      height: `${Theme.spacing(5)}vh`,
    },
  },
  boxIconButton: {
    backgroundColor: Theme.palette.secondary.main,
    borderRadius: `${Theme.shape.borderRadius[3]}%`,
    boxShadow: boxShadow.boxShadow1,
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: boxShadow.boxShadow4,
    },
  },
  buttonReport: {
    '&:hover': { backgroundColor: Theme.palette.secondary.main },
  },
  iconMore: {
    fontSize: Theme.typography.fontSize[11],
    '@media (max-width: 545px)': { fontSize: Theme.typography.fontSize[5] },
    fill: Theme.palette.primary.main,
  },
  icon: {
    fill: Theme.palette.primary.main,
    fontSize: Theme.typography.fontSize[10],
    '@media (max-width: 545px)': { fontSize: Theme.typography.fontSize[10] },
  },
  buttonShare: {
    padding: Theme.spacing(3, 9),
    margin: 'auto',
    boxShadow: boxShadow.boxShadow1,
    backgroundColor: Theme.palette.secondary.main,
    '&:hover': { backgroundColor: Theme.palette.secondary.main },
    '@media (max-width: 545px)': { padding: 0 },
  },
  textShare: {
    marginLeft: Theme.spacing(3),
    fontSize: Theme.typography.fontSize[3],
  },
  info: {
    '@media (max-width: 545px)': { justifyContenet: 'center' },
  },
  containerShare: { position: 'absolute', width: 'inherit', right: '-84vw' },
}))

const itemAvatar = [
  'https://f8n-ipfs-production.imgix.net/Qme7ShWfH2GHnbKHo9Vb41PxMwLunLxgKGebF94RzjGhCs/nft.png',
  'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
  'https://f8n-ipfs-production.imgix.net/QmTf4rxGkyryv6Vnm9mFJxWTEXcqjmtgxQXz7m5cqmLFsv/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
  'https://f8n-ipfs-production.imgix.net/Qme7ShWfH2GHnbKHo9Vb41PxMwLunLxgKGebF94RzjGhCs/nft.png',
  'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
  'https://f8n-ipfs-production.imgix.net/QmTf4rxGkyryv6Vnm9mFJxWTEXcqjmtgxQXz7m5cqmLFsv/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
]

const Creator = ({ creatorQuery, linkTwitter, setDisplayReportModal }) => {
  const classes = useStyle()
  const {
    profileImageUrl,
    name,
    username,
    followers,
    following,
    links,
    bio,
    createdAt,
    userIndex,
    publicKey,
  } = creatorQuery

  return (
    <>
      <Grid container justify="space-around" className={classes.root}>
        <Grid item className={classes.containerAvatar}>
          <Avatar src={profileImageUrl} className={classes.avatar} />
        </Grid>

        <div className={classes.containerShare}>
          <CreatorkShare
            linkTwitter={linkTwitter}
            setDisplayReportModal={setDisplayReportModal}
          />
        </div>
      </Grid>
      <Grid
        container
        justify="space-around"
        wrap="wrap"
        className={classes.info}
      >
        <Grid item xs={11} md={4}>
          <InfoCreator
            name={name}
            username={username}
            followers={followers}
            following={following}
            followedes={itemAvatar}
            links={links}
            bio={bio}
            createdAt={createdAt}
            userIndex={userIndex}
            publicKey={publicKey}
          />
        </Grid>
        <Grid item xs={11} md={7}>
          <GridCreator />
        </Grid>
      </Grid>
    </>
  )
}

export default withWidth()(Creator)
