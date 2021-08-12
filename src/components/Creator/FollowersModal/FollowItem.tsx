import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import {
  createFollow,
  unFollow,
  checkExistingFollow,
} from '../../../services/follow'
import { useAccountStore } from '../../../hooks/useAccountStore'
import { makeStyles } from '@material-ui/core/styles'
import { backgroundGradient } from '../../Styles/Colors'
import { Link } from 'gatsby'
import { Avatar, Button, Grid, Typography, Paper } from '@material-ui/core'

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
  link: { textDecoration: 'none' },
}))

function FollowItem({ user, handleClick, publicKey }) {
  const classes = useStyles()
  const followMutation = useMutation(createFollow)
  const unFollowMutation = useMutation(unFollow)
  const [isFollow, setIsFollow] = useState('')
  const [account, _] = useAccountStore()

  const { data: FollowQuery = {}, isLoading } = useQuery('FollowQuery', () =>
    checkExistingFollow({
      follower_address: publicKey,
      followee_address: account as string,
    })
  )
  console.log(':>>', FollowQuery, account, publicKey, isLoading)

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
            className={[classes.profileColor, classes.avatar]}
          >
            {' '}
          </Avatar>
          <Link
            to={`/creator/?address=${user.publicAddress}`}
            className={classes.link}
          >
            <Typography variant="subtitle2">{`@${user.username}`}</Typography>
          </Link>
        </Grid>
        <Grid md={3} xs={6} item container justify="flex-end">
          {user.publicAddress !== account ? (
            <Button
              onClick={isFollow ? handleSubmitUnfollow : handleSubmitFollow}
              variant="outlined"
              className={classes.btnFollow}
            >
              {isFollow ? (
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
        </Grid>
      </Grid>
    </Paper>
  )
}

export default FollowItem
