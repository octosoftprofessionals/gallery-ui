import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Spinner from '../../Spinner'
import {
  createFollow,
  unFollow,
  checkExistingFollow,
} from '../../../services/follow'
import { useAccountStore } from '../../../hooks/useAccountStore'
import { boxShadow } from '../../Styles/Colors'
import ButtonsSocialMedia from './ButtonsSocialMedia'
import FollowersModal from '../FollowersModal'
import { truncateMiddleText } from '../../../Utils/stringUtils'
import UserNetworks from './UserNetworks'

const useStyle = makeStyles(Theme => ({
  containerButton: {
    position: 'relative',
    marginBottom: Theme.spacing(10),
    '@media (max-width: 576px)': {
      marginLeft: Theme.spacing(0),
    },
  },
  button: {
    padding: 0,
    boxShadow: boxShadow.boxShadow1,
    backgroundColor: Theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: Theme.palette.primary.main,
      transform: 'none',
      boxShadow: 'none',
    },
    '@media (max-width: 576px)': {
      width: '200px',
    },
  },
  textButton: {
    width: '150px',
    '@media (max-width: 576px)': {
      padding: Theme.spacing(0),
      width: '200px',
    },
  },
  userName: {
    fontSize: '26px',
    marginLeft: Theme.spacing(13),
    '@media (max-width: 576px)': {
      marginLeft: Theme.spacing(0),
      textAlign: 'center',
    },
  },
  textFollow: {
    cursor: 'pointer',
    fontSize: Theme.typography.fontSize[3],
    opacity: '0.5',
    paddingRight: Theme.spacing(2),
    '&:hover': { color: Theme.palette.primary.main },
  },
  textFollowers: {
    cursor: 'pointer',
    fontSize: Theme.typography.fontSize[3],
    opacity: '0.5',
    paddingRight: Theme.spacing(2),
    '&:hover': { color: Theme.palette.primary.main },
    '@media (max-width: 576px)': {
      marginLeft: Theme.spacing(0),
      display: 'flex',
      flexDirection: 'row',
    },
  },
  userProfile: {
    width: '100%',

    '@media (max-width: 576px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  btn: {
    padding: Theme.spacing(2),
    textAlign: 'center',
    width: '100px',
    height: '40px',
    fontSize: '14px',
    textDecoration: 'none',
    backgroundColor: Theme.palette.secondary.main,
    borderRadius: Theme.spacing(6),
  },
  networks: {
    '@media (max-width: 576px)': {
      marginTop: Theme.spacing(6),
    },
  },
  bio: {
    '@media (max-width: 576px)': {
      marginTop: Theme.spacing(12),
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  buttonKeyPublic: {
    width: ({ isMyAccount }) => (isMyAccount ? '30%' : '50%'),
    position: 'absolute',
    left: ({ userIndex }) => (userIndex ? Theme.spacing(13) : 0),
    backgroundColor: Theme.palette.secondary.main,
    padding: Theme.spacing(0, 0, 0, 13),
    boxShadow: boxShadow.boxShadow1,
    '&:hover': {
      backgroundColor: Theme.palette.secondary.main,
      transform: 'none',
      boxShadow: boxShadow.boxShadow1,
    },
    '@media (max-width: 576px)': {
      width: '100%',
      left: Theme.spacing(0),
      padding: Theme.spacing(0, 0, 0, 15),
    },
  },
  btn: {
    padding: 0,
    margin: 0,
  },
}))

const InfoCreator = ({
  isMyAccount = false,
  username,
  publicKey,
  followers,
  following,
  followedes,
  web,
  ig,
  tw,
  bio,
  discord,
  youtube,
  facebook,
  tiktok,
  snapchat,
  userIndex = null,
}) => {
  const classes = useStyle({ userIndex, isMyAccount })
  const [isCopy, setIsCopy] = useState(false)
  const [account, _] = useAccountStore()
  const followMutation = useMutation(createFollow)
  const unFollowMutation = useMutation(unFollow)
  const { data: FollowQuery = {}, isLoading } = useQuery('FollowQuery', () =>
    checkExistingFollow({
      follower_address: publicKey,
      followee_address: account as string,
    })
  )
  const [viewModal, setViewModal] = useState('')

  const [isFollow, setIsFollow] = useState('')

  useEffect(() => {
    const { follow } = FollowQuery
    setIsFollow(follow)
  }, [FollowQuery, following, followers])

  const handleSubmitFollow = e => {
    e.preventDefault()
    followMutation.mutate({
      follower_address: publicKey,
      followee_address: account as string,
    })
    setIsFollow(true)
  }
  const handleSubmitUnfollow = e => {
    e.preventDefault()
    unFollowMutation.mutate({
      follower_address: publicKey,
      followee_address: account as string,
    })
    setIsFollow(false)
  }

  const getPublicKey = () => {
    navigator.clipboard.writeText(publicKey)
    setIsCopy(true)
  }

  const handleOpenModal = value => {
    setViewModal(value)
    setOpenFollowModal(true)
  }

  const [openFollowModal, setOpenFollowModal] = useState<boolean>(false)

  return (
    <>
      <Grid container direction="column">
        <Grid
          item
          container
          justify="space-around"
          direction="row"
          className={classes.userProfile}
        >
          <Grid item xs={3} direction="row">
            <Typography variant="h4" className={classes.userName}>
              {username ? `@${username}` : truncateMiddleText(publicKey, 5)}
            </Typography>
          </Grid>
          <Grid container item xs={2} direction="column" justify="flex-start">
            <Grid
              item
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Button
                className={classes.btn}
                onClick={() => handleOpenModal('1')}
              >
                <Typography variant="overline" className={classes.textFollow}>
                  Following
                </Typography>
              </Button>
              <Typography variant="h6" color="primary">
                {following ? following.length : '0'}
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Button
                className={classes.btn}
                onClick={() => handleOpenModal('2')}
              >
                <Typography
                  variant="overline"
                  className={classes.textFollowers}
                >
                  Followers
                </Typography>
              </Button>
              <Typography variant="h6" color="primary">
                {followers ? followers.length : '0'}
              </Typography>
            </Grid>
            {openFollowModal ? (
              <FollowersModal
                viewModal={viewModal}
                openFollowModal={openFollowModal}
                setOpenFollowModal={setOpenFollowModal}
                followers={followers}
                following={following}
                publicKey={publicKey}
              />
            ) : null}
          </Grid>
          <Grid item md={2} sm={9} xs={12}>
            {isMyAccount ? (
              <Button variant="outlined" fullWidth href="/editProfile">
                <Typography variant="button">Edit profile</Typography>
              </Button>
            ) : isLoading ? (
              <Spinner height="20vh" />
            ) : (
              <Button
                variant="outlined"
                fullWidth
                onClick={isFollow ? handleSubmitUnfollow : handleSubmitFollow}
              >
                {isFollow ? (
                  <Typography variant="button">Unfollow</Typography>
                ) : (
                  <Typography variant="button">Follow</Typography>
                )}
              </Button>
            )}
          </Grid>
          <Grid item md={4} xs={11} className={classes.networks}>
            <UserNetworks
              publicKey={publicKey}
              web={web}
              ig={ig}
              tw={tw}
              discord={discord}
              youtube={youtube}
              facebook={facebook}
              tiktok={tiktok}
              snapchat={snapchat}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item justify="flex-start" xs={12}>
        <Grid container sm={7} xs={12}>
          <Typography variant="body2" color="primary" className={classes.bio}>
            {bio}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default InfoCreator
