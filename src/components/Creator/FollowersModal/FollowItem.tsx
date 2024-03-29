import React, { useState, useEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { navigate } from 'gatsby'
import { profilePathFromAddress } from '../../../config/routes'
import Spinner from '../../Spinner'
import {
  createFollow,
  unFollow,
  checkExistingFollow,
  getOneFollowerByIdWithAllHisFollowees,
  getOneFolloweeByIdWithAllHisFollowers,
} from '../../../services/follow'
import { useAccountStore } from '../../../hooks/useAccountStore'
import { makeStyles } from '@material-ui/core/styles'
import { backgroundGradient } from '../../Styles/Colors'
import { Link } from 'gatsby'
import { Avatar, Button, Grid, Typography, Paper } from '@material-ui/core'
import { getUser } from '../../../services/users'

const useStyles = makeStyles(Theme => ({
  avatar: {
    marginRight: Theme.spacing(3),
  },
  btnContainer: {
    padding: Theme.spacing(5),
  },
  btnText: {
    padding: Theme.spacing(0, 2),
  },
  btnFollow: {
    padding: Theme.spacing(2, 6),
  },
  profileColor: {
    color: '#FFF',
    background: backgroundGradient.backgroundGradient1,
  },
  link: { cursor: 'pointer' },
}))

function FollowItem({
  user,
  publicKey,
  setOpenModal,
}: {
  user: any
  publicKey: string
  setOpenModal: any
}) {
  const classes = useStyles()
  const followMutation = useMutation(createFollow)
  const unFollowMutation = useMutation(unFollow)
  const [isFollow, setIsFollow] = useState('')
  const queryClient = useQueryClient()
  const { account } = useAccountStore()

  const { data: FollowQuery = {}, isLoading } = useQuery(
    'FollowQuery',
    () =>
      checkExistingFollow({
        follower_address: publicKey,
        followee_address: account as string,
      }),
    {
      refetchOnWindowFocus: false,
    }
  )

  useEffect(() => {
    const { follow } = FollowQuery
    setIsFollow(follow)
  }, [FollowQuery])

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

  const handleClicked = () => {
    getUser({ public_address: user.publicAddress })
      .then(newUser => {
        const creatorProfileLink = profilePathFromAddress(newUser.publicAddress)
        queryClient.setQueryData('creatorQuery', newUser)
        if (window.location.pathname === '/profile') {
          navigate(creatorProfileLink)
        }
      })
      .catch(e => console.log('Error in getUser', e))

    getOneFollowerByIdWithAllHisFollowees(user.publicAddress)
      .then(newDate => queryClient.setQueryData('followersQuery', newDate))
      .catch(e =>
        console.log('Error in getOneFollowerByIdWithAllHisFollowees', e)
      )
    getOneFolloweeByIdWithAllHisFollowers(user.publicAddress)
      .then(newDate => queryClient.setQueryData('followeeQuery', newDate))
      .catch(e =>
        console.log('Error in getOneFolloweeByIdWithAllHisFollowers', e)
      )
    setOpenModal(false)
  }

  return (
    <Paper fullWidth className={classes.btnContainer}>
      <Grid
        md={12}
        item
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid
          md={9}
          xs={5}
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Avatar
            alt={user.username}
            className={`${classes.profileColor}, ${classes.avatar}`}
            src={user.profileImgUrl}
          >
            {' '}
          </Avatar>
          <div className={classes.link} onClick={handleClicked}>
            <Typography variant="subtitle2">{`@${user.username}`}</Typography>
          </div>
        </Grid>
        {/* <Grid md={3} xs={6} item container justify="flex-end">
          {user.publicAddress !== account && window.location.pathname === '/profile' ? (
            <Button
              onClick={isFollow ? handleSubmitUnfollow : handleSubmitFollow}
              variant="outlined"
              className={classes.btnFollow}
            >
              {isLoading ? (
                <Spinner height="50px" />
              ) : isFollow ? (
                <Typography variant="button" className={classes.btnText}>
                  Unfollow
                </Typography>
              ) : (
                <Typography variant="button" className={classes.btnText}>
                  Follow
                </Typography>
              )}
            </Button>
          ) : null}
        </Grid> */}
      </Grid>
    </Paper>
  )
}

export default FollowItem
