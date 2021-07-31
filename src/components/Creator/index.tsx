import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid } from '@material-ui/core'
import GridCreator from './GridCreator'
import InfoCreator from './InfoCreator'
import CreatorkShare from '../../components/ArtworkShow/ArtworkShare'
import { boxShadow } from '../../components/Styles/Colors'
import { useQuery } from 'react-query'
import {
  getOneFolloweeByIdWithAllHisFollowers,
  getOneFollowerByIdWithAllHisFollowees,
} from '../../services/follow'
import { Users } from '../../types'

const useStyle = makeStyles(Theme => ({
  root: { position: 'relative', paddingBottom: Theme.spacing(16) },
  containerAvatar: {
    position: 'absolute',
    top: `-${Theme.spacing(3)}vw`,
    left: Theme.spacing(9),
    backgroundColor: Theme.palette.card.secondary,
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
}))

const Creator = ({
  isMyAccount = false,
  user = undefined,
  setDisplayReportModal,
}: Props) => {
  const classes = useStyle()

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
    <>
      <Grid container justify="space-around" className={classes.root}>
        <Grid item className={classes.containerAvatar}>
          <Avatar src={user.profileImgUrl} className={classes.avatar} />
        </Grid>

        <CreatorkShare
          linkTwitter={user.twitter}
          setDisplayReportModal={setDisplayReportModal}
          right="24px"
        />
      </Grid>
      <Grid
        container
        justify="space-around"
        wrap="wrap"
        className={classes.info}
      >
        <Grid item xs={10} md={6}>
          <InfoCreator
            isMyAccount={isMyAccount}
            username={user.username}
            publicKey={user.publicAddress}
            followers={followees ? followees.length : 0}
            following={followers ? followers.length : 0}
            followedes={followers ? followers : []}
          />
        </Grid>
        <Grid item xs={10} sm={12}>
          <GridCreator
            isMyAccount={isMyAccount}
            profileAddress={user.publicAddress}
          />
        </Grid>
      </Grid>
    </>
  ) : null
}

type Props = {
  isMyAccount: boolean
  user?: Users
  setDisplayReportModal: Function
}

export default Creator
