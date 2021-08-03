import React, { useState } from 'react'

import { useMutation, useQuery } from 'react-query'
import {
  createFollow,
  unFollow,
  checkExistingFollow,
} from '../../../services/follow'
import { useAccountStore } from '../../../hooks/useAccountStore'

import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
  Tooltip,
} from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import { FileCopy } from '@material-ui/icons'

import { boxShadow, colors } from '../../Styles/Colors'
import { Link } from 'gatsby'
import ButtonsSocialMedia from './ButtonsSocialMedia'

const useStyle = makeStyles(Theme => ({
  root: {},
  containerButton: { position: 'relative', marginBottom: Theme.spacing(10) },
  button: {
    padding: 0,
    boxShadow: boxShadow.boxShadow1,
    backgroundColor: Theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: Theme.palette.primary.main,
      transform: 'none',
      boxShadow: 'none',
    },
    zIndex: 30,
  },
  textButton: {
    fontFamily: Theme.typography.fontFamily[1],
    fontWeight: 400,
    padding: Theme.spacing(1, 5),
  },
  textKeyPublic: {
    fontFamily: Theme.typography.fontFamily[1],
    fontWeight: 400,
    padding: Theme.spacing(1, 5),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '60%',
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
  userName: { fontSize: Theme.typography.fontSize[6], width: 'fit-content' },
  textFollow: {
    cursor: 'pointer',
    fontSize: Theme.typography.fontSize[4],
    '&:hover': { color: Theme.palette.primary.main },
  },
  textFollowers: {
    cursor: 'pointer',
    fontSize: Theme.typography.fontSize[4],
    '&:hover': { color: Theme.palette.primary.main },
    '@media (max-width: 576px)': {
      marginLeft: Theme.spacing(8),
    },
  },
  divider: {
    backgroundColor: Theme.palette.primary.main,
    opacity: Theme.palette.action.disabledOpacity[1],
    margin: Theme.spacing(5, 0, 5),
  },
  textDate: { textTransform: 'capitalize' },
  iconCopy: { color: colors.IslamicGreen },
}))

const InfoCreator = ({
  isMyAccount = false,
  username,
  publicKey,
  // name,
  followers,
  following,
  followedes,
  // links,
  // bio,
  // createdAt,
  userIndex = null,
}) => {
  const classes = useStyle({ userIndex, isMyAccount })
  const [isCopy, setIsCopy] = useState(false)
  const [account, _] = useAccountStore()
  const followMutation = useMutation(createFollow)
  const unFollowMutation = useMutation(unFollow)
  const { data: FollowQuery = false } = useQuery('FollowQuery', () =>
    checkExistingFollow({
      follower_address: publicKey,
      followee_address: account as string,
    })
  )
  const [isFollow, setIsFollow] = useState(FollowQuery)

  console.log('FollowQuery :>> ', FollowQuery)
  const handleSubmitFollow = e => {
    e.preventDefault()
    followMutation.mutate({
      follower_address: publicKey,
      followee_address: account as string,
    })
    setIsFollow(!isFollow)
  }
  const handleSubmitUnfollow = e => {
    e.preventDefault()
    unFollowMutation.mutate({
      follower_address: account as string,
      followee_address: publicKey,
    })
    setIsFollow(!isFollow)
  }

  const getPublicKey = () => {
    navigator.clipboard.writeText(publicKey)
    setIsCopy(true)
  }

  return (
    <Grid item xs={12} container direction="column" justify="space-around">
      <Grid item className={classes.containerButton}>
        {userIndex ? (
          <Button variant="contained" className={classes.button}>
            <Typography
              variant="caption"
              color="secondary"
              className={classes.textButton}
            >{`#${userIndex}`}</Typography>
          </Button>
        ) : null}
        <Button
          onClick={getPublicKey}
          variant="contained"
          color="primary"
          endIcon={
            <Tooltip
              title={isCopy ? 'Address has copied' : 'Copy Address'}
              placement="top"
            >
              <FileCopy className={isCopy ? classes.iconCopy : null} />
            </Tooltip>
          }
          className={classes.buttonKeyPublic}
        >
          <Typography
            variant="caption"
            color="primary"
            className={classes.textKeyPublic}
          >
            {`${publicKey}`}
          </Typography>
        </Button>
      </Grid>
      <Typography variant="subtitle2" className={classes.userName}>
        {username ? `@${username}` : publicKey}
      </Typography>

      <Grid item container direction="row">
        <Grid item xs={3} container direction="column">
          <Typography variant="h6" color="primary">
            {following ? following : '—'}
          </Typography>
          <Typography variant="overline" className={classes.textFollow}>
            Following
          </Typography>
        </Grid>
        <Grid item xs={3} container direction="column">
          <Typography variant="h6" color="primary">
            {followers ? followers : '—'}
          </Typography>
          <Typography variant="overline" className={classes.textFollowers}>
            Followers
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          {isMyAccount ? (
            <Link to="/editProfile">
              <Button variant="outlined" fullWidth>
                <Typography variant="button">Edit profile</Typography>
              </Button>
            </Link>
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
      </Grid>
      {isMyAccount ? null : (
        <>
          <Typography variant="button" color="primary">
            Followed by
          </Typography>
          <AvatarGroup spacing="small">
            {followedes.map((item, i) => (
              <Avatar key={i} src={item} />
            ))}
          </AvatarGroup>

          <Grid item xs={12} sm={7}>
            <ButtonsSocialMedia
              // links={links}
              verified={true}
              imgUrl={followedes[3]}
              invited={''}
            />
          </Grid>
        </>
      )}

      {/* <Grid item xs={12} sm={11}>
        <Typography variant="caption" color="primary">
          Bio
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body2" color="primary" paragraph>
          {bio !== undefined && bio !== ' ' ? bio : '—'}
        </Typography>
      </Grid> */}
      {/* <Grid item xs={12} sm={11}>
        <Typography variant="caption" color="primary">
          Links
        </Typography>
        <Divider className={classes.divider} />
        {links ? <Links links={links} /> : '—'}
      </Grid> */}
      {/* <Grid item xs={12} sm={11}>
        <Divider className={classes.divider} />
        <Grid container justify="space-between">
          <Typography variant="caption" color="primary">
            Joined
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            className={classes.textDate}
          >
            {createdAt ? `${month} ${year}` : '—'}
          </Typography>
        </Grid>
        <Divider className={classes.divider} />
      </Grid> */}
      <Box height="24px" />
    </Grid>
  )
}

export default InfoCreator
