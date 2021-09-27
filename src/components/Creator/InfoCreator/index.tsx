import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { Link } from 'gatsby'
import { Button, Grid, Typography } from '@material-ui/core'
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/core/styles'

import {
  createFollow,
  unFollow,
  checkExistingFollow,
} from '../../../services/follow'
import MessageSnackBar from '../../MessageSnackBar'
import { useMetamaskAccount } from '../../../hooks/useAccountStore'
import { truncateMiddleText } from '../../../Utils/stringUtils'
import { useSetModalShow } from '../../../atom'
import { TransitionProps } from '../../../types'

import Spinner from '../../Spinner'
import { boxShadow } from '../../Styles/Colors'

import FollowersModal from '../FollowersModal'

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
    fontSize: 20,
    textAlign: 'left',
    textTransform: 'lowercase',
    '@media (max-width: 576px)': {
      marginLeft: Theme.spacing(0),
      textAlign: 'center',
    },
  },
  textFollow: {
    cursor: 'pointer',
    fontSize: Theme.typography.fontSize[3],
    opacity: '0.5',
    textAlign: 'center',
    padding: Theme.spacing(0, 3),
    '&:hover': { color: Theme.palette.primary.main },
  },
  textFollowers: {
    cursor: 'pointer',
    fontSize: Theme.typography.fontSize[3],
    opacity: '0.5',
    padding: Theme.spacing(0, 3),
    '&:hover': { color: Theme.palette.primary.main },
    '@media (max-width: 576px)': {
      marginLeft: Theme.spacing(0),
      display: 'flex',
      flexDirection: 'row',
    },
  },
  userProfile: {
    width: '100%',
    '@media (max-width: 300px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  btn: {
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    width: '100px',
    height: '40px',
    fontSize: 14,
    textDecoration: 'none',
    borderRadius: Theme.spacing(6),
    cursor: 'pointer',
  },
  btnNot: {
    cursor: 'not-allowed',
  },
  networks: {
    '@media (max-width: 576px)': {
      marginTop: Theme.spacing(6),
    },
  },
  bio: {
    marginLeft: Theme.spacing(10),
    marginTop: Theme.spacing(3),
    width: '600px',
    overflow: 'hidden',
    '@media (max-width: 576px)': {
      marginLeft: Theme.spacing(0),
      marginTop: Theme.spacing(12),
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  infoBio: {
    '@media (max-width: 300px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
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
  link: {
    textDecoration: 'none',
  },
}))

const InfoCreator = ({
  isMyAccount = false,
  name,
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
  discordId,
  youtube,
  facebook,
  tiktok,
  snapchat,
  userIndex = null,
}) => {
  const classes = useStyle({ userIndex, isMyAccount })

  const [viewModal, setViewModal] = useState<boolean>(false)
  const [isFollow, setIsFollow] = useState<boolean>(false)
  const [openFollowModal, setOpenFollowModal] = useState<boolean>(false)

  const address = useMetamaskAccount()

  const followMutation = useMutation(createFollow)
  const unFollowMutation = useMutation(unFollow)
  const { data: FollowQuery = {}, isLoading } = useQuery(
    'FollowQuery',
    () =>
      checkExistingFollow({
        follower_address: publicKey,
        followee_address: address as string,
      }),
    {
      refetchOnWindowFocus: false,
    }
  )

  useEffect(() => {
    const { follow } = FollowQuery
    setIsFollow(follow)
  }, [FollowQuery, following, followers])
  const setConnectWallet = useSetModalShow()

  const handleSubmitUnfollow = e => {
    e.preventDefault()
    unFollowMutation.mutate({
      follower_address: publicKey,
      followee_address: address as string,
    })
    setIsFollow(false)
  }

  const handleOpenModal = value => {
    setViewModal(value)
    setOpenFollowModal(true)
  }

  const [openMessage, setOpenMessage] = useState<boolean>(false)

  function TransitionUp(props: TransitionProps) {
    return <Slide {...props} direction="up" />
  }

  const [transition, setTransition] = useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined)
  const handleTransition =
    (Transition: React.ComponentType<TransitionProps>) => () => {
      setTransition(() => Transition)
      setOpenMessage(true)
    }

  const handleClose = () => {
    setOpenMessage(false)
  }

  const handleSubmitFollow = e => {
    e.preventDefault()

    if (address != null) {
      followMutation.mutate({
        follower_address: publicKey,
        followee_address: address as string,
      })
      setIsFollow(true)
    } else {
      setConnectWallet(true)
    }
  }

  return (
    <>
      <Grid container direction="row">
        <Grid
          item
          container
          justify="space-around"
          direction="row"
          className={classes.userProfile}
          sm={8}
          xs={12}
        >
          <Grid
            item
            md={4}
            xs={12}
            direction="column"
            className={classes.infoBio}
          >
            <Typography variant="h6" color="primary">
              {name}
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              className={classes.userName}
            >
              {username ? `@${username}` : truncateMiddleText(publicKey, 5)}
            </Typography>
          </Grid>
          <Grid
            container
            item
            md={2}
            xs={4}
            direction="column"
            justify="flex-start"
            className={classes.infoBio}
          >
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
                <Typography
                  color="primary"
                  variant="overline"
                  className={classes.textFollow}
                >
                  Following
                </Typography>
              </Button>
              <Typography color="primary" variant="h6">
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
                  color="primary"
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
          <Grid item md={3} sm={9} xs={12}>
            {isMyAccount ? (
              <Link className={classes.link} to={'/editProfile'}>
                <Button variant="outlined" fullWidth>
                  <Typography variant="button">Edit profile</Typography>
                </Button>
              </Link>
            ) : isLoading ? (
              <Spinner height="10vh" />
            ) : (
              <Button
                variant="outlined"
                fullWidth
                onClick={
                  publicKey != address
                    ? isFollow
                      ? handleSubmitUnfollow
                      : handleSubmitFollow
                    : handleTransition(TransitionUp)
                }
                className={publicKey === address ? classes.btnNot : null}
              >
                {isFollow ? (
                  <Typography variant="button">Unfollow</Typography>
                ) : (
                  <Typography variant="button">Follow</Typography>
                )}
              </Button>
            )}
            <MessageSnackBar
              transition={transition}
              open={openMessage}
              close={handleClose}
              key={'message-snackbar'}
              message={"You can't follow yourself"}
            />
          </Grid>
          <Grid container item justify="flex-start" xs={12}>
            <Typography variant="body2" color="primary" className={classes.bio}>
              {bio}
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12} className={classes.networks}>
          <UserNetworks
            publicKey={publicKey}
            web={web}
            ig={ig}
            tw={tw}
            discord={discord}
            discordId={discordId}
            youtube={youtube}
            facebook={facebook}
            tiktok={tiktok}
            snapchat={snapchat}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default InfoCreator
