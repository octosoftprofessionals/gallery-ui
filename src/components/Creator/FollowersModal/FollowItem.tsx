import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import {
  createFollow,
  unFollow,
  checkExistingFollow,
} from '../../../services/follow'
import { useAccountStore } from '../../../hooks/useAccountStore'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import {
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
  Tooltip,
  Paper,
} from '@material-ui/core'

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
}))

function FollowItem({ user, handleClick, publicKey }) {
  const classes = useStyles()
  console.log(user.publicAddress)
  const followMutation = useMutation(createFollow)
  const unFollowMutation = useMutation(unFollow)
  const { data: FollowQuery = {}, isLoading } = useQuery('FollowQuery', () =>
    checkExistingFollow({
      follower_address: publicKey,
      followee_address: account as string,
    })
  )
  const [isFollow, setIsFollow] = useState('')
  const [account, _] = useAccountStore()

  useEffect(() => {
    const { follow } = FollowQuery
    setIsFollow(follow)
  }, [FollowQuery])

  const handleSubmitFollow = e => {
    console.log(e)
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

  console.log('yo', account)
  console.log('el folloer', publicKey)

  return (
    <Button
      fullWidth
      className={classes.btnContainer}
      onClick={() => handleClick(false)}
    >
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
          <Avatar className={classes.avatar}></Avatar>
          <Link to={`/creator/?address=${user.publicAddress}`}>
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
    </Button>
  )
}

export default FollowItem
