import React from 'react'
import { useQuery } from 'react-query'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid } from '@material-ui/core'
import { FileCopy } from '@material-ui/icons'
import { Link } from 'gatsby'
import GridCreator from './GridCreator'
import CreatorkShare from '../../components/ArtworkShow/ArtworkShare'
import InfoCreator from './InfoCreator'
import Share from '../../components/Creator/InfoCreator/Share'
import {
  getOneFolloweeByIdWithAllHisFollowers,
  getOneFollowerByIdWithAllHisFollowees,
} from '../../services/follow'

import { Users } from '../../types'

const useStyle = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(0, 5, 5, 16),
    '@media (max-width: 545px)': {
      width: '90%',
      padding: Theme.spacing(0),
      zIndex: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  avatar: {
    top: '-60px',
    width: '150px',
    height: '150px',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    userSelect: 'none',
    borderRadius: '50%',
    justifyContent: 'center',
    marginRight: Theme.spacing(2),
    border: '3px solid #232323',
    '@media (max-width: 545px)': {
      width: '200px',
      height: '200px',
      right: 60,
      /*       display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', */
    },
  },
  icon: {
    fill: Theme.palette.primary.main,
    fontSize: Theme.typography.fontSize[10],
    '@media (max-width: 545px)': { fontSize: Theme.typography.fontSize[10] },
  },
  share: {
    top: -20,
    left: 30,
    position: 'relative',
    '@media (max-width: 545px)': {
      top: -910,
      right: 150,
    },
  },
  profile: {
    marginTop: Theme.spacing(10),
    position: 'relative',
    '@media (max-width: 545px)': {
      padding: Theme.spacing(0),
      marginTop: Theme.spacing(0),
      marginLeft: Theme.spacing(10),
      dispay: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '90%',
    },
  },
  info: {
    '@media (max-width: 545px)': {
      dispay: 'flex',
      /*    position: 'absolute',
      top: '500px', */
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  tab: {
    marginTop: Theme.spacing(16),
    '@media (max-width: 545px)': {
      marginTop: Theme.spacing(0),
      /*   dispay: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', */
    },
  },
}))

const mock = {
  coverImgUrl:
    'https://f8n-production.imgix.net/creators/profile/y26ylgt72-rari-jpg-at7pyj.jpg',
  profileImgUrl:
    'https://f8n-production.imgix.net/creators/profile/czgizo65e-reylarsdam-gif-0oq2zd.gif',
}

const Creator = ({
  isMyAccount = false,
  user = undefined,
  setDisplayReportModal,
}: Props) => {
  const classes = useStyle({ imageUrl: mock.coverImgUrl })

  const {
    data: followeeItem = [],
    isLoading: isLoadingFollowees,
  } = useQuery('followeeQuery', () =>
    getOneFolloweeByIdWithAllHisFollowers(user.publicAddress)
  )

  const {
    data: followersItem = [],
    isLoading: isLoadingFollowers,
  } = useQuery('followersQuery', () =>
    getOneFollowerByIdWithAllHisFollowees(user.publicAddress)
  )

  const { followees } = followersItem
  const { followers } = followeeItem

  return user ? (
    <Grid container xs={12} direction="column" justify="center">
      <Grid container xs={12} className={classes.root}>
        <Grid item xs={1}>
          <Avatar src={mock.profileImgUrl} className={classes.avatar} />
        </Grid>
        <Grid
          container
          justify="space-around"
          md={8}
          xs={12}
          className={classes.profile}
        >
          <InfoCreator
            className={classes.info}
            isMyAccount={isMyAccount}
            username={user.username}
            publicKey={user.publicAddress}
            followers={followees ? followees : 0}
            following={followers ? followers : 0}
            followedes={followers ? followers : []}
            web={user.website}
            ig={user.instagram}
            tw={user.twitter}
            bio={user.bio}
            discord={user.discordId}
            youtube={user.youtube}
            facebook={user.facebook}
            tiktok={user.tiktok}
            snapchat={user.snapchat}
          />
        </Grid>
        <Grid item container justify="flex-start" md={3} xs={12}>
          <div className={classes.share}>
            <Share
              linkTwitter={user.twitter}
              setDisplayReportModal={setDisplayReportModal}
              right="24px"
            />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-end"
        xs={12}
        className={classes.tab}
      >
        <GridCreator
          isMyAccount={isMyAccount}
          profileAddress={user.publicAddress}
        />
      </Grid>
    </Grid>
  ) : null
}

type Props = {
  isMyAccount: boolean
  user?: Users
  setDisplayReportModal: Function
}

export default Creator
